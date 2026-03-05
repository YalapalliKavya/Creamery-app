def order_schema(data):
    return {
        "customer": data["customer"],
        "items": data["items"],
        "total": data["total"],
        "status": "Packed"
    }
