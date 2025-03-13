from fastapi import FastAPI

app = FastAPI()

@app.get("/ping")
def ping():
    return {"message": "pong"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)

# uvicorn main:app --host 0.0.0.0 --port 8000
# python3 -m uvicorn main:app --host 0.0.0.0 --port 8000
