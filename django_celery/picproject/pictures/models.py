from django.db import models


class Album(models.Model):

    name = models.CharField(max_length=100)
    
    
class Picture(models.Model):

    image = models.ImageField(upload_to='images')
    album = models.ForeignKey('pictures.Album')
