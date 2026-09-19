from rest_framework import serializers

from ..models import About


class AboutSerializer(serializers.ModelSerializer):
    class Meta:
        model = About
        fields = (
            "id",
            "hero_image",
            "hero_title",
            "hero_description",
            "image",
            "intro_title",
            "short_intro",
            "intro",
        )