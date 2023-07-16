import openai

class OpenAi:

    def getMessage(self, question):
        completion = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            temperature=0.7,
            max_tokens=2000,
            messages=[
                {"role": "user", "content": question}]
        )
        response = completion.choices[0].message.content
        return response


    def __init__(self):
        openai.api_key_path = "~/flashcard-gpt/flashcard-app-engine/utils/.openAiKey"