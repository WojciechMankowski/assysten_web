import os
from dotenv import load_dotenv
import openai
load_dotenv()
print(os.getenv('OPENAI'))
openai.api_key = os.getenv('OPENAI')
command = "programowanie funkcyjne"
response = openai.Completion.create(
    model="text-davinci-003",
    prompt=command,
    temperature=0.5,
    max_tokens=1000,
    top_p=1.0,
    frequency_penalty=0,
    presence_penalty=0
)
print(response)
choices = response.choices[0].text
print(choices)
obj = response.object
print(obj)