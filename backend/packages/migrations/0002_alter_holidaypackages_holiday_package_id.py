# Generated by Django 5.0.6 on 2024-07-01 18:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("packages", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="holidaypackages",
            name="holiday_package_id",
            field=models.CharField(max_length=10, primary_key=True, serialize=False),
        ),
    ]