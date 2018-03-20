# Molan: Molan-API
#
# Author: Satyam Kumar <satyamvats5@gmail.com>
# Copyright 2018 Tech-Mantra, All rights reserved.
#
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
# You should have received a copy of the GNU General Public License
# along with this program. If not, see <http://www.gnu.org/licenses/>

from flask_restful import Resource
from flask import request, jsonify
import time
import json
import os
import subprocess

class Submit(Resource):
    def post(self):
        req_data = request.get_json()
        name = int(time.time())
    #print(ext)
    #Processing for C-language
        if(req_data["language"] == 'c'):

            f = open("./data/%d.c" % name,  "w")
            f.write(req_data['source'])
            f.close()
            if(req_data['haveInput'] == True):
                fp = open("./data/%d.in" % name, "w")
                fp.write(req_data['input'])
                fout = open("./data/text.out", "w")
                ferr = open("./data/err.out", "w")
                s =  subprocess.call(["gcc", "./data/%d.c" % name],stdin = None,stdout = None, stderr = ferr)
                if(s == 0 ):
                    r = subprocess.call("./a.out", stdin = fp, stdout = fout, stderr = ferr)
                    if(r == 0):
                            return jsonify(
                                id = req_data["id"],
                                status = "Success",
                                input = json.loads(fp),
                                output = json.loads(fout)
                            )

                    else:
                            return jsonify(
                                id = req_data["id"],
                                status = "Runtime Error",
                                input = json.loads(fp),
                                output = json.loads(ferr)
                            )

                else:

                    return jsonify(
                        id = req_data["id"],
                        status = "Compile Error",
                        input = json.loads(fp),
                        output = json.loads(ferr)
                    )
                    fout.close()
                    fp.close()
                    ferr.close()

            else:
                ferr = open("./data/err.out", "w")
                s =  subprocess.call(["gcc", "./data/%d.c" % name],stdin = None,stdout = None, stderr = ferr)
                if(s == 0):
                    fout = open("./data/text.out", "w")
                    r = subprocess.call("./a.out", stdin = None, stdout = fout, stderr = ferr)
                    if(r == 0):

                            return jsonify(
                                id = req_data["id"],
                                status = "Success",
                                input = "null",
                           #     output = json.load(fout)
                            )

                    else:
                            return jsonify(
                                id = req_data["id"],
                                status = "Runtime Error",
                                input = "null",
                       #         output = json.load(ferr)
                            )

                else:

                    return jsonify(
                        id = req_data["id"],
                        status = "Compile Error",
                        input = "Null",
                       # output = json.load(ferr)
                    )
                    fout.close()
                    ferr.close()

    #Processing for C
        elif(req_data["language"] == 'cpp'):

            f = open("./data/%d.cpp" % name,  "w")
            f.write(req_data['source'])
            f.close()
            if(req_data['haveInput'] == True):
                fp = open("./data/%d.in" % name, "w")
                fp.write(req_data['input'])
                s =  subprocess.call(["g", "./data/%d.cpp" % name],stdin = None,stdout = None, stderr = None)
                fout = open("./data/text.out", "w")
                subprocess.call("./a.out", stdin = fp, stdout = fout)
                fout.close()
                fp.close()
            else :
                s =  subprocess.call(["g", "./data/%d.cpp" % name],stdin = None,stdout = None, stderr = None)
                fout = open("./data/text.out", "w")
                subprocess.call("./a.out", stdin = None, stdout = fout)
                fout.close()
    #Processing for python
        elif(req_data["language"] == 'python') :

            f = open("./data/%d.py" % name,  "w")
            f.write(req_data['source'])
            f.close()
            if(req_data['haveInput'] == True):
                fp = open("./data/%d.in" % name, "w")
                fp.write(req_data['input'])
                fout = open("./data/text.out", "w")
                s =  subprocess.call(["python3", "./data/%d.py" % name],stdin = fp,stdout = fout, stderr = None)
                fout.close()
                fp.close()
            else:
                fout = open("./data/text.out", "w")
                s =  subprocess.call(["python3", "./data/%d.py" % name],stdin = None,stdout = fout, stderr = None)
                fout.close()
    #Processing for java
        elif(req_data["language"] == "java") :
            f = open("./data/%d.java" % name,  "w")
            f.write(req_data['source'])
            f.close()
            if(req_data['haveInput'] == True):
                fp = open("./data/%d.in" % name, "w")
                fp.write(req_data['input'])
                fout = open("./data/text.out", "w")
                s =  subprocess.call(["javac", "./data/%d.java" % name],stdin = None,stdout = None, stderr = None)
                #How can we run the java program as it will need the name of class to run.....
                fout.close()
                fp.close()




        return jsonify(
            id = req_data["id"],
            status = "Success",
            input = req_data["input"],
      #      output = tmp
        )
        return 200
