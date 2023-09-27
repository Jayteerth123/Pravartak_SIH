#from dateutil.parser import parse
from flask import Flask, request
from twilio.twiml.messaging_response import MessagingResponse
from RoboHashpy import RoboHash


app = Flask(__name__)
count = 0

@app.route("/sms", methods=['POST'])

def reply():
    global c, d
    incoming_msg = request.form.get('Body').lower()
    response = MessagingResponse()
    message = response.message()
    words = incoming_msg.split('@')
    responded = False
    input = words[0].strip().lower()
    if "hello" or "hi" in incoming_msg:
        start = "Select an language\n\n" \
                "1. English\n" \
                "2. Hindi\n" \
                "3. Marathi"              
        message.body(start)
        responded = True
    elif incoming_msg == "1":
        lang = "You have selected English language\n\n" \
                    "Hello! I am your meeting assistant. I will help you to schedule your meeting.\n\n" \
                     "Please enter the meeting time in the following format only.\n\n" 
        message.body(lang)
        responded = True
    elif "2" in incoming_msg:
        lang = "You have selected Hindi language\n\n" \
                "नमस्ते! मैं आपका बैठक सहायक हूं। मैं आपकी बैठक की अनुसूची तैयार करने में आपकी मदद करूंगा।\n\n" \
                "कृपया निम्नलिखित प्रारूप में बैठक का समय दर्ज करें।\n\n"
        message.body(lang)
        responded = True
    elif "3" in incoming_msg:
        lang = "You have selected Marathi language\n\n"
        message.body(lang)
        responded = True     
    elif len(words) == 1 and "no" in incoming_msg:
        REPLY = "Ok. Have a nice day!"
        message.body(REPLY)
        responded = True

    elif len(words) != 1:
        input_type = words[0].strip().lower()
        input_string = words[1].strip()

        if input_type == "time":
            REPLY = "Please enter the meeting message in the following format only.\n\n" \
                    "*Reminder @* _type the message_"
            c = date(input_string)
            message.body(REPLY)
            responded = True

        if input_type == "reminder":
            d = reminder(input_string)
            message.body("Hello Everyone!\n"+"Meet time : "+c+"\nMeet purpose:"+d)
            responded = True

        """if "image" in incoming_msg:
            REPLY = "Please enter the image name in the following format only.\n" \
                    "*Image @* _type the image name_"
            message.body(REPLY)
            responded = True"""

        if input_type == "image":
            img = image(input_string)
            rb = RoboHash()
            message.media(rb.get_im_hash(img,1))
            responded = True
        if input_type == "reason":
            imp = important(input_string)
            message.body(imp)
            responded = True

    elif not responded:
        message.body('Incorrect request format. Please enter in the correct format')

    return str(response)


def date(msg):
    t=msg
    time = t.strftime('%H:%M')
    return time


def reminder(msg):
    return msg

def image(msg):
    return msg

def important(msg):
    return msg

if __name__ == "__main__":
    app.run(debug=True)