from django.urls import path
from .views import index, disponibilidad, seleccion, confirmacion

urlpatterns = [
    path('',index,name='index'),
    path('disponibilidad',disponibilidad,name='disponibilidad'),
    path('seleccion',seleccion,name='seleccion'),
    path('confirmacion',confirmacion,name='confirmacion'),
    path('index',index,name='index'),
]