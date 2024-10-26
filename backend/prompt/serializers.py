from rest_framework import serializers
from .models import Prompt

class PromptSerializer(serializers.ModelSerializer):
    class Meta:
        model = Prompt
        fields = ['role', 'context', 'action', 'instructions', 'generated_prompt']
        read_only_fields = ['generated_prompt']
