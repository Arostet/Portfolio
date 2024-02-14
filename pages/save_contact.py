from flask import Flask, request
import json

app = Flask(__name__)

@app.route('/submit', methods=['POST'])
def save_data():
    data = request.json
    with open('data.json', 'w') as f:
        json.dump(data, f)
    return 'Data saved'

if __name__ == '__main__':
    app.run(debug=True)