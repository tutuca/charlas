from django.contrib import admin
from blog.models import Category, BlogPost


class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'parent')
    
class BlogPostAdmin(admin.ModelAdmin):
    
    list_display = ('title', 'date', 'category')

admin.site.register(Category, CategoryAdmin)
admin.site.register(BlogPost, BlogPostAdmin)