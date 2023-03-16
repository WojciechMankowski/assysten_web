import requests
import os
import openai
from flask import Blueprint, jsonify
from wikipedia import page, set_lang, summary
from dotenv import load_dotenv

api = Blueprint('api', __name__)

# ai ...

@api.route("/weather/<city>")
def weather(city):
    load_dotenv()
    api_key = os.getenv('WEATHER')

    url = f'https://api.openweathermap.org/data/2.5/weather?q={city}' \
          f'&appid={api_key}&units=metric&lang=pl'
    res = requests.get(url)
    data = res.json()
    my_data = {'data': data["main"], 'winter': data['wind'], "icon": data['weather'][0]['icon']}
    return jsonify(my_data)

@api.route('/open/<web>')
def open(web):
    print(web)
    print(web in "kalendarz")
    if web in "kalendarz": return jsonify({"url": "https://calendar.google.com/"})
    elif web in "e-mail": return jsonify({"url": "https://mail.google.com/"})
    elif web in "google": return jsonify({"url": "https://www.google.com/"})
    else: return jsonify()

@api.route("/wikipedia/<word>")
def wikipedia(word):
    set_lang("pl")
    content = page(word)
    summary_data = summary(word, sentences=100)
    data = {
        "title": content.title,
        "url": content.url,
        "content": summary_data
    }
    return jsonify(data)

@api.route("/help")
def help():
    helps = [
        "pogoda <miasto> np: pogoda Gdansk",
        "otwórz <co> np: otwórz kalendarz",
        "wikipedia <co> np: wikipedia Python",
    ]
    return jsonify(helps)

@api.route("/ai/<word>")
async def findAi(word):
    load_dotenv()
    openai.api_key = os.getenv('OPENAI')
    response = openai.Completion.create(
        model="text-davinci-003",
        prompt=word,
        temperature=0.5,
        max_tokens=1000,
        top_p=1.0,
        frequency_penalty=0,
        presence_penalty=0
    )
    choices = response.choices[0].text
    obj = response.object
    isCompetion = lambda x: x=="text_completion"
    return jsonify({
        'text': choices,
        'completion': isCompetion(obj)
    })