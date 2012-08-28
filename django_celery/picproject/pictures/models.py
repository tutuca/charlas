from django.db import models
import tasks
    
class Album(models.Model):

    name = models.CharField(max_length=100)
    url = models.URLField(max_length=200)

    def __unicode__(self):
        return self.name

    def save(self, *args, **kwargs):
        tasks.process_pictures(self)
        return super(Album, self).save(self, *args, **kwargs)
    
class Picture(models.Model):

    image = models.ImageField(upload_to='images')
    album = models.ForeignKey('pictures.Album')
    latitude = models.FloatField()
    longitude = models.FloatField()
    map_url = models.URLField()
