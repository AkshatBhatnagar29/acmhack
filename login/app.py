from flask import Flask, request, jsonify, session
from flask_bcrypt import Bcrypt
from flask_cors import CORS, cross_origin 
from models import Provider, User
from models import db
 
app = Flask(__name__)
 
app.config['SECRET_KEY'] = 'BinaryPhantoms'
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:12345@localhost/userlog'
 
SQLALCHEMY_TRACK_MODIFICATIONS = False
SQLALCHEMY_ECHO = True
  
bcrypt = Bcrypt(app) 
CORS(app, supports_credentials=True)
db.init_app(app)
  
with app.app_context():
    db.create_all()
 
@app.route("/")
def hello_world():
    return "Hello, World!"
 
@app.route("/signup", methods=["POST"])
def signup():
    email = request.json["email"]
    password = request.json["password"]
 
    user_exists = User.query.filter_by(email=email).first() is not None
 
    if user_exists:
        return jsonify({"error": "Email already exists"}), 409
     
    hashed_password = bcrypt.generate_password_hash(password)
    new_user = User(email=email, password=hashed_password)
    db.session.add(new_user)
    db.session.commit()
 
    session["user_id"] = new_user.id
 
    return jsonify({
        "id": new_user.id,
        "email": new_user.email
    })
 
@app.route("/login", methods=["POST"])
def login_user():
    email = request.json["email"]
    password = request.json["password"]
  
    user = User.query.filter_by(email=email).first()
  
    if user is None:
        return jsonify({"error": "Unauthorized Access"}), 401
  
    if not bcrypt.check_password_hash(user.password, password):
        return jsonify({"error": "Unauthorized"}), 401
      
    session["user_id"] = user.id
  
    return jsonify({
        "id": user.id,
        "email": user.email
    })


# @app.route("/foodform",methods=["POST"])
# def foodform():
#     name=request.json["name"]
#     phoneno=request.json["phoneno"]
#     address=request.json["address"]
#     food=request.json["food"]
#     new_donor = Provider(name=name,phoneno=phoneno,address=address,food=food)
#     db.session.add(new_donor)
#     db.session.commit()
#     return jsonify ({
#         "name":new_donor.name
#     })

# @app.route("/foodform", methods=["POST"])
# def foodform():
#     Name = request.json["name"]
#     Phone = request.json["phoneno"]
#     Food = request.json["food"]
#     Address=request.json["address"]

#     new_donor = Provider(name=Name,phoneno=Phone,address=Address,food=Food)
#     db.session.add(new_donor)
#     db.session.commit()
  
#     # user1 = Provider.query.filter_by(name=Name).first()
#     # user2 = Provider.query.filter_by(phone=Phone).first()
#     # user3 = Provider.query.filter_by(food=Food).first()
#     # user4 = Provider.query.filter_by(address=Address).first()
#     # if user1 is None:
#     #     return jsonify({"error": "Unauthorized Access"}), 401
  
  
#     return jsonify({
#         "name": new_donor.name,
#         "phone": new_donor.phoneno,
#         "food": new_donor.food,
#         "address": new_donor.address
#     })
 
if __name__ == "__main__":
    app.run(debug=True)