from django.contrib import admin
from .models import SkinDisease, SkinImage, Appointment, ContactForm, ProfileUser

# Register your models here.
admin.site.register(SkinDisease) 
admin.site.register(SkinImage) 
admin.site.register(Appointment)
admin.site.register(ContactForm)
admin.site.register(ProfileUser)