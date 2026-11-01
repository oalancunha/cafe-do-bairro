from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def inicio():
    return {"mensagem": "Bem vindo ao backend do Café do Bairro!"}

@app.get("/sobre")
def sobre():
    return {"projeto": "Café do Bairro", "versao": "1.0"}