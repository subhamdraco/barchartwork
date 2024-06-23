from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from .views import *


urlpatterns = [
    path('flights/' , FlightUtilsGeneral.as_view()),
    path('flights/<int:pk>/' , FlightUtilsDetails.as_view()),
    path('seats/', SeatGeneral.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)