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

import os
from time import time

def extension(lang):
    def static(lang):
        if lang == "c" or lang == "C":
            return ".c"
        elif lang == "cpp" or lang == "CPP" or lang == "C++":
            return ".cpp"
        elif lang == "java" or lang == "Java" or lang == "JAVA":
            return ".java"
        elif lang == "python" or lang == "Python":
            return ".py"
        elif lang == "js" or lang == "javascript" or lang == "Javascript":
            return ".js"
        else:
            return ".txt"

    # Get timestamp and target path
    timestamp = int(time())
    data_path = os.path.normpath(os.path.join(os.getcwd(), "./data"))

    # Return source_file, binary_file, input_file, output_file, err_file
    return "{}/{}{}".format(data_path, timestamp, static(lang)), "{}/{}".format(data_path, timestamp), "{}/{}.in".format(data_path, timestamp), "{}/{}.out".format(data_path, timestamp), "{}/{}.err".format(data_path, timestamp)
