"""
Flask server for handling user questions and interacting with OpenAI API.
"""

import logging
import os

from flask import Flask, request, jsonify, render_template
import openai

# Setup logging
logging.basicConfig(level=logging.INFO)

app = Flask(__name__)

# Set OpenAI API Key from environment variable
openai.api_key = os.getenv("OPENAI_API_KEY")

@app.route("/", methods=["GET"])
def index():
    """Render the main page."""
    return render_template("index.html")

@app.route("/ask", methods=["POST"])
def ask():
    """
    Handle POST requests to interact with OpenAI API.
    Retrieve user question from form and return model's answer.
    """
    try:
        user_message = request.form.get("question")
        if not user_message:
            raise ValueError("Question not provided in the request form.")
        
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are a helpful assistant."},
                {"role": "user", "content": user_message}
            ]
        )
        answer = response["choices"][0]["message"]["content"]
        return jsonify(answer=answer)
    
    except openai.error.OpenAIError as e:
        logging.error("OpenAI API Error: %s", str(e))
        return jsonify(error="Error interacting with OpenAI API."), 500
    
    except Exception as e:  # pylint: disable=broad-except
        logging.error("Error: %s", str(e))
        return jsonify(error="Internal Server Error."), 500

if __name__ == "__main__":
    app.run()
