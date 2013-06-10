# -*- coding: utf-8 -*-

from celery import task
from flickrapi import FlickrAPI, FlickrError
from googlemaps import GoogleMaps
from django.conf import settings
import models


flickr = FlickrAPI(settings.FLICKR_KEY, settings.FLICKR_SECRET)

gm = GoogleMaps(settings.GOOGLE_KEY)


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
            loc = flickr.photos_geo_getLocation(photo_id=x.get('id'))
        except FlickrError:
            loc = None

        pic = models.Picture(
            album=album,
            image_url=pic_url,
            location = location,
            map_url = map_url
        )
        if loc is not None:
            pic.location = gm.latlng_to_address(
                float(loc[0][0].get('latitude')),
                float(loc[0][0].get('longitude'))
            )
            res = gm.local_search(pic.location)
            pic.map_url = res['responseData']['results'][0]['staticMapUrl']
        
        pic.save()
        
