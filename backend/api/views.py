from django.http import JsonResponse
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework import generics, status
from rest_framework.response import Response
from .models import User, SkinImage, SkinDisease, ProfileUser
from .serializers import UserSerializer, SkinImageSerializer, AppointmentSerializer, ContactFormSerializer, ContactProfileSerializer
from rest_framework.generics import GenericAPIView
import tensorflow as tf
import numpy as np
import cv2

def image_to_model_input(image_path):
  image = cv2.imread(image_path)
  resized_image = cv2.resize(image, (28, 28))
  if len(resized_image.shape) == 2:
    resized_image = cv2.cvtColor(resized_image, cv2.COLOR_GRAY2RGB)

  preprocessed_image = resized_image.astype('float32') / 255.0  
  return preprocessed_image

def load_model():
  model_path = 'model/skindiseasModel.h5'  # Replace with your actual path
  try:
    model = tf.keras.models.load_model(model_path)
    return model
  except OSError as e:
    raise Exception(f"Error loading model: {e}") from e
   
class CreateUsersViews(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

class CreateAppointmentViews(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = AppointmentSerializer
    permission_classes = [AllowAny]

class CreateContacttViews(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = ContactFormSerializer
    permission_classes = [AllowAny]

class UserProfileAPIView(APIView):
    def get(self, request):
        user = request.user
        serializer = UserSerializer(user)  # Assuming you have a UserSerializer
        return Response(serializer.data)
 
class SkinImageView(GenericAPIView):
  permission_classes = [IsAuthenticated]    
  queryset = SkinImage.objects.all()  
  serializer_class = SkinImageSerializer

  def post(self, request, *args, **kwargs):
      classes = {4: 'Melanocytic Nevi (nv)', 45: 'Melanocytic', 6: 'Melanoma (mel)', 2 : 'Benign Keratosis-like Lesions (bkl)', 1: 'Basal Cell Carcinoma (bcc)', 5: 'Pyogenic Granulomas and Hemorrhage (vasc)', 0: 'Actinic Keratoses and Intraepithelial Carcinomae (akiec)',  3: 'Dermatofibroma (df)'}
      image_file = request.data['image_file']
      user_id = request.user.id  # Get the id of the authenticated user
      skin_image = SkinImage.objects.create(image_file=image_file, User_id=user_id)
      
      image_path = skin_image.image_file.path
      preprocessed_image = image_to_model_input(image_path)
      model = load_model()
      predictions = model.predict(np.expand_dims(preprocessed_image, axis=0))

      # Update the SkinImage object with the predictions
      skin_image.predictions = predictions.tolist()
      skin_image.save()
      
      predictions_desis = classes[np.argmax(predictions[0])]

      return JsonResponse({'predictions': predictions_desis})

def disease_detail(request, disease_name):
  try:
    # Filter the disease object based on disease_name
    disease = SkinDisease.objects.get(disease_name=disease_name)
  except SkinDisease.DoesNotExist:
    # Handle case where disease is not found (optional: return a 404 response)
    return render(request, 'disease_not_found.html')  # Replace with your error handling logic
  
  # Return the disease data as JSON
  return JsonResponse({
    'disease_name': disease.disease_name,
    'description': disease.description,
    'treatment': disease.treatment,
  })

class DeleteAccount(APIView):
    permission_classes = [IsAuthenticated]

    def delete(self, request, *args, **kwargs):
        user = self.request.user
        user.delete()
        return Response({"result": "user delete"})

class ProfileUserCreateUpdateView(generics.CreateAPIView):
    queryset = ProfileUser.objects.all()
    serializer_class = ContactProfileSerializer

    def perform_create(self, serializer):
        # Check if a ProfileUser object already exists for the current user
        try:
            profile = ProfileUser.objects.get(User=self.request.user)
            serializer.update(profile, serializer.validated_data)
        except ProfileUser.DoesNotExist:
            serializer.save(User=self.request.user)


class ProfileUserRetrieveView(generics.RetrieveAPIView):
    queryset = ProfileUser.objects.all()
    serializer_class = ContactProfileSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        # Retrieve the profile for the currently logged-in user
        return self.request.user.profileuser