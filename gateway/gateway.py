from fastapi import FastAPI, Request
import requests

app = FastAPI()

SERVICE_MAP = {
    "student-service": "http://student-service:8001",
    "payment-service": "http://payment-service:8002",
    "schedule-service": "http://schedule-service:8003",
    "analytics-service": "http://analytics-service:8004",
}

# универсальный прокси
@app.api_route("/{service}/{path:path}", methods=["GET", "POST", "PUT", "DELETE"])
async def proxy(service: str, path: str, request: Request):
    if service not in SERVICE_MAP:
        return {"error": f"Unknown service '{service}'"}

    target_url = f"{SERVICE_MAP[service]}/{path}"

    # читаем тело
    body = await request.body()

    # пробрасываем запрос
    response = requests.request(
        method=request.method,
        url=target_url,
        headers={k: v for k, v in request.headers.items() if k != "host"},
        params=request.query_params,
        data=body,
    )

    return response.json()

