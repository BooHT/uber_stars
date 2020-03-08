import React, { Component } from 'react'
import axios from 'axios';

export default class Main extends Component {

    mockData = {
        "dropoff": {
            "timestamp": 1502844378
        },
        "vehicle_id": "0082b54a-6a5e-4f6b-b999-b0649f286381",
        "distance": 0.37,
        "start_city": {
            "latitude": 38.3498,
            "display_name": "Charleston, WV",
            "longitude": -81.6326
        },
        "status_changes": [
            {
            "status": "accepted",
            "timestamp": 1502843899
            },
            {
            "status": "driver_arrived",
            "timestamp": 1502843900
            },
            {
            "status": "trip_began",
            "timestamp": 1502843903
            },
            {
            "status": "completed",
            "timestamp": 1502844378
            }
        ],
        "pickup": {
            "timestamp": 1502843903
        },
        "driver_id": "8LvWuRAq2511gmr8EMkovekFNa2848lyMaQevIto-aXmnK9oKNRtfTxYLgPq9OSt8EzAu5pDB7XiaQIrcp-zXgOA5EyK4h00U6D1o7aZpXIQah--U77Eh7LEBiksj2rahB==",
        "status": "completed",
        "duration": 475,
        "trip_id": "b5613b6a-fe74-4704-a637-50f8d51a8bb1",
      };

    clickReportHandler = async () => {
        // UBER AUTH
        // https://login.uber.com/oauth/v2/authorize?client_id=7ab93a5a-3386-43a7-9424-465a35762dc3&response_type=code&redirect_uri=http://localhost:5000/auth

        axios.post("http://localhost:5000/auth?AUTH_CODE=7ab93a5a-3386-43a7-9424-465a35762dc3")
            .then(function (response) {
                // handle success
                window.alert('Trip History successfully sent.');
            })
            .catch(function (error) {
                // handle error
                window.alert('Error retrieving Trip History! Try again later.');
            });
    }


    render() {
        return (
            <div>
                <button onClick={this.clickReportHandler}>
                    Report
                </button>
            </div>
        )
    }
}
