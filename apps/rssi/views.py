from django.shortcuts import render, redirect
import subprocess
import time

def index(request):
    total = 1
    stop = 0
    num = 1
    while(stop < total):
        process = subprocess.Popen(['/System/Library/PrivateFrameworks/Apple80211.framework/Versions/Current/Resources/airport','-I'], stdout=subprocess.PIPE)
        out, err = process.communicate()
        process.wait()

        space = out.decode("utf-8").split()
        time.sleep(2)
        print(num," CtlRSSI = ",space[1])
        num = num + 1