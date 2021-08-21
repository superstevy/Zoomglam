from rest_framework import generics, filters
from django_filters.rest_framework import DjangoFilterBackend
from .serializers import *
from .models import *
from .paginations import NoLimitResultPagination


class ImageList(generics.ListAPIView):
    # Get all images
    queryset = Image.objects.order_by('created_at')
    serializer_class = ImageSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = ['tags']
    search_fields = ['name', 'description']


class TagList(generics.ListAPIView):
    # Get all tags
    queryset = Tag.objects.order_by('created_at')
    serializer_class = TagSerializer
    pagination_class = NoLimitResultPagination


class ImageDetail(generics.RetrieveAPIView, generics.UpdateAPIView):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer


class ImageDelete(generics.DestroyAPIView):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer
