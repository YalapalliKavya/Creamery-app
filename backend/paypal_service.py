import requests
import base64

PAYPAL_CLIENT_ID = "AbX5ISphzjFotAzGlouqi7ITbOxhsJp-uK2jmq-Jyn8pFePnje5vgmU0x-xyD8e_CFCRcGeo9gdVkOzf"
PAYPAL_SECRET = "ELKZ4o94ioETkFNJnF2IYXEB713-iRK06PWAwCChQ2vq5dLoW9VIrCcv2Su4_znUwCQx2a7s1IhujW0h"
BASE_URL = "https://api-m.sandbox.paypal.com"

def get_access_token():
    auth = f"{PAYPAL_CLIENT_ID}:{PAYPAL_SECRET}"
    encoded = base64.b64encode(auth.encode()).decode()

    response = requests.post(
        f"{BASE_URL}/v1/oauth2/token",
        headers={
            "Authorization": f"Basic {encoded}",
            "Content-Type": "application/x-www-form-urlencoded"
        },
        data={"grant_type": "client_credentials"}
    )

    return response.json()["access_token"]
