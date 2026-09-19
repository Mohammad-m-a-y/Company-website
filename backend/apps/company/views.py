from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Company
from .serializers import CompanySerializer

from django.core.cache import cache
from core.cache_keys import COMPANY_CACHE_KEY

class CompanyView(APIView):

    def get(self, request):

        cached_data = cache.get(COMPANY_CACHE_KEY)

        if cached_data is not None: 
            return Response(cached_data)


        company = Company.objects.first()

        if not company:
            return Response(
                {"detail": "Company information is not available."},
                status=404,
            )

        serializer = CompanySerializer(company, context={"request": request})
        data = serializer.data

        cache.set( COMPANY_CACHE_KEY, data, timeout=60 * 60, )

        return Response(data)