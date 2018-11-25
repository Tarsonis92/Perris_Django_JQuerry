from django.conf.urls import url
from . import views
urlpatterns=[
    url(r'^$',views.MascotaView.as_view()),
    url(r'^filtro/(?P<filtro>[a-zA-Z]+)$',views.MascotaFiltro.as_view()),
    url(r'^add/$',views.MascotaFiltro.as_view()),
]