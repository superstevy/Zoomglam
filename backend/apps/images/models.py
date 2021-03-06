from django.db import models
from cloudinary.models import CloudinaryField


class Tag(models.Model):
    class Meta(object):
        db_table = 'tagsdb'

    name = models.CharField(
        max_length=50, unique=True, blank=False
    )
    created_at = models.DateTimeField(
        'Created Datetime', blank=True, auto_now_add=True
    )
    updated_at = models.DateTimeField(
        'Updated Datetime', blank=True, auto_now=True
    )

    def __str__(self):
        return self.name


class Image(models.Model):
    class Meta(object):
        db_table = 'imagedb'

    name = models.CharField(
        max_length=50
    )
    description = models.CharField(
        max_length=500, blank=True
    )
    image = CloudinaryField(
        'image', blank=True, null=True
    )
    created_at = models.DateTimeField(
        'Created Datetime', blank=True, auto_now_add=True
    )
    updated_at = models.DateTimeField(
        'Updated Datetime', blank=True, auto_now=True
    )
    tags = models.ManyToManyField(
        Tag
    )

    def __str__(self):
        return self.name
