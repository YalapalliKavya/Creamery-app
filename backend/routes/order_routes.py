from flask import Blueprint, jsonify
from db import mongo
from bson.objectid import ObjectId

delivery_bp = Blueprint("delivery", __name__)

@delivery_bp.route("/api/deliveries", methods=["GET"])
def get_deliveries():
    deliveries = list(mongo.db.orders.find({"status": "paid"}))
    for d in deliveries:
        d["_id"] = str(d["_id"])
    return jsonify(deliveries)

@delivery_bp.route("/api/deliveries/deliver/<id>", methods=["POST"])
def mark_delivered(id):
    mongo.db.orders.update_one({"_id": ObjectId(id)}, {"$set": {"status": "delivered"}})
    return jsonify({"message": "Delivered"})
