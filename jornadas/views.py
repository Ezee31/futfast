from django.shortcuts import render
from django.contrib import messages

def index(request):
    return render(request, 'jornadas/index.html')

def calcular(request):
    if request.method == 'POST':
        costo = int(request.POST.get('costo'))
        personas = int(request.POST.get('personas'))
        horas = int(request.POST.get('horas'))

        total = (costo * horas) / personas
        messages.success(request, f'¡Cálculo completado! Cada persona debe pagar C$ {total:.2f}')
        return render(request, 'jornadas/index.html', {'total': total})

    return render(request, 'jornadas/index.html')
