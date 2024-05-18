from django.contrib import admin
from api.views import CreateUsersViews
from django.urls import path, include
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/user/register/', CreateUsersViews.as_view(), name='register'),
    path('api/token/', TokenObtainPairView.as_view(), name= 'get_token'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='get_refresh'),
    path('api-auth/', include('rest_framework.urls')),
    path('api/', include('api.urls'))
]