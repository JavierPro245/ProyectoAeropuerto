# Generated by Django 4.0.1 on 2022-07-11 00:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('aplicacion_aeropuerto', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='reserva',
            name='Region',
            field=models.TextField(max_length=30, verbose_name='Region'),
        ),
    ]
