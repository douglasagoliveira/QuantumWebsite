import os
from groq import Groq

# Inicializa o cliente buscando a chave na variável de ambiente
client = Groq(
    api_key=os.environ.get("GROQ_API_KEY"),
)

# Faz a requisição para o modelo (neste caso, o Llama 3)
chat_completion = client.chat.completions.create(
    messages=[
        {
            "role": "user",
            "content": "Explique a vantagem de usar o Groq em uma frase curta.",
        }
    ],
    model="openai/gpt-oss-120b", 
)

# Imprime a resposta no terminal
print(chat_completion.choices[0].message.content)