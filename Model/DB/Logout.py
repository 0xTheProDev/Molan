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

def logout(req_data):
    db = DatabaseHelper()
    data = db.load()
    for user in data:
        if user["username"] == req_data["username"] :
            user["loggedIn"] = False
            res_data = {
                    "loggedIn": False,
                    "error":    None
            }
            db.save(data)
            break
        else :
            res_data = {
                    "loggedIn": False ,
                    "error":    "User Not Found"
            }

    db.commit()
    return res_data, 200
