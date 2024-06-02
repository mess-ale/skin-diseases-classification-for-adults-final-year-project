from django.db import models
from django.contrib.auth.models import User

class SkinImage(models.Model):
    User = models.ForeignKey(User, on_delete=models.CASCADE)
    image_file = models.ImageField(upload_to='skin_images/')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class SkinDisease(models.Model):
    disease_name = models.CharField(max_length=100)
    description = models.TextField()
    treatment = models.TextField()

class Appointment(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    date = models.DateField()
    time = models.TimeField()
    disease = models.CharField(max_length=255, blank=True)

class ContactForm(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    message = models.TextField()