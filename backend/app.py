from flask import Flask, request, render_template, jsonify
import numpy as np
import pickle
from flask_cors import CORS
from pymongo import MongoClient
import os
from dotenv import load_dotenv


load_dotenv()

# Create Flask app
app = Flask(__name__)

# Enable CORS for all routes
CORS(app)

# Configure MongoDB
mongodb_uri = os.getenv('MONGODB_URI')
client = MongoClient(mongodb_uri)
db = client['AgreFarm']  # Replace with your database name
collection = db['DataHistory'] 

# Load model with error handling
try:
    model = pickle.load(open('backend\dataset\Rec_model.pkl', 'rb'))
   
except FileNotFoundError:
    print("Error: Rec_model.pkl file not found! Make sure it exists in the same directory as app.py")
    model = None
except Exception as e:
    print(f"Error loading model: {e}")
    model = None

@app.route("/CropReco", methods=['POST'])
def predict():
    if not model:
        return jsonify({"error": "Model is not loaded."}), 500
    
    try:
        # Extract JSON data from request
        data = request.json
        N = int(data['Nitrogen'])
        P = int(data['Phosphorus'])
        K = int(data['Potassium'])
        T = float(data['Temperature'])
        H = float(data['Humidity'])
        PH = float(data['Ph'])
        RF = float(data['Rainfall'])

        # Create feature array
        feature_list = [N, P, K, T, H, PH, RF]
        single_pred = np.array(feature_list).reshape(1, -1)

        # Make prediction
        prediction = model.predict(single_pred)
        
        # Return JSON response
        key={
            1: 'rice',
            2: 'maize',
            3: 'chickpea',
            4: 'kidneybeans',
            5: 'pigeonpeas',
            6: 'mothbeans',
            7: 'mungbean',
            8: 'blackgram',
            9: 'lentil',
            10: 'pomegranate',
            11: 'banana',
            12: 'mango',
            13: 'grapes',
            14: 'watermelon',
            15: 'muskmelon',
            16: 'apple',
            17: 'orange',
            18: 'papaya',
            19: 'coconut',
            20: 'cotton',
            21: 'jute',
            22: 'coffee'
        }
        crop_prediction = key[int(prediction[0])]

        # Save the prediction to MongoDB
        prediction_data = {
            "crop": crop_prediction,
            "Nitrogen": N,
            "Phosphorus": P,
            "Potassium": K,
            "Temperature": T,
            "Humidity": H,
            "Ph": PH,
            "Rainfall": RF
        }

        collection.insert_one(prediction_data)  # Insert the prediction into the collection

       
        return jsonify(key[int(prediction[0])]), 200

        # print("Prediction type:", type(prediction[0]))
        # print("Prediction is:", prediction[0])
        # return jsonify({"prediction": prediction[0]})
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500


# # Initialize database
# with app.app_context():
#     db.create_all()

if __name__ == '__main__':
    app.run(debug=True)






















# from flask import Flask, request, render_template
# import numpy as np
# import pickle

# from flask_cors import CORS
# from flask_sqlalchemy import SQLAlchemy


# # Create Flask app
# app = Flask(__name__)



# # Load model safely with error handling
# try:
#     model = pickle.load(open('model.pkl', 'rb'))
# except FileNotFoundError:
#     print("Error: model.pkl file not found! Make sure it exists in the same directory as app.py")
# except Exception as e:
#     print(f"Error loading model: {e}")

# @app.route('/')
# def index():
#     return render_template('index.html')

# @app.route("/CropReco", methods=['POST'])
# def predict():
#     if 'model' not in globals():
#         return render_template('index.html', result="Error: Model is not loaded.")
#     try:
#         # Get values from form
#         N = float(request.form['N'])
#         P = float(request.form['P'])
#         K = float(request.form['K'])
#         T = float(request.form['T'])
#         H = float(request.form['H'])
#         PH = float(request.form['PH'])
#         RF = float(request.form['RF'])

#         # Create feature array
#         feature_list = [N, P, K, T, H, PH, RF]
#         single_pred = np.array(feature_list).reshape(1, -1)

#         # Make prediction
#         prediction = model.predict(single_pred)
        
#         return render_template('index.html', result=prediction[0])
    
#     except Exception as e:
#         return render_template('index.html', result=f"Error: {str(e)}")


# # from flask_cors import CORS
# # from flask_sqlalchemy import SQLAlchemy

# #########

# CORS(app)
# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///crop.db'
# app.config["SQLALCHEMY_TRACK_MODIFICATIONS"]=False

# db=SQLAlchemy(app)

# import routes
# with app.app_context():
#     db.create_all()







# if __name__ == '__main__':
#     app.run(debug=True)
