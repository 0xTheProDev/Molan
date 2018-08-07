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

def delete(source_file, binary_file, input_file, output_file, err_file):
    try:
        os.remove(source_file)
        os.remove(binary_file)
        if input_file:
            os.remove(input_file)
        os.remove(output_file)
        os.remove(err_file)
        return 0
    except OSError:
        return -1
