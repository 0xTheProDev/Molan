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

from flask import request
from flask_restful import Resource
from Model.DB.Signup import signup
from Model.DB.Login import login
from Model.DB.Logout import logout

class Authentication(Resource):
    def post(self):
        if request.endpoint == "login_ep":
            auth = request.authorization
            return login(auth)

        elif request.endpoint == "logout_ep":
            data = request.get_json(force = True)
            return logout(data)

        elif request.endpoint == "signup_ep":
            data = request.get_json(force = True)
            return signup(data)
