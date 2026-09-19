from django.apps import AppConfig


class CompanyConfig(AppConfig):
    name = 'apps.company'

    def ready(self):
        from . import signals
