from django.db import models
from core.utils.file import DynamicPath



class About(models.Model):
    hero_image = models.ImageField(
        upload_to=DynamicPath("about/hero"),
        blank=True,
        null=True,
    )

    hero_title = models.TextField(max_length=200, blank=True)
    hero_description = models.TextField(blank=True)

    image = models.ImageField(
        upload_to=DynamicPath("about"),
        blank=True,
        null=True,
    )

    intro_title = models.TextField(
    max_length=200,
    blank=True
)

    short_intro = models.TextField(
        blank=True
    )

    intro = models.TextField(
        blank=True
    )

    def save(self, *args, **kwargs):
        self.pk = 1
        super().save(*args, **kwargs)

    def __str__(self):
        return "About"

