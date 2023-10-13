from flask import Flask, request, jsonify, render_template
import openai
from openai_key import *

app = Flask(__name__)

@app.route("/", methods=["GET"])
def index():
    return render_template("index.html")

@app.route("/ask", methods=["POST"])
def ask():
    user_message = request.form["question"]
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": user_message}
        ]
    )
    answer = response["choices"][0]["message"]["content"]
    return jsonify(answer=answer)

if __name__ == "__main__":
    app.run()
