from django.db import models

class HolidayPackages(models.Model):
    holiday_package_id = models.CharField(primary_key=True, max_length=10)
    holiday_package_type = models.CharField(max_length=30)
    destination = models.TextField()
    adult_price = models.FloatField()
    all_inclusive = models.BooleanField()
    children_price = models.FloatField()

