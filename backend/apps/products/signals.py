from django.core.cache import cache
from django.db.models.signals import post_save, post_delete
from django.dispatch import receiver

from core.cache_keys import (
    PRODUCTS_LIST_CACHE_KEY,
    product_cache_key,
)

from .models import Product


@receiver(post_save, sender=Product)
def invalidate_product_cache(sender, instance, **kwargs):
    cache.delete(PRODUCTS_LIST_CACHE_KEY)
    cache.delete(product_cache_key(instance.slug))


@receiver(post_delete, sender=Product)
def invalidate_product_cache_on_delete(sender, instance, **kwargs):
    cache.delete(PRODUCTS_LIST_CACHE_KEY)
    cache.delete(product_cache_key(instance.slug))