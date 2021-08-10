from django.urls import path
from . import views

urlpatterns = [
    path('', views.ImageList.as_view(), name='image-list'),
    path('images/<int:pk>/', views.ImageDetail.as_view(), name='image-detail'),
    path('tags/', views.TagList.as_view(), name='tag-list'),
]
