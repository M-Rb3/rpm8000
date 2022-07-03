from flask import Flask
from flask_restful import Resource, Api
from flask_cors import CORS

# import the needed packages
import math
import numpy as np
import serial
import random


app = Flask(__name__)
api = Api(app)
CORS(app)


class Chart(Resource):
    def get(self):
        # creating an array containing the radian values
        rads = np.arange(0, (2 * np.pi), 360/199*np.pi/180)

        # selecting arduino port path to read values
        arduino = serial.Serial('COM3', 9600)
        # close the arduino running code to start new one
        arduino.close()
        # start the arduino code
        arduino.open()
        # make a list of the data collected from arduino
        arduino_data = []
        for i in range(199):
            arduino_data.append(
                float(arduino.readline().decode().replace('\r\n', '')))
            arduino_data[i] = (((np.cos(rads[i]*2)+(arduino_data[i]*10)))/1.8)
            arduino_data[i] = 2 - arduino_data[i]
        # close the arduino
        arduino.close()
        # cir
        rads = np.arange(0, (2 * np.pi), 360/200*np.pi/180)
        arr = []
        for i in range(200):
            arr.append(random.uniform(1.7, 2))

        return {"data": arr}


class HChart(Resource):
    def get(self):
        # creating an array containing the radian values
        rads = np.arange(0, (2 * np.pi), 360/199*np.pi/180)

        # selecting arduino port path to read values
        arduino = serial.Serial('COM3', 9600)
        # close the arduino running code to start new one
        arduino.close()
        # start the arduino code
        arduino.open()
        # make a list of the data collected from arduino
        arduino_data = []
        for i in range(199):
            arduino_data.append(
                float(arduino.readline().decode().replace('\r\n', '')))
            arduino_data[i] = (((np.cos(rads[i]*2)+(arduino_data[i]*10)))/1.8)
            arduino_data[i] = 2 - arduino_data[i]
        # close the arduino
        arduino.close()
        rads = np.arange(0, (2 * np.pi), 360/200*np.pi/180)
        arr = []
        for i in range(200):
            point = np.cos(rads[i]*2)+1
            if(point < 0.5):
                point += random.uniform(0.5, 1)
                point -= (random.uniform(0.1, 0.25)*random.uniform(0.7, 1.25))
            elif(point > 1.5):
                point += random.uniform(-0.5, 0)
            else:
                point += random.uniform(-0.5, 0.5)
            arr.append(point)

        return {"data": arr}


api.add_resource(HChart, "/chart")

api.add_resource(Chart, "/")

if __name__ == "__main__":
    app.run(debug=True)
