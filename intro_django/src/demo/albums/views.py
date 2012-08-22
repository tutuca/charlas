from django.http import HttpResponse
from django.shortcuts import render
from albums.models import Pic, Album


def index(request):
    return HttpResponse('Hola Mundo...')
    
def album_list(request):
    albums = Album.objects.all()
    return render(
        request,
        'index.html',
        {'albums':albums}
    )
