from rest_framework import serializers

from ..models import AboutValue


class AboutValueSerializer(serializers.ModelSerializer):
    class Meta:
        model = AboutValue
        fields = (
            "id",
            "title",
            "description",
            "order",
        )