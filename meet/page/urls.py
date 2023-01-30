from django.urls import path
from . import views

urlpatterns = [
    path('api/page', views.LeadListCreate.as_view() ),
]