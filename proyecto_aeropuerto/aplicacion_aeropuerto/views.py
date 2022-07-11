from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request,'index.html')

def disponibilidad(request):
    return render(request, 'disponibilidad.html')

def seleccion(request):
    return render(request, 'seleccion.html')

def confirmacion(request):
    return render(request, 'confirmacion.html')