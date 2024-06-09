from rest_framework import serializers
from .models import User, SkinImage, SkinDisease, Appointment, ContactForm, ProfileUser

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        write_only=True,
        required=True,
        style={'input_type': 'password'}
    )

    class Meta:
        model = User
        fields = ('username', 'password', 'email')

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            password=validated_data['password'],
            email=validated_data['email']
        )
        return user

class SkinImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = SkinImage
        fields = '__all__'

class SkinDiseaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = SkinDisease
        fields = '__all__'

class AppointmentSerializer(serializers.ModelSerializer):
  class Meta:
    model = Appointment
    fields = '__all__'  

class ContactFormSerializer(serializers.ModelSerializer):
  class Meta:
    model = ContactForm
    fields = '__all__' 

class ContactProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProfileUser
        fields = ['id', 'age', 'gender', 'country', 'first_name', 'last_name']