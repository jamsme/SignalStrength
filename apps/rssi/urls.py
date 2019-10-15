from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('rssi', views.getRSSI)
]