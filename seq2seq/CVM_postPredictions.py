import os
import shutil
import json
#from path import path
import requests

fileSystem = "."
webURL = "/"

n={}
n[0]=0 # this is x position in some views
n[1]=0 # this is y position in some views


serverURL = "http://www.entropynetwork.com/cgi-bin/filer.py"

# make a JSON featureset & graph dataset too
theJSON = {}
theJSON["nodes"] = []
theJSON["links"] = []
theJSON["nodes"].append({
	"x": (n[0]),
	"y": (n[1]),
	"text": (""),
	"isAcceptState": "false"
	})




stem = "CVM_predictions"
fileURL =""
prepURL = fileSystem + "/" + fileURL+"/"+stem+".txt"
print ("opening")
print (prepURL)

theBytes = os.path.getsize(prepURL)
theSize=theBytes/1024/1024
if theSize > 10.0:
    print ("the file is too big. can't.")
    quit()
print ("Filesize "+ str(theSize) +" Mb")

fj = open(prepURL).read()
print (fj)
#json_dumper = json.dumps(fj , ensure_ascii=False).encode('utf8')
json_dumper = json.dumps(fj)
#fixThisString = fj.decode('utf-8') 
#apparently do not need to close the file. //fj.close()

print ("fixThisString : ")

print (json_dumper)


#theJSON["nodes"].append(
#        {"text": (fj)}
#        )

theJSON["nodes"][0]["text"]=fj

print (theJSON)
theJSONstring = json.dumps(theJSON)
print (theJSONstring)

#quit()

writeURL = fileSystem + "/" + fileURL+"/"+stem+".json"
text_JSON_encoded_file = open(writeURL, "w")
text_JSON_encoded_file.write( theJSONstring  )
text_JSON_encoded_file.close()

print ("Sending to "+ serverURL )

test_files = {
    "data": theJSONstring,
    "stem": 'CVM_00001_1',
    "fileURL": '/pub/s2s/'
}
#with open( writeURL , 'rb') as f:

    
r = requests.post(serverURL, data=test_files)

print (r.text)


