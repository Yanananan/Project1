
// Initialize Firebase
var config = {
    apiKey: 'AIzaSyC2sHDpoYHYRhITz9g99TgSmJkb8kww-Vg',
    authDomain: 'ysl-traveling.firebaseapp.com',
    databaseURL: 'https://ysl-traveling.firebaseio.com',
    projectId: 'ysl-traveling',
    storageBucket: 'ysl-traveling.appspot.com',
    messagingSenderId: '933230380678'
  };

  firebase.initializeApp(config);

  // Create a variable to reference the database.
  var database = firebase.database();
  var travelID;
  var dest1_clicks, dest2_clicks, dest3_clicks,
      dest4_clicks, dest5_clicks, dest6_clicks, dest7_clicks,
      dest8_clicks, dest9_clicks, dest10_clicks;
  var travel_packages = database.ref().child('travel_packages');

  travel_packages.on('value', function(snap) {

      dest1_clicks = snap.val().dest1.clicks;
      dest2_clicks = snap.val().dest2.clicks;
      dest3_clicks = snap.val().dest3.clicks;
      dest4_clicks = snap.val().dest4.clicks;
      dest5_clicks = snap.val().dest5.clicks;
      dest6_clicks = snap.val().dest6.clicks;
      dest7_clicks = snap.val().dest7.clicks;
      dest8_clicks = snap.val().dest8.clicks;
      dest9_clicks = snap.val().dest9.clicks;
      dest10_clicks = snap.val().dest10.clicks;
  });


  //on page loads, add number of clicks to the destination object
  travel_packages.once('value').then(function(snap) {
    var numberOfClicks = [];
    snap.forEach(function(child) {
        numberOfClicks.push(child.val().clicks);
    });

    destinations["Bridgetown"].clicks = numberOfClicks[0];
    destinations["Zurich"].clicks = numberOfClicks[1];
    destinations["Havana"].clicks = numberOfClicks[2];
    destinations["Tokyo"].clicks = numberOfClicks[3];
    destinations["Johannesburg"].clicks = numberOfClicks[4];
    destinations["Manilla"].clicks = numberOfClicks[5];
    destinations["Seoul"].clicks = numberOfClicks[6];
    destinations["Sydney"].clicks = numberOfClicks[7];
    destinations["Vancouver"].clicks = numberOfClicks[8];
    destinations["Reykjavik"].clicks = numberOfClicks[9];
  });



  $('.box').on('click', function() {
      var numOfClicks = [dest1_clicks,dest2_clicks, dest3_clicks, dest4_clicks, dest5_clicks, dest6_clicks, dest7_clicks, dest8_clicks, dest9_clicks, dest10_clicks];

      travelID = $(this).attr('id');
      var lastChar = travelID.substr(4);
      numOfClicks[lastChar - 1]++;
      database.ref(`travel_packages/${travelID}`).set({
        clicks: numOfClicks[lastChar - 1]
      });
    });

var destinations = {
  Bridgetown: {
    country: 'Barbados',
    currencyCode: 'BBD',
    flightInfo: 'flight 1',
    stufftodo: 'asldkfjsl',
  },
  Zurich: {
    country: 'Switzerland',
    currencyCode: 'CHF',
    flightInfo: 'flight 1',
    stufftodo: 'asldkfjsl'
  },
  Havana: {
    country: 'Cuba',
    currencyCode: 'CUP',
    flightInfo: 'flight 1',
    stufftodo: 'asldkfjsl'
  },
  Tokyo: {
    country: 'Japan',
    currencyCode: 'JPY',
    flightInfo: 'flight 1',
    stufftodo: 'asldkfjsl'
  },
  Johannesburg: {
    country: 'South Africa',
    currencyCode: 'ZAR',
    flightInfo: 'flight 1',
    stufftodo: 'asldkfjsl'
  },
  Manilla: {
    country: 'The Philippines',
    currencyCode: 'PHP',
    flightInfo: 'flight 1',
    stufftodo: 'asldkfjsl'
  },
  Seoul: {
    country: 'South Korea',
    currencyCode: 'KRW',
    flightInfo: 'flight 1',
    stufftodo: 'asldkfjsl'
  },
  Sydney: {
    country: 'Australia',
    currencyCode: 'AUD',
    flightInfo: 'flight 1',
    stufftodo: 'asldkfjsl'
  },
  Vancouver: {
    country: 'Canada',
    currencyCode: 'CAD',
    flightInfo: 'flight 1',
    stufftodo: 'asldkfjsl'
  },
  Reykjavik: {
    country: 'Iceland',
    currencyCode: 'ISK',
    flightInfo: 'flight 1',
    stufftodo: 'asldkfjsl'
  }
};

var cityDiv,
  cityText,
  countryCode,
  i = 0;
for (var key in destinations) {
  i++;
  cityDiv = '#dest' + i + ' .name';
  countryCode = destinations[key].currencyCode;
  cityText = key + ', ' + destinations[key]['country'];
  $(cityDiv).text(cityText);
}

var currencyURL =
  'http://apilayer.net/api/list?access_key=a7f50bef8b2879efd43630712a46b389';
var currencyResponse = $.ajax({
  url: currencyURL
});

var rateURL =
  'http://www.apilayer.net/api/live?access_key=a7f50bef8b2879efd43630712a46b389';
var rateResponse = $.ajax({
  url: rateURL
});

jQuery.when(currencyResponse, rateResponse).done(function() {
  var currencyList = currencyResponse.responseJSON.currencies;
  console.log('currencyList:');
  console.log(currencyList);

  var rateList = rateResponse.responseJSON.quotes;
  console.log('rateList:');
  console.log(rateList);

  var currencyDiv,
    currencyText,
    countryCode,
    i = 0;
  for (var key in destinations) {
    i++;
    currencyDiv = '#dest' + i + ' .currency';
    countryCode = destinations[key].currencyCode;
    currencyText =
      'US Dollar to ' +
      currencyList[countryCode] +
      ' : 1 to ' +
      rateList['USD' + countryCode];
    $(currencyDiv).text(currencyText);
  }
});
