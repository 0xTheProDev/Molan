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

# Import System Modules
import sys, getopt

# Import Flask Packages
from flask import Flask, render_template, send_from_directory
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

# Editor Module
@app.route("/vs/<path:filename>")
def vs(filename):
    return send_from_directory("static/vs", filename)

# Default Route
@app.route("/")
def index():
    return render_template("index.html")



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


# Environment Variables
hostEnv = Config.API_CONF["host"]
portEnv = Config.API_CONF["port"]
debugFlag = False

# Driver Program
if __name__ == "__main__":

    # Extract command line arguments
    if len(sys.argv) > 1:
        argList = sys.argv[1:]
        unixOpt = "h:p:d"
        gnuOpt  = [ "host=", "port=", "debug" ]

        try:
            arguments, values = getopt.getopt(argList, unixOpt, gnuOpt)
            for arg, value in arguments:
                if arg in ("-h", "--host"):
                    hostEnv = value.__str__()
                elif arg in ("-p", "--port"):
                    portEnv = int(value)
                elif arg in ("-d", "--debug"):
                    debugFlag = True

        except getopt.error as err:
            print(err.__str__())
            sys.exit(2)

    app.run(debug = True, host = hostEnv, port = portEnv, threaded = True)
    # ssl_context="adhoc"
