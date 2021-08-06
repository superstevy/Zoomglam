from django.urls import path
from . import views

urlpatterns = [
    path('', views.ImageList.as_view(), name='image_list'),
    path('tags/', views.TagList.as_view(), name='tag_list'),
    path('delete/<int:pk>/', views.ImageDelete.as_view(), name='image_delete'),
]
