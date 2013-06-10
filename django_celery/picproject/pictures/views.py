from django.shortcuts import render, get_object_or_404, redirect
from django.contrib import messages
from pictures.models import Album
from pictures.forms import AlbumForm
from pictures import tasks


def album(request, id=None):
    albums = Album.objects.all()
    form = AlbumForm
    res = None
    if id is not None:
        album = get_object_or_404(albums, id=id)
    else:
        album = None
    
    if request.method=='POST':
        form = AlbumForm(request.POST)
        if form.is_valid():
            messages.success(request, 'Album saved, fetching images')
            instance = form.save()
            res = tasks.process_pictures.delay(kwargs['instance'])
            return redirect('album', id=instance.pk)
        
    return render(
        request,
        'index.html',
        {
            'album':album,
            'albums':albums,
            'form': form,
            'res':res
        }
        
    )
