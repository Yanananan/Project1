//THINGS TO DO:
//Keep track of copyright images

//-----------------------------GLOBAL OBJECT: DESTINATIONS---------------------------
var destinations = [
  {
    city: 'Bridgetown',
    country: 'Barbados',
    currencyCode: 'BBD',
    clicks: 11,
    currentPrice: 870,
    duration: 3,
    ticketPrice: [
      [616, 616, 463, 463],[634, 930, 643, 557],[548, 702, 471, 471],[850, 617, 532, 565],
      [673, 673, 673, 673],[702, 774,1008,1008],[870, 870, 870, 870],[661, 661, 638, 638],
      [605, 605, 605, 605],[529, 529, 567, 567],[601, 601, 623, 623],[801, 801, 801, 801]
    ],
    stufftodo: [
      'Carlisle Bay',
      'Parliament Buildings',
      "St. Michael's Cathedral",
      'National Heroes Square',
      'Barbados Garrison'
    ],
    backgoundImgCopyright: 'Business Barbados'
  },
  {
    city: 'Zurich',
    country: 'Switzerland',
    currencyCode: 'CHF',
    clicks: 2,
    currentPrice: 820,
    duration: 5,
    ticketPrice: [
        [ 858, 858, 648, 648],[ 663, 663, 663, 663],[ 663, 663, 663, 663],[974, 974, 974, 974],
        [ 706, 706, 706, 706],[1108,1108,1108,1108],[1521,1521,1648,1648],[820,1264,1150, 565],
        [1765,1765,1100,1100],[ 976, 573, 756, 756],[ 994, 994, 715, 715],[953, 953, 953, 953]
    ],
    stufftodo: [
      'Old Town',
      'Lake Zurich',
      'Kunsthaus Zurich',
      'Bahnhofstrasse',
      'Fraumunster'
    ],
    backgoundImgCopyright: 'sbbmch.cl'
  },
  {
    city: 'Havana',
    country: 'Cuba',
    currencyCode: 'CUP',
    clicks: 3,
    currentPrice: 542,
    duration: 7,
    ticketPrice: [
        [406, 406, 406, 406],[391, 391, 391, 391],[369, 369, 369, 369],[437, 437, 437, 437],
        [403, 403, 403, 403],[481, 481, 481, 481],[542, 542, 542, 542],[378, 378, 378, 378],
        [369, 369, 369, 369],[391, 391, 391, 391],[398, 398, 398, 398],[478, 478, 478, 478]
    ],
    stufftodo: [
      'Habana Vieja',
      'Castillo de los Tres Reyes del Morro',
      'Fortaleza de San Carlos de la Cubana',
      'El Capitolio',
      'Paseo del Prado'
    ],
    backgoundImgCopyright: 'Ross Garden Tours'
  },
  {
    city: 'Tokyo',
    country: 'Japan',
    currencyCode: 'JPY',
    clicks: 4,
    currentPrice: 836,
    duration: 8,
    ticketPrice: [
        [1049, 684, 754, 533],[ 754, 754, 754, 754],[ 533, 533, 893, 759],[ 579,692, 512,  512],
        [ 487, 527, 646, 646],[ 734,1030, 666, 956],[ 836, 723,1000,1000],[1138, 815, 696, 485],
        [ 404, 396, 497, 606],[ 790, 804, 595, 495],[ 508, 887, 571, 571],[ 624, 564, 579,1124],
    ],
    stufftodo: [
      'The Imperial Palace',
      'Ginza District',
      'Asakusa and the Senso-ji Temple',
      'The Meiji Shrine',
      'The Tokyo Skytree'
    ],
    backgoundImgCopyright: 'wallsauce.com'
  },
  {
    city: 'Johannesburg',
    country: 'South Africa',
    currencyCode: 'ZAR',
    clicks: 5,
    ticketPrice: [
      [1049,1049, 684, 684],[ 754, 754, 754, 754],[ 533, 893, 759, 759],[ 579,3692, 512, 512],
      [ 487, 527, 646, 646],[ 734,1030, 666, 666],[ 723, 723,1000,1000],[1138, 815, 696, 485],
      [ 404, 396, 497, 484],[ 790, 804, 595, 523],[ 508, 887, 571, 571],[ 624, 564, 579,1124]
    ],
    stufftodo: [
      'The Apartheid Museum',
      'Constitution Hill',
      'The Maboneng Precinct',
      'The Lindfield Victorian House Museum',
      'Market Theatre'
    ],
    backgoundImgCopyright: 'Andre Roberge (trekearth)'
  },
  {
    city: 'Manila',
    country: 'Philippines',
    currencyCode: 'PHP',
    clicks: 6,
    currentPrice: 836,
    duration: 9,
    ticketPrice: [
      [971, 971, 588, 588],[821, 821, 821, 821],[501, 501, 549, 549],[498, 498, 498, 498],
      [618, 740, 899, 899],[635, 635, 635, 635],[909, 909, 909, 909],[621, 564, 537, 537],
      [570, 570, 537, 537],[555, 672, 584, 583],[555, 555, 555, 555],[555, 636,1794, 971]
    ],
    stufftodo: [
      'Rizal Park',
      'Quiapo Church',
      'San Agustin Church and Museum',
      'Fort Santiago',
      'Divisoria Market'
    ],
    backgoundImgCopyright: 'wikipedia'
  },
  {
    city: 'Seoul',
    country: 'South Korea',
    currencyCode: 'KRW',
    clicks: 7,
    currentPrice: 836,
    duration: 8,
    ticketPrice: [
        [802, 802, 807, 807],[709, 709, 709, 709],[689, 689, 756, 756],[513, 513, 568, 568],
        [741, 741, 741, 741],[730, 730, 974, 974],[561, 561, 946, 946],[890, 777, 463, 651],
        [456, 510, 532, 709],[717, 750, 691, 497],[476, 661, 503, 504],[520, 520,1541,1541]
    ],
    stufftodo: [
      'Gyeongbokgung',
      'Changdeokgung',
      'War Memorial of Korea',
      'Noryangjin Fish Market',
      'Namdaemun Market'
    ],
    backgoundImgCopyright: 'BBC.com'
  },
  {
    city: 'Sydney',
    country: 'Australia',
    currencyCode: 'AUD',
    clicks: 8,
    currentPrice: 836,
    duration: 8,
    ticketPrice: [
        [1201,1201,1201,1201],[ 899, 952, 664, 664],[ 789, 789, 789, 789],[1216,1216,1216,1216],
        [1216,1216,1216,1216],[1438,1438,1438,1438],[1242,1242,1242,1242],[1028,1117, 954, 954],
        [ 741, 769, 930, 932],[1179, 861,1004, 942],[ 988,1000, 691, 691],[ 665,1244,1582,1201]
    ],
    stufftodo: [
      'Sydney Opera House',
      'The Rocks',
      'Queen Victoria Building',
      'Barangaroo Reserve',
      'George Street'
    ],
    backgoundImgCopyright: 'parkregiscitycentre.com.au'
  },
  {
    city: 'Vancouver',
    country: 'Canada',
    currencyCode: 'CAD',
    clicks: 9,
    currentPrice: 836,
    duration: 8,
    ticketPrice: [
        [335, 335, 335, 335],[437, 437, 437, 437],[437, 437, 437, 437],[437, 437, 437, 437],
        [300, 300, 300, 300],[282, 282, 282, 282],[297, 297, 279, 279],[316, 298, 300, 300],
        [272, 308, 400, 405],[253, 197, 293, 252],[370, 287, 515, 515],[355, 355, 383, 383]
    ],
    stufftodo: [
      'Granville Island',
      'Gastown',
      'Chinatown',
      'Stanley Park',
      'Museum of Vancouver'
    ],
    backgoundImgCopyright: 'vancouver.ca'
  },
  {
    city: 'Reykjavik',
    country: 'Iceland',
    currencyCode: 'ISK',
    clicks: 10,
    currentPrice: 836,
    duration: 1,
    ticketPrice: [
        [ 510, 510, 510, 510],[ 510, 510, 510, 510],[ 510, 510, 510, 510],[ 510, 510, 510, 510],
        [ 510, 510, 510, 510],[ 510, 510, 510, 510],[ 633, 633, 813, 813],[ 593, 563, 693, 935],
        [ 443, 464, 374, 374],[ 746, 746, 884, 844],[1475,1475,1475,1475],[ 870, 870, 633, 644]
    ],
    stufftodo: [
      'Hallgrimskirkja Church',
      'Blue Lagoon',
      'Videy Island',
      'The Settlement Exhibition',
      'Whale Watching'
    ],
    backgoundImgCopyright: 'grayline.is'
  }
];

