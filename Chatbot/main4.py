import requests
from flask import Flask, request, jsonify

app = Flask(__name__)

# replace with your Landbot chatbot ID
CHATBOT_ID = "1859444"

def send_message_to_landbot(message_data):
    url = f"https://api.landbot.io/v1/conversations/{1859444}/reply"
    headers = {"Content-Type": "application/json"}
    response = requests.post(url, headers=headers, json=message_data)
    if response.status_code != 200:
        raise Exception(f"Failed to send message: {response.json()}")

@app.route("/webhook", methods=["POST"])
def webhook():
    incoming_message = request.json.get("message")
    if incoming_message and incoming_message.lower() == "hi":
        # send message with interactive buttons
        message_data = {
            "text": "Choose an option:",
            "buttons": [
                {"text": "Button 1", "value": "button1"},
                {"text": "Button 2", "value": "button2"},
                {"text": "Button 3", "value": "button3"}
            ]
        }
        send_message_to_landbot(message_data)
    else:
        # send a regular text message
        message_data = {"text": "Thanks for your message!"}
        send_message_to_landbot(message_data)
    return jsonify({"success": True})

if __name__ == "__main__":
    app.run(debug=True)