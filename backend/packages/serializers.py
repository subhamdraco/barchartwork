from rest_framework import serializers
from .models import HolidayPackages

class PackagesSerializerHoliday(serializers.ModelSerializer):

    class Meta:
        model = HolidayPackages
        fields = ['holiday_package_id', 'holiday_package_type', 'destination', 'adult_price', 'all_inclusive', 'children_price'] 