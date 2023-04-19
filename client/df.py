python app.py
from flask import Flask, request, jsonify
import random

app = Flask(__name__)

@app.route('/', methods=['POST'])
def chatbot():
    user_input = request.form['user_input']
    response = generate_response(user_input)
    return jsonify({'response': response})

def generate_response(user_input):
    # Replace this with your own code to generate responses
    responses = ['I am sorry, I did not understand your request.',
                 'Can you please provide more details?',
                 'What specifically would you like to know about our college?']
    return random.choice(responses)

if __name__ == '__main__':
    app.run(debug=True)
