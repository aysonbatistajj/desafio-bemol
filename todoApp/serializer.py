from rest_framework import serializers
from todoApp.models import TodoTask

class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = TodoTask
        fields = ['id', 'taskName', 'taskDone']


    def validate_taskName(self, value):
        if not value:
            raise serializers.ValidationError("O campo taskName é obrigatório.")
        return value