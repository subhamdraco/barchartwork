from django.http import Http404 
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from .serializers import FlightsSerializer, SeatSerializer
from .models import Flights, Seat
from rest_framework_simplejwt.tokens import RefreshToken

class FlightUtilsGeneral(APIView):

    # authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.AllowAny]
        
    def get(self, request, format=None):
        """
        Return a list of all users.
        """
        flights = [[flight_details.id, flight_details.flight_no, flight_details.airline, flight_details.seat_capacity] for flight_details in Flights.objects.all()]
        return Response(flights)

    def post(self, request, format=None): 
        serializer = FlightsSerializer(data=request.data) 
        if serializer.is_valid(): 
            serializer.save() 
            return Response(serializer.data, 
                            status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
    
    
class FlightUtilsDetails(APIView):
        
    permission_classes = [permissions.AllowAny]
    
    def get_object(self, pk): 
        # Returns an object instance that should  
        # be used for detail views. 
        try: 
            return Flights.objects.get(id=pk) 
        except Flights.DoesNotExist: 
                raise Http404
        
    def get(self, request, pk, format=None):
        try:
         serializer = FlightsSerializer(Flights.objects.get(id=pk))
         flight_by_id = serializer.data
        except:
            return Http404
        return Response(flight_by_id, status=status.HTTP_200_OK)
        
    def delete(self, request, pk, format=None):
        flight = self.get_object(pk)    
        flight.delete()
        return Response(flight.id, status=status.HTTP_204_NO_CONTENT)


class SeatGeneral(APIView):

    permission_classes = [permissions.AllowAny]

    def get(self, request, format=None):
        data = Seat.objects.all()
        seat_data = [[seat.number, seat.classname] for seat in data]
        return Response(seat_data, status=status.HTTP_200_OK)
    
    def post(self, request, format=None):
        serializer = SeatSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        
class LogInView(APIView):
     
   permission_classes = (permissions.IsAuthenticated, )
   def get(self, request):
       content = {'message': 'Welcome to the JWT Authentication page using React Js and Django!'}
       return Response(content)


class LogoutView(APIView):
     
     permission_classes = (permissions.IsAuthenticated,)
     def post(self, request):
          
          try:
               refresh_token = request.data["refresh_token"]
               token = RefreshToken(refresh_token)
               token.blacklist()
               return Response(status=status.HTTP_205_RESET_CONTENT)
          except Exception as e:
               return Response(status=status.HTTP_400_BAD_REQUEST)

class RegisterView(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request):
        
        try:
            user_data = request.data
            print(user_data)
            return Response(status=status.HTTP_201_CREATED, data={'message':'Registration Successfull! Go to Login Page to login !'})
        except Exception as e:
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)

   

