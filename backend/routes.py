from app import app, db
from flask import request,jsonify
from models import Crop
# import requests,os
# from dotenv import load_dotenv

# load_dotenv()
# ACCESS_KEY=os.getenv('ACCESS_KEY')

# Get all history
@app.route('/history', methods=['GET'])
def get_history():
    crops=Crop.query.all()
    result=[crop.to_json() for crop in crops]
    return jsonify(result)
    # [{...},{...}]  

#create a history
@app.route("/crop",methods=["POST"])
def create_crop():
    try:
        data=request.json

        
        
        name=data.get("name")

        #fetch image
        img_url=f'https://sl.bing.net/bDisN86LYsK'
        new_crop=Crop(name=name,img_url=img_url)


        db.session.add(new_crop) 
        db.session.commit()
        return jsonify({"message":"Crop created successfully"}),201
    except Exception as e:
        db.session.rollback()
        return jsonify({"error":str(e)}),500


#delete a history
@app.route("/crop/<int:id>",methods=["DELETE"])
def delete_crop(id):
    try:
        crop=Crop.query.get(id)
        if crop is None:
            return jsonify({"error":"Crop not found"}),404
        
        db.session.delete(crop)
        db.session.commit()
        return jsonify({"message":"Crop deleted successfully"}),200
        
    except Exception as e:
        db.session.rollback()
        return jsonify({"error":str(e)}),500
    
#update 
@app.route("/crop/<int:id>",methods=["PATCH"])
def update_crop(id):
    try:
        crop=Crop.query.get(id)
        if crop is None:
            return jsonify({"error":"Crop is not found"}),404
        data=request.json

        crop.name=data.get("name",crop.name)
        crop.img_url=data.get("img_url",crop.img_url)

        db.session.commit()
        return jsonify(crop.to_json()),200
    except Exception as e:
        db.session.rollback()
        return jsonify({"error: ":str(e)}),500

        

        