//-------------------------------------GLOBAL VARIABLES------------------------------
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
//weather API JS
var weatherCount = 1;
// This is our API key. Add your own API key between the ""
var weatherAPIKey = "798ea114a6654cf1a775a5fce9773800";
//2nd API key
// var weatherAPIKey = 'd248772fc33441a58bfa6336cdc83ae6';
var city = '';
var country = '';
var queryURL = '';
var newTable, newTr, newTd;
var queryURLResponse;
var resCount = 0;
var obj;



//------------------------------------------------------------------
//Display Price based on the current week
var curr = new Date(); // get current date
var currMonthIndex = curr.getMonth();
var dayOfMonth = curr.getDate() - curr.getDay(); // day of the month
var week;

if (dayOfMonth < 8) {
  week = 0;
} else if (dayOfMonth > 7 && dayOfMonth < 15) {
  week = 1;
} else if (dayOfMonth > 14 && dayOfMonth < 22) {
  week = 2;
} else if (dayOfMonth > 22) {
  week = 3;
}
//------------------------------------------------------------------------
//-----------------------------END GLOBAL VARIABLES--------------------------------

//----------------------------------FIREBASE----------------------------------
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
var dest0_clicks,
  dest1_clicks,
  dest2_clicks,
  dest3_clicks,
  dest4_clicks,
  dest5_clicks,
  dest6_clicks,
  dest7_clicks,
  dest8_clicks,
  dest9_clicks;
