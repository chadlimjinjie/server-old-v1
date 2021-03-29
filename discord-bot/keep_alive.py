import random
import requests
from flask import Flask, render_template, redirect, url_for
from threading import Thread

app = Flask(__name__, template_folder='discord-bot/templates')
sites = ['https://www.crypto.com', 'https://www.onwardsingapore.com/', 'https://www.xstaking.sg/']

@app.route('/')
def main():
  return redirect(random.choice(sites)) #url_for('dashboard')

def run():
  app.run(host='0.0.0.0', port=8080)

def keep_alive():
  server = Thread(target=run)
  server.start()
