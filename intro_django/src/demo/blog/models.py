from django.db import models

class BlogPost(models.Model):
    """A post on a blog"""
    
    title = models.CharField(max_length=100)
    content = models.TextField()
    category = models.ForeignKey('blog.Category')
    date = models.DateTimeField(auto_now=True)

    def __unicode__(self):
        return self.title

    @models.permalink
    def get_absolute_url(self):
        return ('post_detail', [self.pk])

class Category(models.Model):
    """A category duh"""
    
    name = models.CharField(max_length=100)
    parent = models.ForeignKey('blog.Category', blank=True, null=True)
    def __unicode__(self):
        return self.name