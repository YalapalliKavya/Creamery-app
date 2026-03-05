def user_schema(data):
    return {
        "name": data["name"],
        "email": data["email"],
        "password": data["password"],
        "role": data["role"]  # admin / customer
    }
