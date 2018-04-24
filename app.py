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

# Import Flask Packages
from flask import Flask
from flask_restful import Api
from flask_cors import CORS

# Import Utility Functions and Configurations
from Util import Config

# Import Controller Modules
from Controller.Status import Status
from Controller.Submit import Submit
from Controller.Authentication import Authentication

# Define Flask Application
app = Flask(__name__)
CORS(app)

# REST API from Application
api = Api(app)
api.add_resource(
    Status,
    Config.API_PATH + "/status",
    endpoint = "status_ep")
api.add_resource(
    Submit,
    Config.API_PATH + "/submit",
    endpoint = "submit_ep")
api.add_resource(
    Authentication,
    Config.API_PATH + "/login",
    endpoint = "login_ep")
api.add_resource(
    Authentication,
    Config.API_PATH + "/logout",
    endpoint = "logout_ep")
api.add_resource(
    Authentication,
    Config.API_PATH + "/signup",
    endpoint = "signup_ep")

# Driver Program
if __name__ == "__main__":
    app.run(debug = True, host = Config.API_CONF["host"], port = Config.API_CONF["port"], threaded = True)
    # ssl_context="adhoc"
