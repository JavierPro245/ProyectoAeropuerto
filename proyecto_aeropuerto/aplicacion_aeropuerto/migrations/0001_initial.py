# Generated by Django 4.0.1 on 2022-07-11 00:12

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Reserva',
            fields=[
                ('idReserva', models.IntegerField(max_length=5, primary_key=True, serialize=False, verbose_name='Nro Reserva')),
                ('Region', models.TextField(max_length=10, verbose_name='Region')),
                ('Comuna', models.TextField(max_length=7, verbose_name='Comuna')),
                ('Destino', models.TextField(max_length=20, verbose_name='Destino')),
            ],
        ),
    ]
