from django.conf.urls import url
from django.urls import path
from . import views
from api.views import MascotaView,MascotaFiltro
urlpatterns=[
  
  url(r'^$',views.principal),
  url(r'^index/$',views.principal),
  url(r'^$',views.formulario),
  url(r'^index2/$',views.formulario,name="formulario"), 
  url(r'^$',views.login),
  url(r'^index3/$',views.login,name="login"),
  url(r'^$',views.formularioPerros),
  url(r'^index4/$',views.formularioPerros,name="formularioPerros"),
  url(r'^$',views.ListaPerro),
  path(r'', views.principal,name='principal'),
  path(r'base_layout',views.base_layout,name='base_layout'),
  path(r'login',views.login,name='login'),
  path(r'getdata/',views.getdata,name='getdata'),
  path(r'getdataM/',views.getdataM,name='getdataM'),
  path(r'getdataMP/',views.getdataMP,name='getdataMP')
]
