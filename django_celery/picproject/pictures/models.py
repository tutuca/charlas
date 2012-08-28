from django.db import models
from pictures import tasks

class Album(models.Model):

    name = models.CharField(max_length=100)
    url = models.URLField(max_length=200)

    def save(self):
        return super(self, Album).save(self)
    

    
class Picture(models.Model):

    image = models.ImageField(upload_to='images')
    album = models.ForeignKey('pictures.Album')
    latitude = models.FloatField()
    longitude = models.FloatField()
    map_url = models.URLField()
    

