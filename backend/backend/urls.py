from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from backend.backend.flightbooking import views


router = routers.DefaultRouter()
router.register(r'flights', views.FlightViewset)

urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('admin/', admin.site.urls)
]
