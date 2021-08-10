from .models import *
from rest_framework import serializers


class ImageSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(allow_null=True)

    class Meta:
        model = Image
        fields = '__all__'


class TagSerializer(serializers.ModelSerializer):
    tag = serializers.CharField(allow_null=True)

    class Meta:
        model = Tag
        fields = '__all__'
