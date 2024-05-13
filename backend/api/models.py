from django.db import models
from django.contrib.auth.models import User

class ClassificationResult(models.Model):
    class_label = models.CharField(max_length=50)
    confidence_score = models.FloatField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class SkinImage(models.Model):
    User = models.ForeignKey(User, on_delete=models.CASCADE)
    image_file = models.ImageField(upload_to='skin_images/')
    status = models.CharField(max_length=20)
    classification_result = models.ForeignKey(ClassificationResult, null=True, on_delete=models.SET_NULL)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class SkinDisease(models.Model):
    disease_name = models.CharField(max_length=100)
    description = models.TextField()
    treatment = models.TextField()
