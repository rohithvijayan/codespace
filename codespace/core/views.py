from django.shortcuts import render,redirect,HttpResponse
from django.contrib.auth.models import User
from django.contrib import messages
from django.contrib.auth import login as auth_login,logout as auth_logout,authenticate
# Create your views here.
def index(request):
    return render(request,'index.html')

def home(request):
    return render(request,'home.html')

def register(request):
    if request.method=='POST':
        username=request.POST["username"]
        email=request.POST["email"]
        password=request.POST['password1']
        rePassword=request.POST['password2']
        if password==rePassword:
            User.objects.create_user(username=username, email=email, password=password)  
            return redirect('login')   
        else:
             messages.error(request,"passwords do not match")
    return render(request,'signup.html')

def signin(request):
    if request.method=="POST":
        username=request.POST["username"]
        password=request.POST["password"]
        user = authenticate(request, username=username, password=password)
        if user is not None:
            auth_login(request,user)
            print(f"User:{username} is successfully signed in")
            messages.success(request,"successfully login")
            return redirect("index")
        else:
            messages.error(request,"Invalid credentials")
            return HttpResponse("Invalid Credentials")
    return render(request,'login.html')
def signout(request):
    if request.method=="POST": 
        print(request)   
        auth_logout(request)
        print("USER LOG OUT !")
        return redirect('index')
    else:
        return HttpResponse("Invalid request")
        