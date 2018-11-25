from django.shortcuts import render,get_object_or_404
from rest_framework import generics
from posts.models import Mascota
from .serializers import MascotaSerializer
from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.
class MascotaView(APIView):
    def get(self,request):
        mascotas=Mascota.objects.all()
        serializer=MascotaSerializer(mascotas,many=True)
        return Response(serializer.data)
    
class MascotaFiltro(APIView):
    def get(self,request,filtro):
        mascotas=Mascota.objects.filter(patio=filtro)
        serializer=MascotaSerializer(mascotas,many=True)
        return Response(serializer.data)

    def post(self,request):
        
       return Response()