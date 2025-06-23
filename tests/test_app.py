import sys
import os
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
from app import app
def test_home_page():
    tester = app.test_client()
    response = tester.get("/")
    assert response.status_code == 200
def test_calculate():
    tester = app.test_client()

    response = tester.post("/calculate", json={"expression": "2+2"})
    assert response.status_code == 200
    assert response.get_json()["result"] == 4

def test_divide_by_zero():
    tester = app.test_client()

    response = tester.post("/calculate", json={"expression": "10/0"})
    assert response.status_code == 400
    

def test_square():
    tester=app.test_client()
    res=tester.post("/calculatePow",json={"expression": "10"})
    assert res.status_code == 200
    assert res.get_json()["result"] == 100
