from flask import Flask, request
from twilio.twiml.messaging_response import MessagingResponse, Message, QuickReply

app = Flask(__name__)

# Define the menu options for each message
menu_options = {
    'hi': [
        QuickReply(
            action='reply',
            body='Option 1',
            payload='option_1'
        ),
        QuickReply(
            action='reply',
            body='Option 2',
            payload='option_2'
        )
    ],
    'hello': [
        QuickReply(
            action='reply',
            body='Option 1',
            payload='option_1'
        ),
        QuickReply(
            action='reply',
            body='Option 2',
            payload='option_2'
        ),
        QuickReply(
            action='reply',
            body='Option 3',
            payload='option_3'
        ),
        QuickReply(
            action='reply',
            body='Option 4',
            payload='option_4'
        )
    ]
}

# Define the main route for handling incoming messages
@app.route('/whatsapp', methods=['POST'])
def handle_whatsapp():
    # Extract the message body from the request
    body = request.form.get('Body', '').strip().lower()

    # Determine which menu options to show based on the message body
    if body in menu_options:
        response = MessagingResponse()
        message = Message()
        message.body('Please select an option:')
        for option in menu_options[body]:
            message.add_quick_reply(option)
        response.append(message)
    else:
        response = MessagingResponse()
        message = Message()
        message.body('Sorry, I did not understand your message.')
        response.append(message)

    # Return the response
    return str(response)

# Start the Flask server
if __name__ == '__main__':
    app.run()