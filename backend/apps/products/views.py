from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Product
from .serializers import ProductSerializer



class ProductListView(APIView):

     
    def get(self, request):
        products = Product.objects.filter(is_active=True)

        serializer = ProductSerializer(
            products,
            many=True,
            context={"request": request},
        )

        return Response(serializer.data)



class ProductDetailView(APIView):
    def get(self, request, slug):
        try:
            product = Product.objects.get(is_active=True, slug= slug)
        
        except Product.DoesNotExist:
            return Response(
                {"detail": "Product not found."},
                status=404,
            )

        serializer = ProductSerializer(product, context={"request": request})

        return Response(serializer.data)
