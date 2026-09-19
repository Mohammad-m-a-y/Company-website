from django.core.cache import cache
from django.db.models.signals import post_save
from django.dispatch import receiver

from .models import Company
from core.cache_keys import COMPANY_CACHE_KEY


@receiver(post_save, sender=Company)
def invalidate_company_cache(sender, instance, **kwargs):
    cache.delete(COMPANY_CACHE_KEY)