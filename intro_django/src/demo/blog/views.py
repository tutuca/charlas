from django.shortcuts import render, get_object_or_404
from blog.models import Category, BlogPost


def post_list(request):
    posts = BlogPost.objects.all()
    return render(
        request,
        'index.html',
        {'posts':posts}
    )

def post_detail(request, album_id=None):
    post = get_object_or_404(BlogPost, pk=album_id)
    return render (
        request,
        'post.html',
        {'post':post}
    )
