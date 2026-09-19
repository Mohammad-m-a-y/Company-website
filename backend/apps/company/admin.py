from django.contrib import admin
from .models import Company


@admin.register(Company)
class CompanyAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "site_slogan",
        "phone",
        "email",
        "maintenance_mode",
    )

    fieldsets = (
        (
            "اطلاعات اصلی",
            {
                "fields": (
                    "name",
                    "site_slogan",
                    "logo",
                    "hero_image",
                )
            },
        ),
        (
            "اطلاعات تماس",
            {
                "fields": (
                    "phone",
                    "mobile",
                    "email",
                    "address",
                )
            },
        ),
        (
            "شبکه‌های اجتماعی",
            {
                "fields": (
                    "instagram",
                    "telegram",
                    "linkedin",
                    "twitter",
                )
            },
        ),
        (
            "SEO",
            {
                "fields": (
                    "seo_title",
                    "seo_description",
                    "favicon",
                )
            },
        ),
        (
            "تنظیمات سایت",
            {
                "fields": (
                    "maintenance_mode",
                )
            },
        ),
    )

    def has_add_permission(self, request):
        return not Company.objects.exists()
