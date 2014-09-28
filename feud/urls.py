from django.conf.urls import patterns, url, include
from django.contrib.auth import views as auth_views

from feud import views

urlpatterns = patterns('',
	url(r'score', views.score, name='score'),
	url(r'', views.index, name='index'),
)
