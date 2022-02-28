from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def index(request):
    return render(request, "scrapbook/index.html")

def counter(request):
    return render(request, "scrapbook/counter.html")

def queryselector(request):
    return render(request, "scrapbook/queryselector.html")