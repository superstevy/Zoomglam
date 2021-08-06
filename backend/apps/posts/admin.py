from django.contrib import admin
from .models import Images, Tags, Image_tag

admin.site.register(Images)
admin.site.register(Tags)
admin.site.register(Image_tag)