var travel_packages = database.ref().child('travel_packages');

travel_packages.on('value', function(snap) {
  dest0_clicks = snap.val().dest0.clicks;
  dest1_clicks = snap.val().dest1.clicks;
  dest2_clicks = snap.val().dest2.clicks;
  dest3_clicks = snap.val().dest3.clicks;
  dest4_clicks = snap.val().dest4.clicks;
  dest5_clicks = snap.val().dest5.clicks;
  dest6_clicks = snap.val().dest6.clicks;
  dest7_clicks = snap.val().dest7.clicks;
  dest8_clicks = snap.val().dest8.clicks;
  dest9_clicks = snap.val().dest9.clicks;
});

//on page loads, add number of clicks to the destinations object
travel_packages.once('value').then(function(snap) {
  var numberOfClicks = [];
  snap.forEach(function(child) {
    numberOfClicks.push(child.val().clicks);
  });

  for (var dest in destinations) {
    destinations[dest].clicks = numberOfClicks[dest];
  }
});
//----------------------------------END FIREBASE-----------------------------------------------

//-----------------------------FUNCTIONS THAT RUN ON PAGE LOAD------------------------------------
fillCityName();  //move to initalize page functions sections
displayPrice(); //move to initialize functions
travelPakage(); //move to initialize functions
//move to initialize page section
for (var i = 0; i < destinations.length; i++) {
  city = destinations[i].city;
  country = destinations[i].country; 
  getWeather(city, country);
}
background();

//-------------------------------------------------------------------------------------------
//-----------------------------------------------FUNCTIONS----------------------------------------
//function that updates the firebase database when user clicks on div
$('.box').on('click', function() {
  var numOfClicks = [
    dest0_clicks,
    dest1_clicks,
    dest2_clicks,
    dest3_clicks,
    dest4_clicks,
    dest5_clicks,
    dest6_clicks,
    dest7_clicks,
    dest8_clicks,
    dest9_clicks
  ];

  travelID = $(this).attr('id');
  var lastChar = travelID.substr(4);
  numOfClicks[lastChar]++;
  database.ref(`travel_packages/${travelID}`).set({
    clicks: numOfClicks[lastChar]
  });
});

//function to fill in city names and things to do 
function fillCityName() {
  var cityDiv, cityText, countryCode;
  for (var i in destinations) {
    cityDiv = '#dest' + i + ' .name';
    countryCode = destinations[i].currencyCode;
    cityText = destinations[i]['city'] + ', ' + destinations[i]['country'];
    $(cityDiv).text(cityText);
    thingsToDo(i);
  }
}

//function to put in currency info into destinations objects
function fillCurrencyInfo() {
  var currencyList = currencyResponse.responseJSON.currencies;
  console.log('currencyList:');
  console.log(currencyList);

  var rateList = rateResponse.responseJSON.quotes;
  console.log('rateList:');
  console.log(rateList);

  var currencyDiv, currencyText, countryCode;
  for (var i in destinations) {
    currencyDiv = '#dest' + i + ' .currency';
    countryCode = destinations[i].currencyCode;
    destinations[i].currencyName = currencyList[countryCode];
    destinations[i].exchangeRate = rateList['USD' + countryCode];
    currencyText =
      'US Dollar to ' +
      destinations[i].currencyName +
      ' : 1 to ' +
      destinations[i].exchangeRate;
    $(currencyDiv).text(currencyText);
  }
}

jQuery.when(currencyResponse, rateResponse).done(fillCurrencyInfo);

// function to sort divs with button press
$('#buttonDiv a').on('click', function() {
  var buttonID = $(this).attr('id');
  destinations.sort(function(a, b) {
    if (buttonID == 'sortPopular') {return b.clicks - a.clicks;}
    else if (buttonID == 'sortPrice') {return a.currentPrice - b.currentPrice;}
    else {return a.duration - b.duration;}
  });
  console.log('sortedDestinations');
  console.log(destinations);
  weatherCount = 1;
  fillCityName();
  fillCurrencyInfo();
  displayWeather();
  background();
});


