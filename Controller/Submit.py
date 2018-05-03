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
from flask import request

# Update Database
from Model.DB.Cache import updateCache

# Import build recepie
from Model.Submit.Submit_C import build as cb
from Model.Submit.Submit_CPP import build as cppb
from Model.Submit.Submit_PY import build as pb
from Model.Submit.Submit_JAVA import build as jab
from Model.Submit.Submit_JS import build as jsb

class Submit(Resource):
    def post(self):
        # Extract data from request
        req_data = request.get_json(force = True)
        req_id = req_data["id"]
        source_code = req_data["source"]
        input_data = req_data["input"] if req_data["haveInput"] else None

        # Update cache after each submission
        if "username" in req_data :
            updateCache(req_data)

        # Build target for C program
        if req_data["language"] == "c" or req_data["language"] == "C":
            return cb(req_id, source_code, input_data)

        # Build target for C++ program
        elif req_data["language"] == "cpp" or req_data["language"] == "CPP" or req_data["language"] == "C++":
            return cppb(req_id, source_code, input_data)

        # Build target for Java program
        elif req_data["language"] == "java" or req_data["language"] == "Java" or req_data["language"] == "JAVA":
            return jab(req_id, source_code, input_data)

        # Build target for Python program
        elif req_data["language"] == "python" or req_data["language"] == "Python":
            return pb(req_id, source_code, input_data)

        # Build target for JavaScript program
        elif req_data["language"] == "js" or req_data["language"] == "javascript" or req_data["language"] == "Javascript":
            return jsb(req_id, source_code, input_data)
