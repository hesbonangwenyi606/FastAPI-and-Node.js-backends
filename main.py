from fastapi import FastAPI

app = FastAPI()

@app.get("/api/v1/items")
async def get_items():
    return [{"id": 1, "name": "Monitor"}, {"id": 2, "name": "Server"}]
