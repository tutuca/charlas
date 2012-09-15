# -*- coding: utf-8 -*-

from celery import task
from flickrapi import FlickrAPI, FlickrError
from googlemaps import GoogleMaps
from django.conf import settings
import models
import json


flickr = FlickrAPI(settings.FLICKR_KEY, settings.FLICKR_SECRET)

gm = GoogleMaps(settings.GOOGLE_KEY)

@task
def get_map_data(lat, lng):

    
    #json also sucks
    
    return location, map_url     

@task
def process_pictures(album):
    for x in flickr.walk_set(album.set_id):
        location = map_url = None
        pic_url = 'http://farm%s.staticflickr.com/%s/%s_%s_z.jpg' %(
            x.get('farm'),
            x.get('server'),
            x.get('id'),
            x.get('secret')
        )
        try:
            rsp = flickr.photos_geo_getLocation(photo_id=x.get('id'))            
        except FlickrError:
            rsp = None

        if rsp is not None:
   
            #elementTree sucks
            lat = rsp.getchildren()[0][0].get('latitude')
            lng = rsp.getchildren()[0][0].get('longitude')
            location = gm.latlng_to_address(float(lat), float(lng))
            map_url = gm.local_search(location)['responseData']['results'][0]['staticMapUrl']
        
        pic = models.Picture(
            album=album,
            image_url=pic_url,
            location = location,
            map_url = map_url
        )
        pic.save()
        
