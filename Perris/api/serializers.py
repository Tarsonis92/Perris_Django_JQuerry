from posts.models import Persona,Mascota,MascotaPersona
from rest_framework import serializers

class MascotaSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Mascota
        fields = {'codigoMascota',
                  'imagen',
                  'nombreMascota',
                  'razaMascota',
                  'descripcion',
                  'estadoMascota',
}