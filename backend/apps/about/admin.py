from django.contrib import admin

from django.contrib import admin

from .models import About, AboutValue, AboutService


@admin.register(About)
class AboutAdmin(admin.ModelAdmin):
    
    def has_add_permission(self, request):
        return not About.objects.exists()


@admin.register(AboutValue)
class AboutValueAdmin(admin.ModelAdmin):
    list_display = (
        "title",
        "order",
        "is_active",
    )

    list_editable = (
        "order",
        "is_active",
    )


@admin.register(AboutService)
class AboutServiceAdmin(admin.ModelAdmin):
    list_display = (
        "title",
        "order",
        "is_active",
    )

    list_editable = (
        "order",
        "is_active",
    )
