from django.db import models

class TodoTask(models.Model):
    taskName = models.CharField(max_length=255)
    taskDone = models.BooleanField(default=False)
