from django.db import models


class Album(models.Model):

    name = models.CharField(max_length=100)
    description = models.TextField()
    date = models.DateField(auto_now=True)


class Pic(models.Model):
    
    image = models.ImageField(upload_to='pictures')
    album = models.ForeignKey('albums.Album')    
    caption = models.CharField(max_length=100)

