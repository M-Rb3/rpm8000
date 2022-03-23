from flask import Flask
from flask_restful import Resource, Api
from flask_cors import CORS

# import the needed packages
import math
import numpy as np
import serial

app = Flask(__name__)
api = Api(app)
CORS(app)


class Chart(Resource):
    def get(self):
        # creating an array containing the radian values
        rads = np.arange(0, (2 * np.pi), 360/199*np.pi/180)

        # selecting arduino port path to read values
        arduino = serial.Serial('COM6', 9600)
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
        # close the arduino
        arduino.close()
        return {"data": arduino_data}


class HChart(Resource):
    def get(self):
        # creating an array containing the radian values
        rads = np.arange(0, (2 * np.pi), 360/199*np.pi/180)

        # selecting arduino port path to read values
        arduino = serial.Serial('COM6', 9600)
        # close the arduino running code to start new one
        arduino.close()
        # start the arduino code
        arduino.open()
        # make a list of the data collected from arduino
        arduino_data = []
        for i in range(199):
            arduino_data.append(
                float(arduino.readline().decode().replace('\r\n', '')))
            arduino_data[i] = (1-arduino_data[i])*2
        # close the arduino
        arduino.close()
        return {"data": arduino_data}


api.add_resource(Chart, "/")
api.add_resource(HChart, "/chart")

if __name__ == "__main__":
    app.run(debug=True)
