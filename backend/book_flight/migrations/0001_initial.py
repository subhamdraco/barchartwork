# Generated by Django 5.0.6 on 2024-06-28 18:14

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name="Airline",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=30)),
                ("flights_list", models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name="Airport",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=30)),
                ("location", models.CharField(max_length=30)),
            ],
        ),
        migrations.CreateModel(
            name="Flights",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("flight_no", models.CharField(max_length=30)),
                ("airline", models.CharField(max_length=30)),
                ("seat_capacity", models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name="FlightSeat",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("passenger_type", models.CharField(default="adult", max_length=20)),
                ("price", models.FloatField()),
                ("status", models.BooleanField()),
            ],
        ),
        migrations.CreateModel(
            name="Seat",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("number", models.IntegerField()),
                ("classname", models.CharField(max_length=30)),
            ],
        ),
        migrations.CreateModel(
            name="BookingDetails",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("start", models.CharField(max_length=30)),
                ("destination", models.CharField(max_length=30)),
                ("date", models.DateTimeField()),
                ("pnr", models.TextField()),
                ("trip_type", models.CharField(max_length=10)),
                (
                    "user",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
                ("flight", models.ManyToManyField(to="book_flight.flights")),
            ],
        ),
        migrations.CreateModel(
            name="Schedule",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("aiport_start", models.CharField(max_length=30)),
                ("airport_destination", models.CharField(max_length=30)),
                ("start", models.DateTimeField()),
                ("end", models.DateTimeField()),
                ("status", models.CharField(max_length=30)),
                ("fare", models.ManyToManyField(to="book_flight.flightseat")),
                (
                    "flight",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="book_flight.flights",
                    ),
                ),
            ],
        ),
        migrations.AddField(
            model_name="flightseat",
            name="seat",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE, to="book_flight.seat"
            ),
        ),
        migrations.CreateModel(
            name="User_Details",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("first_name", models.CharField(max_length=30)),
                ("last_name", models.CharField(max_length=30)),
                ("email", models.EmailField(max_length=254)),
                ("whatsapp", models.IntegerField()),
                ("ag_name", models.TextField(default=" ")),
                ("ag_add", models.TextField(default=" ")),
                ("ag_country", models.CharField(default=" ", max_length=40)),
                ("ag_state", models.CharField(default=" ", max_length=40)),
                ("ag_city", models.CharField(default="", max_length=30)),
                ("ag_pincode", models.CharField(default=" ", max_length=20)),
                (
                    "mobile",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to=settings.AUTH_USER_MODEL,
                        to_field="username",
                    ),
                ),
            ],
        ),
    ]
