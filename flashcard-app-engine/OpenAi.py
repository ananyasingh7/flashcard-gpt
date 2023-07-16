import openai

class OpenAi:

    def getMessage(self, question):
        openai.api_key_path = ".openAiKey"

        completion = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            temperature=0.7,
            max_tokens=2000,
            messages=[
                {"role": "user", "content": question}]
        )

        response = completion.choices[0].message.content
        return response

import warnings
from urllib3.exceptions import InsecureRequestWarning

# Filter out the specific warning
warnings.filterwarnings("ignore")

chatGpt = OpenAi()
question = 'Who was the president of the United States in 1987?'
response = chatGpt.getMessage(question)
print(response)


# Reset the warning filters to their default state (optional)
warnings.resetwarnings()