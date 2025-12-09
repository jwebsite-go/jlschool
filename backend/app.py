from flask import Flask, request, jsonify
import gspread
from oauth2client.service_account import ServiceAccountCredentials

app = Flask(__name__)

SCOPE = ["https://spreadsheets.google.com/feeds",
         "https://www.googleapis.com/auth/spreadsheets",
         "https://www.googleapis.com/auth/drive.file",
         "https://www.googleapis.com/auth/drive"]

CREDS = ServiceAccountCredentials.from_json_keyfile_name("credentials.json", SCOPE)
client = gspread.authorize(CREDS)

SHEET = client.open("JL School Requests").sheet1


@app.route("/submit", methods=["POST"])
def submit():
    data = request.json

    first_name = data.get("firstName")
    last_name = data.get("lastName")
    email = data.get("email")
    phone = data.get("phone")
    program = data.get("program")
    texting_ok = data.get("textingOk")

    SHEET.append_row([first_name, last_name, email, phone, program, texting_ok])

    return jsonify({"status": "success"}), 200


@app.route("/", methods=["GET"])
def home():
    return "JL School Backend is running!"


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
