from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    # Other app-specific URL patterns
]
