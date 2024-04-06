from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.dialects.mysql import CHAR
from uuid import uuid4

db = SQLAlchemy()

def get_uuid():
    return uuid4().hex

class User(db.Model):
    __tablename__ = "users"
    id = db.Column(CHAR(32), primary_key=True, unique=True, default=get_uuid)  
    email = db.Column(db.String(150), unique=True)
    password = db.Column(db.Text, nullable=False)

class Provider(db.Model):
    __tablename__ = "provider_info"
    
    name = db.Column(db.String(50))
    phoneno = db.Column(db.String(10), primary_key=True,unique=True)
    address = db.Column(db.String(150))
    food = db.Column(db.String(100))

