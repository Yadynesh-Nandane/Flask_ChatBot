from flask import Flask, render_template, request
from chatterbot import ChatBot
from chatterbot.trainers import ChatterBotCorpusTrainer
from flask_fontawesome import FontAwesome
import os

app = Flask(__name__)
fa = FontAwesome(app)
bot = ChatBot("Chatterbot",storage_adapter="chatterbot.storage.SQLStorageAdapter")
trainer = ChatterBotCorpusTrainer(bot)
trainer.train("chatterbot.corpus.english")
trainer.train("data/data.yml")

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/get')
def get_response():
    uText = request.args.get("msg")
    return str(bot.get_response(uText))

if __name__ == '__main__':
    app.run(debug=True)