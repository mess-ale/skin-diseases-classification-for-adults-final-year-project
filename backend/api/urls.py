from django.urls import path
from .views import UserProfileAPIView, disease_detail, DeleteAccount, ProfileUserRetrieveView

urlpatterns = [
    path('user/data/', UserProfileAPIView.as_view(), name= 'get_data'),
    path('profile/data/', ProfileUserRetrieveView.as_view(), name= 'get_data'),
    path('disease/<str:disease_name>/', disease_detail, name='disease-info'),
    path('user/<str:disease_name>/', DeleteAccount.as_view(), name='disease-info'),
]
