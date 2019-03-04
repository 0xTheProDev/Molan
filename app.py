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

# Import System and Util Modules
import sys, getopt
import uuid, json

# Import Flask Packages
from flask import Flask, request, make_response, render_template
from flask_restful import Api
from flask_wtf.csrf import CSRFProtect, generate_csrf
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address

# Import Utility Functions and Configurations
from Util import Config

# Import Controller Modules
from Controller.Status import Status
from Controller.Submit import Submit


# Define Flask Application
app = Flask(__name__)

app.config["SECRET_KEY"]            = uuid.uuid4().__str__()
app.config["WTF_CSRF_HEADERS"]      = [ "X-CSRFToken" ]
app.config["WTF_CSRF_TIME_LIMIT"]   = 3600
app.config["SESSION_COOKIE_NAME"]   = "_auth_session"
app.config["SESSION_PERMANENT"]     = False

csrf = CSRFProtect(app)
app.jinja_env.globals['csrf_token'] = generate_csrf

limiter = Limiter(
    app,
    key_func = get_remote_address,
    default_limits = ["200 per day", "30 per hour"]
)


# Default Route
@app.route("/")
def index():
    resp = make_response(render_template("index.html"))
    resp.headers.set("Access-Control-Allow-Origin", request.host)
    return resp


# REST API from Application
api = Api(app)

@api.representation('application/json')
def output_json(data, code, headers=None):
    resp = make_response(json.dumps(data), code)
    resp.headers.extend(headers or {})
    resp.headers.set("Access-Control-Allow-Origin", request.host)
    return resp

api.add_resource(
    Status,
    Config.API_PATH + "/status",
    endpoint = "status_ep")
api.add_resource(
    Submit,
    Config.API_PATH + "/submit",
    endpoint = "submit_ep")


# Environment Variables
hostEnv   = Config.API_CONF["host"]
portEnv   = Config.API_CONF["port"]
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
                    try:
                        hostEnv = value.__str__()
                    except Exception:
                        print("Error: Invaid host address provided with command line argument")
                        sys.exit(1)
                
                elif arg in ("-p", "--port"):
                    try:
                        portEnv = int(value)
                    except Exception:
                        print("Error: Invaid port number provided with command line argument")
                        sys.exit(1)
                
                elif arg in ("-d", "--debug"):
                    debugFlag = True

        except getopt.error as err:
            print(err.__str__())
            sys.exit(2)
    try:
        app.run(debug = debugFlag, host = hostEnv, port = portEnv, threaded = True)
    except Exception as e:
        print("Failed to start application:", e)
        sys.exit(3)
