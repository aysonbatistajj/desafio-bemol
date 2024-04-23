from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from todoApp.views import TodoViewSet, frontendApp
from django.conf import settings
from django.conf.urls.static import static

router = DefaultRouter()
router.register(r'todos', TodoViewSet, basename='todo',)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)), 
    path('', frontendApp, name='home'), 
]

# Configuração para servir arquivos estáticos localmente durante o desenvolvimento
if settings.DEBUG:
    from django.conf.urls.static import static
    from django.conf import settings
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)