//function that puts appropriate weather info into the divs and display on page
function displayWeather() {
  var content = '';
  for (var i = 0; i < destinations.length; i++) {
    for (var j = 0; j < 7; j++) {
      content = '';
      content +=
        '<h6>Avg Temp: ' +
        destinations[i].weather.data[j].temp +
        '&#176; C</h6>';
      content +=
        '<h6>Precipitation: ' + destinations[i].weather.data[j].pop + '%</h6>';
      content +=
        "<img src = 'https://www.weatherbit.io/static/img/icons/" +
        destinations[i].weather.data[j].weather.icon +
        ".png' alt='icon' width='30' height='30'>";
      content +=
        '<br><h6>' +
        destinations[i].weather.data[j].weather.description +
        '</h6>';
      $('#dest' + (weatherCount - 1) + ' .weather #day' + (j + 1)).html(
        content
      );
    }
    weatherCount++;
  }
}

//function that queries the weather API
function getWeather(a, b) {
  queryURL =
    'https://api.weatherbit.io/v2.0/forecast/daily?city=' +
    a +
    '&country=' +
    b +
    '&key=' +
    weatherAPIKey;
  console.log(queryURL);
  $.ajax({ url: queryURL }).then(function(response) {
    for (var i = 0; i < destinations.length; i++) {
      if (destinations[i].city == a) {
        destinations[i].weather = response;
        resCount++;
      }
    }
    if (resCount == 10) {
      displayWeather();
    }
  });
}


//function that adds ticket price to the city
function displayPrice() {
  var priceDiv;
  for (var i = 0; i < destinations.length; i++) {
    priceDiv = '#dest' + i + ' .price';
    currentPrice = destinations[i].ticketPrice[currMonthIndex][week];
    destinations[i].currentPrice = currentPrice;
    $(priceDiv).text(currentPrice);
  }
}


//function that Populate things to do in appropriate boxes
function thingsToDo(index) {
  $('#dest' + index + ' .places').html("");
  var newli, newul;
  newul = $('<ul>');
  for (var j = 0; j < destinations[index].stufftodo.length; j++) {
    newli = $('<li>').html(destinations[index].stufftodo[j]);
    newul.append(newli);
  }
  $('#dest' + index + ' .places').append(newul);
}

//function that refreshes background image in dest divs
function background(){
  for (var i in destinations){
    $("#dest"+i).css("background",'url("assets/'+destinations[i].city +'.jpg")');
  }
}

//Functions that display additional information when user hovers over destinations
$(document).on('mouseenter', '.box', function() {
  $(this)
    .children()
    .show();
});
$(document).on('mouseleave', '.box', function() {
  $(this)
    .children()
    .hide();
  });

//function that calls for Stripe integration
function travelPakage() {
  for (var i = 0; i < destinations.length; i++) {
    var priceDiv = $(`#dest${i} .purchase`);
    var city = destinations[i].city;
    var duration = destinations[i].duration;
    var price = destinations[i].currentPrice;
    priceDiv.attr({
      'data-city': city,
      'data-duration': duration,
      'data-price': price
    });
  }
}



var handler = StripeCheckout.configure({
  key: 'pk_test_PAkJqhf7aSDhFhy4yh7qJLsR',
  image: 'http://logonoid.com/images/yves-saint-laurent-logo.jpg',
  locale: 'auto',
  token: function(token) {
    // You can access the token ID with `token.id`.
    // Get the token ID to your server-side code for use.
  }
});


$('.purchase').on('click', function(e) {
  var city = $(this).attr('data-city');
  var duration = $(this).attr('data-duration');
  var price = $(this).attr('data-price');
  console.log(city);
  // Open Checkout with further options:
  handler.open({
    name: 'YSL',
    description: `${city} - ${duration} days`,
    amount: `${price}00`
  });
  e.preventDefault();
});

// Close Checkout on page navigation:
window.addEventListener('popstate', function() {
  handler.close();
});

//intercom
window.intercomSettings = {
    app_id: "qcf7lbf5"
};

(function() {
  var w = window;
  var ic = w.Intercom;
  if (typeof ic === 'function') {
    ic('reattach_activator');
    ic('update', intercomSettings);
  } else {
    var d = document;
    var i = function() {
      i.c(arguments);
    };
    i.q = [];
    i.c = function(args) {
      i.q.push(args);
    };
    w.Intercom = i;
    function l() {
      var s = d.createElement('script');
      s.type = 'text/javascript';
      s.async = true;
      s.src = 'https://widget.intercom.io/widget/qcf7lbf5';
      var x = d.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(s, x);
    }
    if (w.attachEvent) {
      w.attachEvent('onload', l);
    } else {
      w.addEventListener('load', l, false);
    }
  }
})();

