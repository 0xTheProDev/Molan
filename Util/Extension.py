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

import os, uuid, base64

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
        elif lang == "MIPS":
            return ".s"
        else:
            return ".txt"

    # Generate file name and target path
    _uuid     = uuid.uuid4().__str__()
    timestamp = base64.b64encode(_uuid.encode("utf-8")).decode("utf-8")
    data_path = os.path.normpath(os.path.join(os.getcwd(), "./data"))

    # Resolve file names
    source_file = "{}/{}{}".format(data_path, timestamp, static(lang))
    binary_file = "{}/{}".format(data_path, timestamp)
    input_file = "{}/{}.in".format(data_path, timestamp)
    output_file = "{}/{}.out".format(data_path,timestamp)
    err_file = "{}/{}.err".format(data_path,timestamp)

    # Return source_file, binary_file, input_file, output_file, err_file
    if lang == "java" or lang == "JAVA":
        source_file = "{}/{}/{}{}".format(data_path, timestamp, timestamp, static(lang))
        return source_file, "{}".format(binary_file), input_file, output_file, err_file

    elif lang == "python" or lang == "Python" or lang == "js" or lang == "javascript" or lang == "Javascript":
        return source_file, input_file, output_file, err_file
    
    elif lang == "MIPS":
        main_file = "data/{}{}".format(timestamp, static(lang))
        binary_file = "{}/{}{}".format(data_path, timestamp, ".out")
        output_file = "{}/{}.o".format(data_path,timestamp)
        return main_file, source_file, binary_file, input_file, output_file, err_file

    else:
        return source_file, binary_file, input_file, output_file, err_file
