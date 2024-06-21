from backend.flightbooking.models import Flights
from rest_framework import serializers

class FlightSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Flights
        fields = ['flight_no', 'airlline', 'seat_capacity']