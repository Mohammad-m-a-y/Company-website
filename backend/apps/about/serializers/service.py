from rest_framework import serializers

from ..models import AboutService


class AboutServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = AboutService
        fields = (
            "id",
            "title",
            "description",
            "order",
        )



