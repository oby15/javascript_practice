from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name="index"),
    path('counter', views.counter, name="counter"),
    path('queryselector', views.queryselector, name="queryselector"),
    path('hello', views.hello, name="hello"),
    path('colours', views.colours, name="colours"),
    path('colours2', views.colours2, name="colours2"),
    path('tasks', views.tasks, name="tasks"),
    path('localstorage', views.localstorage, name="localstorage"),
    path('currency', views.currency, name="currency"),
    path('currency2', views.currency2, name="currency2")
]
