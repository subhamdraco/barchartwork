from django.db import models
from django.contrib.auth.models import User

class Flights(models.Model):
    flight_no = models.CharField(max_length=30)
    airline = models.CharField(max_length=30)
    seat_capacity = models.IntegerField()

class Airline(models.Model):
    name = models.CharField(max_length=30)
    flights_list = models.TextField()

class Seat(models.Model):
    number = models.IntegerField()
    classname = models.CharField(max_length=30)

class FlightSeat(models.Model):
    seat = models.ForeignKey(Seat, on_delete = models.CASCADE) 
    passenger_type = models.CharField(max_length=20, default='adult') #adult/chilfren/imfant
    price = models.FloatField()
    status = models.BooleanField()

class Schedule(models.Model):
    flight = models.ForeignKey(Flights, on_delete=models.CASCADE)
    aiport_start = models.CharField(max_length=30)
    airport_destination = models.CharField(max_length=30)
    start = models.DateTimeField()
    end = models.DateTimeField()
    status = models.CharField(max_length=30) # available/cancelled/not_available
    fare = models.ManyToManyField(FlightSeat)


class Airport(models.Model):
    name = models.CharField(max_length=30)
    location = models.CharField(max_length=30)

class User_Details(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    mobile = models.CharField(max_length=20, primary_key=True, default=1) # username in auth
    email = models.EmailField()
    whatsapp = models.IntegerField()
    ag_name = models.TextField(default=' ')
    ag_add = models.TextField(default=' ')
    ag_country = models.CharField(max_length=40, default=' ')
    ag_state = models.CharField(max_length=40, default=' ')
    ag_city = models.CharField(max_length=30 , default='')
    ag_pincode = models.CharField(max_length=20, default=' ')

class BookingDetails(models.Model):
    flight = models.ManyToManyField(Flights)
    user = models.ForeignKey(User, on_delete= models.CASCADE)
    start = models.CharField(max_length=30)
    destination = models.CharField(max_length=30)
    date = models.DateTimeField()
    pnr = models.TextField()
    trip_type = models.CharField(max_length=10)



