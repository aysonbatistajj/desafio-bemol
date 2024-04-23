from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from todoApp.serializer import TodoSerializer
from todoApp.models import TodoTask
from rest_framework import status

from django.shortcuts import render

def frontendApp(request):
    return render(request, 'home.html')

class TodoViewSet(viewsets.ModelViewSet):
    queryset = TodoTask.objects.all()
    serializer_class = TodoSerializer

    @action(detail=False, methods=['delete', 'post', 'put', 'get'])
    def erase(self, request):
        TodoTask.objects.all().delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    @action(detail=True, methods=['put'])  # Permite todas as origens (não recomendado para produção)
    def mark_as_done(self, request, pk=None):
        todo = self.get_object()
        todo.taskDone = True
        todo.save()
        serializer = self.get_serializer(todo)
        return Response(serializer.data)