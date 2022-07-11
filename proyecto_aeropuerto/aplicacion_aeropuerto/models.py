from unittest.util import _MAX_LENGTH
from django.db import models
from django.utils import timezone
# Create your models here.
class Reserva(models.Model):
    idReserva = models.IntegerField(max_length=5, primary_key=True, verbose_name='Nro Reserva')
    Region = models.TextField(max_length=30, verbose_name='Region')
    Comuna = models.TextField(max_length=7, verbose_name='Comuna')
    Destino = models.TextField(max_length=20, verbose_name='Destino')

    def publish(self):
        self.published_date = timezone.now()

    def __str__(self):
        return self.Destino