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
from Util.Config import TEST_DATA
from flask import Flask
from flask_bcrypt import Bcrypt

def signup(req_data):
    # Validate data received
    if not all(x in [ "username", "password" ] for x in req_data.keys()):
        res_data = {
                "loggedIn": False,
                "error":    "User name and password cannot be empty",
                "username": None,
                "cache":    []
        }
        return res_data, 301

    # Backdoor for testing
    if req_data["username"] == TEST_DATA["username"] and req_data["password"] == TEST_DATA["password"]:
        res_data = {
                "loggedIn": True,
                "error":    None,
                "username": req_data["username"],
                "cache":    []
        }
        return res_data, 200

    # Load Database
    db = DatabaseHelper()
    data = db.load()
    for user in data :
        if user["username"] == req_data["username"]:
            res_data = {
                    "loggedIn": False,
                    "error":    "User Name not available, choose a different one",
                    "username": None,
                    "cache":    None
            }
            return res_data, 301

    # hash the password
    app = Flask(__name__)
    bcrypt = Bcrypt(app)
    pw_hash = bcrypt.generate_password_hash(req_data["password"])

    # New entry to the table
    add_data = {
            "username": req_data["username"],
            "password": pw_hash,
            "loggedIn": True,
            "cache":    []
    }
    data.append(add_data)
    db.save(data)
    db.commit()

    res_data = {
            "loggedIn": True,
            "error":    None,
            "username": req_data["username"],
            "cache":    []
    }

    return res_data, 200
