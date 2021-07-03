from flask import Flask, jsonify
from flask import request

app = Flask(__name__)

tax = 0.01

#API 1
@app.route('/api/interest-rate', methods=['GET'])
def interestrate():
    return jsonify( {'value': tax} )

#API 2
@app.route('/api/calc-interests', methods=['POST'])
def calcinterests():
    value = request.form['value']
    return jsonify({'value': float(value) * float(1 + tax)}) 
    
#API 3
@app.route('/api/show-me-your-code', methods=['GET'])
def showcode():
    return jsonify( {'git': 'https://github.com/Samuel-2755/Teste_python_web'} )