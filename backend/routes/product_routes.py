from flask import Blueprint, request, jsonify
from app import mongo

product_routes = Blueprint("products", __name__)

@product_routes.route("/add_product", methods=["POST"])
def add_product():
    data = request.json
    mongo.db.products.insert_one(data)
    return jsonify({"message": "Product Added"})

@product_routes.route("/products", methods=["GET"])
def get_products():
    products = list(mongo.db.products.find({}, {"_id": 0}))
    return jsonify(products)
