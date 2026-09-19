from django.core.cache import cache
from django.db.models.signals import post_save
from django.dispatch import receiver

from core.cache_keys import (
    ABOUT_CACHE_KEY,
    ABOUT_DETAIL_CACHE_KEY,
)

from .models import About, AboutValue, AboutService


@receiver(post_save, sender=About)
def invalidate_about_cache(sender, instance, **kwargs):
    cache.delete(ABOUT_CACHE_KEY)
    cache.delete(ABOUT_DETAIL_CACHE_KEY)


@receiver(post_save, sender=AboutValue)
def invalidate_about_value_cache(sender, instance, **kwargs):
    cache.delete(ABOUT_DETAIL_CACHE_KEY)


@receiver(post_save, sender=AboutService)
def invalidate_about_service_cache(sender, instance, **kwargs):
    cache.delete(ABOUT_DETAIL_CACHE_KEY)