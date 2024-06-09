from django.contrib import admin
from api.views import CreateUsersViews, SkinImageView, CreateAppointmentViews, CreateContacttViews, ProfileUserCreateUpdateView
from django.urls import path, include
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/user/register/', CreateUsersViews.as_view(), name='register'),
    path('api/user/appointment/', CreateAppointmentViews.as_view(), name='Appointment'),
    path('api/user/profile/', ProfileUserCreateUpdateView.as_view(), name='profile_create'),
    path('api/user/contact/', CreateContacttViews.as_view(), name='register'),
    path('api/upload/', SkinImageView.as_view(), name='upload_image'),
    path('api/token/', TokenObtainPairView.as_view(), name= 'get_token'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='get_refresh'),
    path('api-auth/', include('rest_framework.urls')),
    path('api/', include('api.urls'))
]
