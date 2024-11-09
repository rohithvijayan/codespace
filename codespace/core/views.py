from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request,'index.html')

def home(request):
    return render(request,'home.html')

def register(request):
    return render(request,'signup.html')

def signin(request):
    return render(request,'login.html')