from rest_framework import serializers
from .models import Flights , Seat
class FlightsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Flights
        fields = ('__all__')

class SeatSerializer(serializers.ModelSerializer):

    class Meta:
        model = Seat
        fields = ('__all__')