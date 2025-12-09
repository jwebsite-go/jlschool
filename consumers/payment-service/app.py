from fastapi import FastAPI
from kafka import KafkaConsumer
import threading
import json
import time
import psycopg2


app = FastAPI()
messages = []


def get_conn():
for _ in range(20):
try:
conn = psycopg2.connect(host='db', dbname='school', user='postgres', password='postgres')
return conn
except Exception:
time.sleep(1)
raise RuntimeError('DB not available')


conn = get_conn()
cur = conn.cursor()


def consume():
consumer = KafkaConsumer(
'payments',
bootstrap_servers='kafka:9092',
auto_offset_reset='earliest',
value_deserializer=lambda v: json.loads(v.decode('utf-8'))
)
for msg in consumer:
payload = msg.value
print('payment-service received', payload)
messages.append(payload)
cur.execute("INSERT INTO payments (amount, data) VALUES (%s, %s)", (payload.get('amount'), json.dumps(payload)))
conn.commit()


threading.Thread(target=consume, daemon=True).start()


@app.get('/')
def root():
return {'service': 'payment-service', 'messages': messages}