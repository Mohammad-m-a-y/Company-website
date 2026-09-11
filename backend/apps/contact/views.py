from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from .serializers import ContactMessageSerializer
from .services import ContactService


class ContactMessageCreateView(APIView):

    def post(self, request):
        serializer = ContactMessageSerializer(
            data=request.data
        )

        serializer.is_valid(raise_exception=True)

        ContactService.create_message(**serializer.validated_data)

        return Response(
            {"detail": "Your message has been sent successfully."},
            status=status.HTTP_201_CREATED,
        )