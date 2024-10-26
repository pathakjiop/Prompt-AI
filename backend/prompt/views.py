from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import PromptSerializer
from .models import Prompt

class PromptGeneratorView(APIView):
    def post(self, request):
        serializer = PromptSerializer(data=request.data)
        
        if serializer.is_valid():
            role = serializer.validated_data['role']
            context = serializer.validated_data['context']
            action = serializer.validated_data['action']
            instructions = serializer.validated_data['instructions']

            # Format the prompt
            generated_prompt = (
                f"Act as a {role} with 20+ years of experience in the industry. "
                f"I am {context}, and I need your help to {action}. "
                f"Please follow these instructions: {instructions}. "
                "Ensure the solution is detailed, efficient, and aligns with industry best practices. "
                "Provide explanations for your decisions and actions where applicable."
            )

            # Save the prompt if desired
            serializer.save(generated_prompt=generated_prompt)

            return Response({'generated_prompt': generated_prompt}, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
