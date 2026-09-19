from django.apps import AppConfig


class AboutConfig(AppConfig):
    name = 'apps.about'

    def ready(self):
        from . import signals
