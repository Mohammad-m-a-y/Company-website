from rest_framework import serializers

from .models import Company


class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = (
            "id",
            "name",
            "site_slogan",
            "logo",
            "description",
            "about",
            "phone",
            "mobile",
            "email",
            "instagram",
            "telegram",
            "linkedin",
            "twitter",
            "address",
            "favicon",
            "seo_title",
            "seo_description",
            "maintenance_mode",
        )