from django.shortcuts import render, redirect, HttpResponse
import subprocess
import time

def index(request):
    return render(request, "rssi/index.html")

def getRSSI(request):
    process = subprocess.Popen(['/System/Library/PrivateFrameworks/Apple80211.framework/Versions/Current/Resources/airport','-I'], stdout=subprocess.PIPE)
    out, err = process.communicate()
    process.wait()
    space = out.decode("utf-8").split()
    # print(" CtlRSSI = ",space[1])
    
    return HttpResponse(space[1])
