from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def index(request):
    return render(request, "scrapbook/index.html")

def counter(request):
    return render(request, "scrapbook/counter.html")

def queryselector(request):
    return render(request, "scrapbook/queryselector.html")

def hello(request):
    return render(request, "scrapbook/hello.html")

def colours(request):
    return render(request, "scrapbook/colours.html")

def colours2(request):
    return render(request, "scrapbook/colours2.html")

def tasks(request):
    return render(request, "scrapbook/tasks.html")

def localstorage(request):
    return render(request, "scrapbook/counter_localstorage.html")

def currency(request):
    return render(request, "scrapbook/currency.html")

def currency2(request):
    return render(request, "scrapbook/currency2.html")