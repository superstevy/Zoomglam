from rest_framework import generics
from .serializers import *
from django.http import JsonResponse
from .models import *


class ImageList(generics.ListAPIView):
    # Get all images, limit = 20
    queryset = Image.objects.order_by('created_at').reverse().all()[:20]
    serializer_class = ImageSerializer


class TagList(generics.ListAPIView):
    # Get all tags, limit = 20
    queryset = Tag.objects.order_by('created_at').reverse().all()[:20]
    serializer_class = TagSerializer


class ImageDetail(generics.RetrieveAPIView):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer


class ImageDelete(generics.DestroyAPIView):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer
