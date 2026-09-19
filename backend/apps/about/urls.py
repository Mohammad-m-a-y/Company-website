from django.urls import path

from .views import AboutView, AboutDetailView


urlpatterns = [
    path("", AboutView.as_view(), name="about"),
    path("detail/", AboutDetailView.as_view(), name="about-detail"),
]