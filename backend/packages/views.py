from django.http import Http404 
from rest_framework.views import APIView
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework import status
from .serializers import PackagesSerializerHoliday
from .models import *


class PackagesGeneral(APIView):

    permission_classes = [permissions.AllowAny]
    
    def get(self, request, format=None):
        packages = HolidayPackages.objects.all()
        if not packages.exists():
            return Response({"message": "No Packages found."}, status=status.HTTP_200_OK)
        serializer = PackagesSerializerHoliday(packages, many=True)
        return Response(serializer.data)


    def post(self, request, format=None):
        serializer = PackagesSerializerHoliday(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(data=serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)