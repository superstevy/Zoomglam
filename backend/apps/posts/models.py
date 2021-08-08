from django.db import models
from cloudinary.models import CloudinaryField


class Images (models.Model):
    class Meta(object):
        db_table = 'image'

    id = models.AutoField(
        primary_key=True
    )
    name = models.ManyToManyField(
        'Tags', through='Image_tag', blank=True, db_index=True, default='Anonymous'
    )
    image = CloudinaryField(
        'image', blank=True, null=True
    )
    created_at = models.DateTimeField(
        'Created Datetime', blank=True, auto_now_add=True
    )


class Tags (models.Model):
    class Meta(object):
        db_table = 'tag'

    id = models.AutoField(
        primary_key=True
    )
    tag = models.ManyToManyField(
        'Images', through='Image_tag', blank=True
    )


class Image_tag (models.Model):
    class Meta(object):
        db_table = 'image_tag'

    image = models.ForeignKey(
        Images, on_delete=models.CASCADE
    )
    tag = models.ForeignKey(
        Tags, on_delete=models.CASCADE
    )


# class Post(models.Model):
#     class Meta(object):
#         db_table = 'post'

#     name = models.CharField(
#         'Name', blank=False, null=False, max_length=14, db_index=True, default='Anonymous'
#     )
#     body = models.CharField(
#         'Body', blank=False, null=False, max_length=140, db_index=True
#     )
#     image = CloudinaryField(
#         'image', blank=True, null=True
#     )
#     created_at = models.DateTimeField(
#         'Created Datetime', blank=True, auto_now_add=True
#     )
#     updated_at = models.DateTimeField(
#         'Updated Datetime', blank=True, auto_now=True
#     )
