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
from time import time

def updateCache(req_data):
    timestamp = int(time())
    db = DatabaseHelper()
    data = db.load()
    for user in data:
        if user["username"] == req_data["username"]:
            done = False

            # If cache already exists
            for entry in user["cache"]:
                if entry["language"] == req_data["language"]:
                    entry["timestamp"] = timestamp
                    entry["code"] = req_data["source"]
                    done = True

            # New entry to cache
            if done == False:
                add_data = {
                        "timestamp": timestamp,
                        "language":  req_data["language"],
                        "code":      req_data["source"]
                }
                user["cache"].append(add_data)

        # Update databse
        db.save(data)
        db.commit()
        return
