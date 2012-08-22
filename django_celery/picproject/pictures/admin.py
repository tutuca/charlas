from django.contrib import admin
from models import Album, Picture


class PictureInline(admin.TabularInline):

    model = Picture
    extra = 1


class AlbumAdmin(admin.ModelAdmin):

    inlines = [PictureInline]
    

admin.site.register(Album, AlbumAdmin)
admin.site.register(Picture)
