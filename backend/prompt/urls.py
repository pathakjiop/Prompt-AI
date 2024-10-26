from django.urls import path
from .views import PromptGeneratorView

urlpatterns = [
    path('generate-prompt/', PromptGeneratorView.as_view(), name='generate_prompt'),
]
