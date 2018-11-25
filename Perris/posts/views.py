from django.shortcuts import render
from django.core import serializers
from . models import Persona,Mascota,MascotaPersona
from django.http import HttpResponse
import json
# Create your views here.
def principal(request):
  template='principal.html'
  return render(request,template)

def base_layout(request):
  template='maqueta.html'
  return render(request,template)

def login(request):
  template='login.html'
  results=Persona.objects.all()
  context={
    'results':results,
    }
  return render(request,template,context)

def formulario(request):
  template='formulario.html'
  results=Persona.objects.all()
  context={
    'results':results,
    }
  return render(request,template,context)

def formularioPerros(request):
  template='formularioPerros.html'
  results=Mascota.objects.all()
  context={
    'results':results,
    }
  return render(request,template,context)



def getdata(request):
  results=Persona.objects.all()
  jsondata = serializers.serialize('json',results)
  return HttpResponse(jsondata)

def getdataM(request):
  results=Mascota.objects.all()
  jsondata = serializers.serialize('json',results)
  return HttpResponse(jsondata)

def getdataMP(request):
  results=MascotaPersona.objects.all()
  jsondata = serializers.serialize('json',results)
  return HttpResponse(jsondata) 

def ListaPerro(request):
  return render(request,"listarPerros.html")