from registration import app
import pytest


@pytest.fixture
def client():
    with app.test_client() as client:
        with app.app_context():
            yield client


def test_search_flights(client):
    response = client.post('/search-flights',
                           json={"source": "Hyderabad", "destination": "Mumbai", "travel_date": "2024-08-23",
                                 "flight_type": "Economy Class"})

    assert response.status_code == 200


def test_book_flight(client):
    response = client.post('/book-flights', json={"bid": 61,
                                                  "fname": "Ramesh",
                                                  "lname": "Guthi",
                                                  "age": 27,
                                                  "gender": "Male",
                                                  "flightno": 5003,
                                                  "flightname": "Vistara",
                                                  "source": "Hyderabad",
                                                  "destination": "Mumbai",
                                                  "traveldate": "2024-08-23",
                                                  "flight_type": "Elite Class",
                                                  "bdate": "2024-06-18",
                                                  "time": "00:42",
                                                  "mobileno": 7485748579,
                                                  "cost": 11780
                                                  })

    assert response.status_code == 201


def test_login(client):
    response = client.post('/login', json={"username": "Bharath", "password": "Bharath@123"})

    assert response.status_code == 200


def test_register(client):
    response = client.post('/register', json={"uid": 101, "username": "Bharath", "email": "bharath@gmail.com",
                                              "password": "Bharath@123"})

    assert response.status_code == 200


def test_delete_booking(client):
    response = client.delete('/booking/61')
    assert response.status_code == 200
