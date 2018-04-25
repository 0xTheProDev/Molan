# Molan: Molan-API
#
# Author: Progyan Bhattacharya <progyanb@acm.org>
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

import json
import os.path

class DatabaseHelper(object):
    def __init__(self):
        self._hashkey = 0
        if os.path.isfile("./db.json"):
            self._connector = open("./db.json", "r+")
        else:
            self._connector = open("./db.json", "w+")
        self._cursor = json.load(self._connector)

    def load(self):
        return self._cursor

    def save(self, data):
        if self._cursor != data:
            self._cursor = data
            self._hashkey += 1

    def commit(self):
        if self._hashkey > 0:
            json.dump(self._cursor, self._connector)
