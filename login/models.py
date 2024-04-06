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
