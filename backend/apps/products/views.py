from django.core.cache import cache
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Product
from .serializers import ProductSerializer


from core.cache_keys import (
    PRODUCTS_LIST_CACHE_KEY,
    product_cache_key,
)


class ProductListView(APIView):

     
    def get(self, request):

        cached_data = cache.get(PRODUCTS_LIST_CACHE_KEY)

        if cached_data is not None:
            return Response(cached_data)
        
        products = Product.objects.filter(is_active=True)

        serializer = ProductSerializer(
            products,
            many=True,
            context={"request": request},
        )

        data = serializer.data

        cache.set(
            PRODUCTS_LIST_CACHE_KEY,
            data,
            timeout=60 * 60,
        )

        return Response(data)




class ProductDetailView(APIView):
    def get(self, request, slug):

        cache_key = product_cache_key(slug)

        cached_data = cache.get(cache_key)

        if cached_data is not None:
            return Response(cached_data)

        product = Product.objects.filter(
            is_active=True,
            slug=slug,
        ).first()

        if not product:
            return Response(
                {"detail": "Product not found."},
                status=404,
            )

        serializer = ProductSerializer(
            product,
            context={"request": request},
        )

        data = serializer.data

        cache.set( cache_key, data, timeout=60 * 60 )

        return Response(data)