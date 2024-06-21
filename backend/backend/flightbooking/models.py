from django.db import models

class Flights(models.Model):

    flight_no = models.CharField()
    airline = models.CharField()
    seat_capacity = models.IntegerField()


