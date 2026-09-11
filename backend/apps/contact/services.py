from .models import ContactMessage


class ContactService:

    @staticmethod
    def create_message(
        *,
        name,
        email,
        phone,
        subject,
        message,
    ):
        return ContactMessage.objects.create(
            name=name,
            email=email,
            phone=phone,
            subject=subject,
            message=message,
        )