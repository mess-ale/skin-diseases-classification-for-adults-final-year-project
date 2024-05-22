from django.urls import path
from .views import UserProfileAPIView, disease_detail

urlpatterns = [
    path('user/data/', UserProfileAPIView.as_view(), name= 'get_data'),
    path('disease/<str:disease_name>/', disease_detail, name='disease-info'),
]
