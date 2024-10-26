from django.db import models

class Prompt(models.Model):
    role = models.CharField(max_length=255)
    context = models.TextField()
    action = models.TextField()
    instructions = models.TextField()
    generated_prompt = models.TextField(blank=True, null=True)
    
    def __str__(self):
        return f"Prompt for role: {self.role}"
