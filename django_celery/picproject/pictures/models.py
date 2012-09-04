from django.db import models
from django.dispatch import receiver
from django.db.models.signals import post_save
import tasks

    
class Album(models.Model):

    name = models.CharField(max_length=100)
    set_id = models.CharField(max_length=100)

    def __unicode__(self):
        return self.name

class Picture(models.Model):

    image_url = models.URLField()
    album = models.ForeignKey('pictures.Album')
    latitude = models.FloatField(blank=True, null=True)
    longitude = models.FloatField(blank=True, null=True)
    map_url = models.URLField(blank=True, null=True)
    

@receiver(post_save, sender=Album)
def start_task(sender, **kwargs):
    tasks.process_pictures(kwargs['instance'])
