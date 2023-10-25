from django.shortcuts import render
from .serializers import SearchSerializer
from rest_framework import viewsets, permissions
from .models import Search
from django.contrib.auth.models import User

class SearchViewSet(viewsets.ModelViewSet):
    # permission_classes = [permissions.IsAuthenticated]
    serializer_class = SearchSerializer
    queryset = Search.objects.all()

    def get_queryset(self):
        return super().get_queryset()#.filter(user=self.request.user)
    
    def perform_create(self, serializer):
        serializer.save(user=User.objects.get(id=1))#self.request.user)
# Create your views here.
