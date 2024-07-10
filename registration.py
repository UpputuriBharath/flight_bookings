import json

from flask import Flask, request, jsonify
from flask_restful import Resource, Api
from models1 import UserModel, FlightModel, BookingModel, db
import os
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
api = Api(app)


class Config:
    SECRET_KEY = os.environ.get("SECRET_KEY")
    SQLALCHEMY_DATABASE_URI = "mysql+pymysql://root:Password%401@localhost:3306/test"
    SQL_TRACK_NOTIFICATIONS = False


app.config.from_object(Config)
db.init_app(app)
with app.app_context():
    db.create_all()


class Login(Resource):
    def post(self):
        arr = ["bharath", 123]
        data = request.get_json()
        print(data)
        username = data.get("username")
        password = data.get("password")
        user = UserModel.query.filter_by(username=username, password=password).all()
        print(user, type(user))

        if user:
            user_dict = [user.to_dict() for user in user]
            print(user_dict, type(user_dict))
            return jsonify(user_dict)

        else:
            lsit = []
            return lsit


class Register(Resource):
    def post(self):
        uid1 = request.json.get("uid")
        username = request.json.get("username")
        password = request.json.get("password")
        email = request.json.get("email")

        existing_user = UserModel.query.filter_by(username=username).first()

        if existing_user:
            return 'Username already exists'
        new_user = UserModel(uid1=uid1, username=username, password=password, email=email)
        db.session.add(new_user)
        db.session.commit()
        return 'user Registered successfully'


class SearchFlights(Resource):
    def post(self):

        data = request.get_json()
        print(data)
        source = data.get("source")
        destination = data.get("destination")
        traveldate = data.get("tdate")
        flight_type = data.get("type")
        print(type)

        fl = FlightModel.query.filter_by(source=source, destination=destination,
                                         tdate=traveldate,
                                         type=flight_type).all()
        print(fl)

        flights_dict = [flight.to_dict() for flight in fl]
        if fl:
            return jsonify(flights_dict)
        else:
            return "No flights are there.."


class Booking(Resource):
    def post(self):
        bid = request.json.get("bid")
        fname = request.json.get("fname")
        lname = request.json.get("lname")
        age = request.json.get("age")
        gender = request.json.get("gender")
        flightno = request.json.get("flightno")
        flightname = request.json.get("flightname")
        source = request.json.get("source")
        destination = request.json.get("destination")
        traveldate = request.json.get("tdate")
        flight_type = request.json.get("type")
        bdate = request.json.get("bdate")
        time = request.json.get("time")
        mobileno = request.json.get("mobileno")
        cost = request.json.get("cost")
        existing_bid = BookingModel.query.filter_by(bid=bid).all()

        if existing_bid:
            return " Ticket Booked Successfully ", 400

        new_bid = BookingModel(bid=bid, fname=fname, lname=lname, age=age, gender=gender, flightno=flightno,
                               flightname=flightname, type=flight_type, source=source, destination=destination,
                               tdate=traveldate, bdate=bdate, time=time, mobileno=mobileno, cost=cost)

        db.session.add(new_bid)
        db.session.commit()
        return "Ticket Booked Successfully", 201


class GetBookings(Resource):
    def get(self):
        bookings = BookingModel.query.all()
        return [
            {'bid': b.bid, 'fname': b.fname, 'lname': b.lname, 'age': b.age, 'gender': b.gender, 'mobileno': b.mobileno,
             'flightno': b.flightno, 'flightname': b.flightname, 'source': b.source, 'cost': b.cost,
             'destination': b.destination, 'tdate': b.tdate, 'bdate': b.bdate, 'time': b.time,
             'type': b.type} for b in bookings]


class DeleteBooking(Resource):
    def delete(self, bid):
        booking = BookingModel.query.get(bid)
        print(booking)
        if booking:
            db.session.delete(booking)
            db.session.commit()
            return "Ticket Cancelled Sucessfully"
        return "Booking Not Found"


api.add_resource(Login, "/login")
api.add_resource(Register, "/register")
api.add_resource(SearchFlights, "/search-flights")
api.add_resource(Booking, "/book-flights")
api.add_resource(GetBookings, "/bookings")
api.add_resource(DeleteBooking, "/booking/<int:bid>")


app.run()
