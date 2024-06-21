from django.shortcuts import render
from backend.flightbooking.models import Flights
from rest_framework import  permissions, viewsets
from backend.flightbooking.serializers import FlightSerializer

class FlightViewset(viewsets.ModelViewSet):
    queryset = Flights.objects().all()
    serializer_class = FlightSerializer
    permission_classes = [permissions.AllowAny]


