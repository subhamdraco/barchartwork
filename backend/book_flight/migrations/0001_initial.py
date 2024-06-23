# Generated by Django 5.0.6 on 2024-06-21 16:24

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
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
    ]