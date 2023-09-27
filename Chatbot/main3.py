from twilio.twiml.messaging_response import MessagingResponse
from flask import Flask, request

app = Flask(__name__)
count = 0

@app.route('/sms', methods=['POST'])
def reply_whatsapp():
    incoming_msg = request.values.get('Body', '')
    response = MessagingResponse()
    words = incoming_msg.split(':')
    print(words)
    input = words[0]
    # print("input---",input)
    # print("input1---",input1)
    
    if incoming_msg.lower() == 'hi' or incoming_msg.lower() == 'hello':
        response.message("Select a language:\n\n 1. English\n" + "2. Hindi\n" + "3. Marathi\n")
    elif incoming_msg.lower() == '1':
        lang = "Hello !\n "+"We are here for the ease of grievance lodging and tracking across multiple departments of the ‘Ministry of Housing and Urban affairs.\n\n"+"Upload Aadhar/ Pan copy for Registration to the portal." 
        response.message(lang)
    elif incoming_msg.lower() == '2':
        lang = "You have selected Marathi language\n\n" \
                    "We are here for the ease of grievance lodging and tracking across multiple departments of the ‘Ministry of Housing and Urban affairs.\n\n" \
                     "Upload Aadhar/ Pan copy for Registration to the portal.\n\n" 
        response.message(lang)
    elif incoming_msg.lower() == '3':
        lang = "You have selected Hindi language\n\n" \
                    "We are here for the ease of grievance lodging and tracking across multiple departments of the ‘Ministry of Housing and Urban affairs.\n\n" \
                     "Upload Aadhar/ Pan copy for Registration to the portal.\n\n" 
        response.message(lang)
    elif incoming_msg.lower() == 'addhar':
        lang = "Please confirm the details -\n\n" \
               "Name — Akshay Raj\n"\
               "DOB— 18/06/2003\n"\
               "Mobile Number — 7709123123\n"\
               "Address — Nashik\n\n"\
               "1. Yes, its correct\n"\
               "2. No, its not correct"
        response.message(lang)
    elif incoming_msg.lower() == 'yes':
        lang = "Please Enter the 6 digit OTP sent on your Aadhar Linked Mobile Number +91 7709123123 for authentication\n\n" 
        response.message(lang)
    elif incoming_msg.lower() == '901234':
        lang = "Please choose the service.\n\n"\
               "1. Register a grievance like\n" + "*Complaint : grievance*\n"\
               "2. Check Complain Status\n" 
        response.message(lang) 
    elif len(words) > 1 or input == "Complaint":
        input1 = words[1]
        message_in = "a. Correct!\n"\
                     "b. Add more Info/Correct grievance"
        response.message( "Your grievance : "+input1+ "\n\n\n" + message_in)
    elif incoming_msg.lower() == 'a' or incoming_msg.lower() == 'correct':
        lang = "We’ve Forwarded your complaint to SEWAGE Department.Thanks for Complaining.\n\n"\
               "Your Complain ID is DHU0034.\n"\
               "For status information of Complaint via SMS, message “INFO” to 4040\n"\
               "Thank You!"
        response.message(lang)
    else:
        response.message('Sorry, I did not understand your message.')
    
    return str(response)


if __name__ == "__main__":
    app.run(debug=True)
