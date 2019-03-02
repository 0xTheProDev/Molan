FROM ubuntu:16.04

RUN apt-get update -y && apt-get install -y python-pip python-dev

WORKDIR /app

COPY ./requirements.txt ./

RUN pip install -r requirements.txt

COPY ./ ./

CMD ["python", "app.py"] 
