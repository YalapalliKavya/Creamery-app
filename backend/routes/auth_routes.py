from flask import Blueprint, request, jsonify
from werkzeug.security import generate_password_hash, check_password_hash
from app import mongo

auth_routes = Blueprint("auth", __name__)

@auth_routes.route("/register", methods=["POST"])
def register():
    data = request.json
    hashed_password = generate_password_hash(data["password"])

    mongo.db.users.insert_one({
        "name": data["name"],
        "email": data["email"],
        "password": hashed_password,
        "role": data["role"]
    })

    return jsonify({"message": "User Registered Successfully"})
