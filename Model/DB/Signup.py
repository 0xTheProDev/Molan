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

from Model.DB.DatabaseHelper import DatabaseHelper

def signup(req_data):
    if not all(x in [ "username", "password" ] for x in req_data.keys()):
        res_data = {
                "loggedIn" : False,
                "error" : "User name and password can't be empty",
                "username" : None,
                "cache" : []
        }
        return res_data, 400
    db = DatabaseHelper()
    data = db.load()
    for user in data :
        if user["username"] == req_data["username"] :
            res_data = {
                    "loggedIn" : False,
                    "error" : "User Name not available, choose a different one",
                    "username" : None,
                    "cache" : []
            }
            return res_data, 200
    else:
        add_data = {
                "username" : req_data["username"],
                "password" : req_data["password"],
                "loggedIn" : True,
                "cache" : []
        }

        data.append(add_data)
        db.save(data)
        db.commit()
        res_data = {
                "loggedIn" : True,
                "error" : None,
                "username" : req_data["username"],
                "cache" : []
        }

        return res_data, 200
