from django.contrib import admin
from albums.models import Pic, Album


class PicInLine(admin.TabularInline):
    model = Pic
    extra = 1

class PicAdmin(admin.ModelAdmin):
    list_display = ('image', 'album', 'caption')
    list_filter = ('album', )
    
class AlbumAdmin(admin.ModelAdmin):
    inlines = [PicInLine]
    list_display = ('name', 'date')

admin.site.register(Pic, PicAdmin)
admin.site.register(Album, AlbumAdmin)

