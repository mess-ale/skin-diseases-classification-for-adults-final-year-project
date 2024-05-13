from django.urls import path
from .views import UserProfileAPIView

urlpatterns = [
    path('user/data/', UserProfileAPIView.as_view(), name= 'get_data'),
]
