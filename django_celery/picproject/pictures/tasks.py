from celery import task
from flickrapi import FlickrAPI
from googlemaps import GoogleMaps
from django.conf import settings
import models
import json

flickr = FlickrAPI(settings.FLICKR_KEY,
               settings.FLICKR_SECRET)

gm = GoogleMaps(settings.GOOGLE_KEY)

@task
def process_pictures(album):
        
    for x in flickr.walk_set(album.url.split('/')[-2]):
        pic_url = 'http://farm%s.staticflickr.com/%s/%s-%s_z.jpg' %(
            x.get('farm'), 
            x.get('server'), 
            x.get('id'), 
            x.get('secret')
        )
        
