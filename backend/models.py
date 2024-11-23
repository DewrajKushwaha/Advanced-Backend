from app import db

class Crop(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    img_url = db.Column(db.String(200), nullable=True)




    def to_json(self):
        return{
            'id': self.id,
            'name': self.name,
            'imgUrl': self.img_url
        }

