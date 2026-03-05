from flask import Blueprint, request, jsonify
from paypal_service import get_access_token
import requests

payment_bp = Blueprint("payment", __name__)

@payment_bp.route("/create-order", methods=["POST"])
def create_order():
    token = get_access_token()
    total = request.json["total"]

    response = requests.post(
        "https://api-m.sandbox.paypal.com/v2/checkout/orders",
        headers={
            "Content-Type": "application/json",
            "Authorization": f"Bearer {token}"
        },
        json={
            "intent": "CAPTURE",
            "purchase_units": [{
                "amount": {
                    "currency_code": "USD",
                    "value": str(total)
                }
            }]
        }
    )

    return jsonify(response.json())
