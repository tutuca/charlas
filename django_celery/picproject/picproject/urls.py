from django.conf.urls import patterns, include, url
from django.contrib import admin

admin.autodiscover()

urlpatterns = patterns('pictures.views',
    url(r'^album/$', 'album', kwargs={'id':None}, name='albums'),
    url(r'^album/(?P<id>\d+)$', 'album', name='album'),
)
urlpatterns += patterns('',
    url(r'^admin/', include(admin.site.urls)),
)
