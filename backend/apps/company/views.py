from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Company
from .serializers import CompanySerializer


class CompanyView(APIView):

    def get(self, request):
        company = Company.objects.first()

        if not company:
            return Response(
                {"detail": "Company information is not available."},
                status=404,
            )

        serializer = CompanySerializer(company, context={"request": request})

        return Response(serializer.data)