from rest_framework.response import Response
from rest_framework.views import APIView
from django.core.cache import cache

from core.cache_keys import (
    ABOUT_CACHE_KEY,
    ABOUT_DETAIL_CACHE_KEY,
)

from .models import About, AboutValue, AboutService
from .serializers import (
    AboutSerializer,
    AboutDetailSerializer,
 
)



class AboutView(APIView):

    def get(self, request):

        cached_data = cache.get(ABOUT_CACHE_KEY)

        if cached_data is not None:
            return Response(cached_data)
        
        about = About.objects.first()

        if not about:
            return Response(
                {"detail": "About information is not available."},
                status=404,
            )

        serializer = AboutSerializer(
            about,
            context={"request": request},
        )

        data = serializer.data

        cache.set(
            ABOUT_CACHE_KEY,
            data,
            timeout=60 * 60,
        )

        return Response(data)




class AboutDetailView(APIView):

    def get(self,request):

        cached_data = cache.get(ABOUT_DETAIL_CACHE_KEY)

        if cached_data is not None:
            return Response(cached_data)
        
        about = About.objects.first()

        if not about:
            return Response(
                {"detail": "About information is not available."},
                status=404,
            )

        values = AboutValue.objects.filter(is_active=True)

        services = AboutService.objects.filter(is_active=True)

        data = {
            "about": about,
            "values": values,
            "services": services,
        }

        serializer = AboutDetailSerializer(
            data,
            context={"request": request},
        )

        data = serializer.data

        cache.set(
            ABOUT_DETAIL_CACHE_KEY,
            data,
            timeout=60 * 60,
        )

        return Response(data)

