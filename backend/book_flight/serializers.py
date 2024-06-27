from rest_framework import serializers
from .models import Flights , Seat, User_Details
class FlightsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Flights
        fields = ('__all__')

class SeatSerializer(serializers.ModelSerializer):

    class Meta:
        model = Seat
        fields = ('__all__')

class UserDetailsSerializer(serializers.ModelSerializer):

    class Meta:
        model = User_Details
        fields = ('__all__')