from flask import Flask, render_template, request
import math

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")


@app.route("/calculate", methods=["POST"])
def calculate():
    data = request.get_json()
    expression = data.get("expression")

    try:
        result = eval(expression)  
        return {"result": result}
    except Exception:
        return {"result": "Error"}, 400
    
    
@app.route("/calculatePow", methods=["POST"])
def calculatePow():
    data = request.get_json()
    expression = data.get("expression")
    try:
        result = int(expression) ** 2  
        return {"result": result}
    except Exception:
        return {"result": "Error"}, 400

@app.route("/calculatePow3", methods=["POST"])
def calculatePow3():
    data = request.get_json()
    expression = data.get("expression")
    try:
        result = int(expression) ** 3  
        return {"result": result}
    except Exception:
        return {"result": "Error"}, 400
@app.route("/calculateSqrt", methods=["POST"])
def calculateSqrt():
    data = request.get_json()
    expression = data.get("expression")
    try:
        result = math.sqrt(int(expression))   
        return {"result": result}
    except Exception:
        return {"result": "Error"}, 400
@app.route("/calculateCbrt", methods=["POST"])
def calculateCbrt():
    data = request.get_json()
    expression = data.get("expression")
    try:
        result = math.cbrt(int(expression) )
        return {"result": result}
    except Exception:
        return {"result": "Error"}, 400



if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
