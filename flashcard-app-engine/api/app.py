from flask import Flask, request, jsonify
from utils.OpenAi import OpenAi

app = Flask(__name__)
chatGpt = OpenAi()

@app.route("/ask", methods=["POST"])
def ask_question():
    data = request.get_json()
    question = data.get("question")
    if not question:
        return jsonify(error="Question not provided"), 400

    response = chatGpt.getMessage(question)
    return jsonify(response=response)

if __name__ == "__main__":
    app.run()
