from django.shortcuts import render
from django.template import RequestContext
from django.shortcuts import render_to_response
import requests
from django.http import HttpResponse
import json

RHINE_URL = 'http://api.rhine.io/sdf0b913e4b07b5243b7f527/distance/'

def index(request):
    return render(request, 'feud/index.html')

def score(request):
    category, word = request.GET.get('category', None), request.GET.get('word', None)
    response = requests.get(RHINE_URL + category + '/' + word)
    return HttpResponse(json.dumps(response.json()), content_type="application/json")
