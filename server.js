// Imports dependencies and set up http server
const
  express = require('express'),
  bodyParser = require('body-parser'),
  app = express().use(bodyParser.json()); // creates express http server

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = process.env.PORT || 5000;

var FileReader = require('filereader')
  , fileReader = new FileReader()
  ;

let authCode;
const token = {
  "access_token": "1583622383-01-HDsEbtyaF3ZFZRzNFSXpxWiACJJ3pHcoKrA8JPZx93c",
  "expires_in": 2592000,
  "token_type": "Bearer",
  "refresh_token": "REFRESH_TOKEN",
  "scope": "partner.accounts partner.payments partner.trips"
}

const trip = {
  "count": 1200,
  "limit": 1,
  "trips": [
    {
      "fare": 6.2,
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
      "surge_multiplier": 1,
      "pickup": {
        "timestamp": 1502843903
      },
      "driver_id": "8LvWuRAq2511gmr8EMkovekFNa2848lyMaQevIto-aXmnK9oKNRtfTxYLgPq9OSt8EzAu5pDB7XiaQIrcp-zXgOA5EyK4h00U6D1o7aZpXIQah--U77Eh7LEBiksj2rahB==",
      "status": "completed",
      "duration": 475,
      "trip_id": "b5613b6a-fe74-4704-a637-50f8d51a8bb1",
      "currency_code": "USD"
    }
  ],
  "offset": 0
}


app.listen(port, () => console.log(`Server running on port ${port}`));

// @route   GET /auth
// @desc    Tests post route
// @access  Public
app.post('/auth', (req, res) => {
  console.log(req);
  authCode = req.AUTH_CODE;
  console.log("AUTH SUCESS, RETRIEVE TOKEN");
  console.log(token);

  console.log("SERVER TO UBER API...");
  console.log("RETRIEVING TRIPS");
  console.log(trip);

  fileReader.setNodeChunkedEncoding(true || false);
  fileReader.readAsDataURL(new File('./massage.json'));
  
  // non-standard alias of `addEventListener` listening to non-standard `data` event
  fileReader.on('data', function (data) {
    console.log(data);
  });
  
  // `onload` as listener
  fileReader.addEventListener('load', function (ev) {
    console.log("dataUrlSize:", ev.target.result.length);
  });

  res.sendStatus(200);
});