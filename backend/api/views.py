from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework import generics, viewsets, status
from rest_framework.response import Response
from .models import User, ClassificationResult, SkinImage, SkinDisease
from .serializers import UserSerializer, ClassificationResultSerializer, SkinImageSerializer, SkinDiseaseSerializer

class CreateUsersViews(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

class UserProfileAPIView(APIView):
    def get(self, request):
        user = request.user
        serializer = UserSerializer(user)  # Assuming you have a UserSerializer
        return Response(serializer.data)
 