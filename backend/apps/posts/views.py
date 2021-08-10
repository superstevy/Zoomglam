# from rest_framework import generics
# from .serializers import *
# from django.http import JsonResponse
# from .models import *


# class ImageList(generics.ListAPIView):
#     # Get all images, limit = 20
#     queryset = Images.objects.order_by('created_at').reverse().all()[:20]
#     serializer_class = ImageSerializer


# class TagList(generics.ListAPIView):
#     # Get all tags
#     queryset = Tags.objects.all()
#     serializer_class = TagSerializer


# class ImageDetail(generics.RetrieveAPIView):
#     queryset = Images.objects.all()
#     serializer_class = ImageSerializer


# class ImageDelete(generics.DestroyAPIView):
#     queryset = Images.objects.all()
#     serializer_class = ImageSerializer

# # class PostAdd(generics.CreateAPIView):
# #     queryset = Post.objects.all()
# #     serializer_class = PostSerializer


# # class PostDetail(generics.RetrieveAPIView, generics.UpdateAPIView):
# #     queryset = Post.objects.all()
# #     serializer_class = PostSerializer


# # class PostDelete(generics.DestroyAPIView):
# #     queryset = Post.objects.all()
# #     serializer_class = PostSerializer
