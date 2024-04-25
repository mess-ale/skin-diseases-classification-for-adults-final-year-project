from django.urls import path
from .views import UsersViews

urlpatterns = [
    path('', UsersViews.as_view() )
]
