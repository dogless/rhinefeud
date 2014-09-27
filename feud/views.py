from django.shortcuts import render
from django.template import RequestContext
from django.shortcuts import render_to_response

def index(request):
	return render(request, 'feud/index.html')
