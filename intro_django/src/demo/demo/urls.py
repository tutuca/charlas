from django.conf.urls import patterns, include, url
from django.contrib import admin


admin.autodiscover()

urlpatterns = patterns('',
    url(r'^$', 'albums.views.index', name='home'),
    url(r'^album/$', 'albums.views.album_list', name='album_list'),


    url(r'^admin/', include(admin.site.urls)),
)
