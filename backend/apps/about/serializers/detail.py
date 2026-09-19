from rest_framework import serializers

from ..models import About, AboutValue, AboutService

from .about import AboutSerializer
from .value import AboutValueSerializer
from .service import AboutServiceSerializer


class AboutDetailSerializer(serializers.Serializer):

    about = AboutSerializer()

    values = AboutValueSerializer(
        many=True
    )

    services = AboutServiceSerializer(
        many=True
    )