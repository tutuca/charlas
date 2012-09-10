from celery import task
from flickrapi import FlickrAPI, FlickrError
from googlemaps import GoogleMaps
from django.conf import settings
import models
import json


flickr = FlickrAPI(settings.FLICKR_KEY, settings.FLICKR_SECRET)

gm = GoogleMaps(settings.GOOGLE_KEY)

@task
def process_pictures(album):
    for x in flickr.walk_set(album.set_id):
        pic_url = 'http://farm%s.staticflickr.com/%s/%s_%s_z.jpg' %(
            x.get('farm'),
            x.get('server'),
            x.get('id'),
            x.get('secret')
        )
        try:
            location = flickr.photos_geo_getLocation(photo_id=x.get('id'))            
        except FlickrError:
            location = None
        
        pic = models.Picture(
            album=album,
            image_url=pic_url
        )
        pic.save()
        print pic
