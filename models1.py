import string

from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class UserModel(db.Model):
    __tablename__ = "user_details"

    Uid = db.Column(db.Integer(), primary_key=True)
    username = db.Column(db.String(100))
    password = db.Column(db.String(100))
    email = db.Column(db.String(100))

    def __init__(self, uid1, username, password, email):
        self.uid = uid1
        self.username = username
        self.password = password
        self.email = email

    def to_dict(self):
        return {
            'username': self.username,
            'password': self.password
        }


class FlightModel(db.Model):
    __tablename__ = "flight_booking_details"

    flightno = db.Column(db.Integer(), primary_key=True)
    flightname = db.Column(db.String(100))
    source = db.Column(db.String(100))
    destination = db.Column(db.String(100))
    tdate = db.Column(db.String(100))
    bdate = db.Column(db.String(100))
    time = db.Column(db.String(100))
    type = db.Column(db.String(100))
    cost = db.Column(db.Integer())

    def to_dict(self):
        return {
            'flightno': self.flightno,
            'flightname': self.flightname,
            'source': self.source,
            'destination': self.destination,
            'tdate': self.tdate,
            'bdate': self.bdate,
            'time': self.time,
            'type': self.type,
            'cost': self.cost
        }


class BookingModel(db.Model):
    __tablename__ = "flight_booking_user_details1"

    bid = db.Column(db.Integer(), primary_key=True)
    fname = db.Column(db.String(100))
    lname = db.Column(db.String(100))
    age = db.Column(db.Integer())
    gender = db.Column(db.String(100))
    flightno = db.Column(db.Integer())
    flightname = db.Column(db.String(100))
    source = db.Column(db.String(100))
    destination = db.Column(db.String(100))
    tdate = db.Column(db.String(100))
    bdate = db.Column(db.String(100))
    time = db.Column(db.String(100))
    type = db.Column(db.String(100))
    mobileno = db.Column(db.BigInteger())
    cost = db.Column(db.Integer())

    def __init__(self, bid, fname, lname, age, gender, flightno, flightname, source, destination, tdate, bdate, time,
                 type, mobileno, cost):
        self.bid = bid
        self.fname = fname
        self.lname = lname
        self.age = age
        self.gender = gender
        self.flightno = flightno
        self.flightname = flightname
        self.source = source
        self.destination = destination
        self.tdate = tdate
        self.bdate = bdate
        self.time = time
        self.type = type
        self.mobileno = mobileno
        self.cost = cost
