from django.db import models
 

class AboutValue(models.Model):

    title = models.CharField(max_length=200)

    description = models.TextField()

    order = models.PositiveIntegerField(default=0)

    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ["order"]
