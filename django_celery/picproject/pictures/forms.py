from django import forms
from pictures.models import Album


class AlbumForm(forms.ModelForm):

    class Meta:
        model=Album
