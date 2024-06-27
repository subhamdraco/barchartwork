from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from .views import *


urlpatterns = [
    path('flights/' , FlightUtilsGeneral.as_view()),
    path('flights/<int:pk>/' , FlightUtilsDetails.as_view()),
    path('seats/', SeatGeneral.as_view()),
    path('login/', LogInView.as_view(), name ='login'),
    path('logout/',LogoutView.as_view(), name ='logout'),
    path('register/', RegisterView.as_view(), name='register')
]

urlpatterns = format_suffix_patterns(urlpatterns)