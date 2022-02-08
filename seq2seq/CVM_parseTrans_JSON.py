import os
import shutil
import json
#from path import path

fileSystem = "."
webURL = "/"

#print ("read a graph from" + fileSystem)

theJSON = {}

stem = "CVM_trans"
fileURL =""
prepURL = fileSystem + "/" + fileURL+"/"+stem+".json"
fj = open(prepURL, "r")
   #print(json_dump, file=fj)
fj.close()

#s = path(prepURL).bytes()
s = open(prepURL).read()

#print (s)
tJSON = json.loads(s)
json_dump = json.dumps(tJSON)
nodes=tJSON["nodes"][0]
ourText=nodes["text"]
print ( nodes["text"] )

writeURL = fileSystem + "/" + fileURL+"/"+stem+".txt"


text_file = open(writeURL, "w")
text_file.write(ourText)
text_file.close()

#
#fj = open(writeURL, "w")
#print(ourText, file=writeURL)
#fj.close()


#print (str(tJSON.nodes.text) + " END")


