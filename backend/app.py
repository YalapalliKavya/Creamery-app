from flask import Flask, request, jsonify
from flask_pymongo import PyMongo
from flask_cors import CORS
from config import MONGO_URI
from bson.objectid import ObjectId

app = Flask(__name__)
CORS(app)

app.config["MONGO_URI"] = MONGO_URI
mongo = PyMongo(app)

# -----------------------------
# CREATE USER (Collection auto created)
# -----------------------------
@app.route("/add_user", methods=["POST"])
def add_user():
    data = request.json

    mongo.db.users.insert_one({
        "name": data["name"],
        "email": data["email"],
        "password": data["password"],
        "role": data["role"]
    })

    return jsonify({"message": "User Added Successfully"})


# -----------------------------
# ADD PRODUCT
# -----------------------------
@app.route("/add_product", methods=["POST"])
def add_product():
    data = request.json

    mongo.db.products.insert_one({
        "name": data["name"],
        "price": data["price"],
        "stock": data["stock"],
        "category": data["category"]
    })

    return jsonify({"message": "Product Added Successfully"})


# -----------------------------
# GET PRODUCTS
# -----------------------------
@app.route("/get_products", methods=["GET"])
def get_products():
    products = list(mongo.db.products.find())

    for product in products:
        product["_id"] = str(product["_id"])

    return jsonify(products)


# -----------------------------
# CREATE ORDER
# -----------------------------
@app.route("/create_order", methods=["POST"])
def create_order():
    data = request.json

    mongo.db.orders.insert_one({
        "customer_id": data["customer_id"],
        "products": data["products"],
        "total": data["total"],
        "payment_status": "Pending",
        "delivery_status": "Packed"
    })

    return jsonify({"message": "Order Created Successfully"})


# -----------------------------
# UPDATE DELIVERY STATUS
# -----------------------------
@app.route("/update_delivery/<id>", methods=["PUT"])
def update_delivery(id):
    data = request.json

    mongo.db.orders.update_one(
        {"_id": ObjectId(id)},
        {"$set": {"delivery_status": data["status"]}}
    )

    return jsonify({"message": "Delivery Updated"})


# -----------------------------
# ADD FEEDBACK
# -----------------------------
@app.route("/add_feedback", methods=["POST"])
def add_feedback():
    data = request.json

    mongo.db.feedback.insert_one({
        "customer_id": data["customer_id"],
        "product_id": data["product_id"],
        "rating": data["rating"],
        "comment": data["comment"]
    })

    return jsonify({"message": "Feedback Added Successfully"})


if __name__ == "__main__":
    app.run(debug=True)
