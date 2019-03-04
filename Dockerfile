FROM ubuntu:16.04

RUN apt-get update -y && apt-get install -y python-pip python-dev

WORKDIR /app

COPY ./requirements.txt ./

RUN pip install -r requirements.txt

COPY ./ ./

EXPOSE 8080

CMD python app.py -p  $PORT
