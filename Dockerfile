FROM ubuntu:16.04

RUN apt-get update -y && apt-get install -y python3 &&apt-get install -y python3-pip python3-dev

WORKDIR /app

COPY ./requirements.txt ./

RUN pip3 install --user virtualenv

RUN pip3 install --upgrade pip

CMD SOURCE env/bin/activate

RUN pip3 install -r requirements.txt

COPY ./ ./

EXPOSE 8080

CMD python3 app.py -p  $PORT
