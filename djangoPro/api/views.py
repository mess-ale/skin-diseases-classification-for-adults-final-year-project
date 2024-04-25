from django.shortcuts import render
from rest_framework import generics
from .models import User
from .serializers import LogForm

class UsersViews(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = LogForm
