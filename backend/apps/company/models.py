from django.db import models
from django.core.validators import FileExtensionValidator
from core.utils.file import DynamicPath



class Company(models.Model):
    name = models.CharField(max_length=200)
    site_slogan = models.CharField(max_length=200,blank=True,)

    logo = models.ImageField(upload_to=DynamicPath("logo"), blank=True, null=True)
    description = models.TextField(blank=True)
    about = models.TextField(blank=True)

    phone = models.CharField(max_length=50, blank=True)
    mobile = models.CharField(max_length=20, blank=True)
    email = models.EmailField(blank=True)

    instagram = models.URLField(blank=True)
    telegram = models.URLField(blank=True)
    linkedin = models.URLField(blank=True)
    twitter = models.URLField(blank=True) 
    
    address = models.TextField(blank=True)

    favicon = models.FileField(upload_to=DynamicPath("favicon"), blank=True, null=True,
        validators=[
        FileExtensionValidator(["svg", "png", "ico","jpe", "jpg", "jpeg"])
    ]
    )

    seo_title = models.CharField(max_length=200,blank=True,)
    seo_description = models.TextField( blank=True,)

    maintenance_mode = models.BooleanField( default=False)


    def save(self, *args, **kwargs):
        self.pk = 1
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name
