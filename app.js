

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
  var dest0_clicks, dest1_clicks, dest2_clicks, dest3_clicks,
      dest4_clicks, dest5_clicks, dest6_clicks, dest7_clicks,
      dest8_clicks, dest9_clicks;
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


  //on page loads, add number of clicks to the destinationss object
  travel_packages.once('value').then(function(snap) {
    var numberOfClicks = [];
    snap.forEach(function(child) {
        numberOfClicks.push(child.val().clicks);
    });

    for (var dest in destinations) {
        destinations[dest].clicks = numberOfClicks[dest];
    }

    // destinations[0].clicks = numberOfClicks[0];
    // destinations[1].clicks = numberOfClicks[1];
    // destinations["Havana"].clicks = numberOfClicks[2];
    // destinations["Tokyo"].clicks = numberOfClicks[3];
    // destinations["Johannesburg"].clicks = numberOfClicks[4];
    // destinations["Manilla"].clicks = numberOfClicks[5];
    // destinations["Seoul"].clicks = numberOfClicks[6];
    // destinations["Sydney"].clicks = numberOfClicks[7];
    // destinations["Vancouver"].clicks = numberOfClicks[8];
    // destinations["Reykjavik"].clicks = numberOfClicks[9];
  });



  $('.box').on('click', function() {
      var numOfClicks = [dest0_clicks, dest1_clicks,dest2_clicks, dest3_clicks, dest4_clicks, dest5_clicks, dest6_clicks, dest7_clicks, dest8_clicks, dest9_clicks];

      travelID = $(this).attr('id');
      var lastChar = travelID.substr(4);
      numOfClicks[lastChar]++;
      database.ref(`travel_packages/${travelID}`).set({
        clicks: numOfClicks[lastChar]
      });
    });

    var destinations = [
        {city: "Bridgetown",
            country: "Barbados",
            currencyCode: "BBD",
            clicks: 11,
            flightInfo: {
                jul1: "870", jul2: "870", jul3: "870", jul4: "870",
                aug1: "661", aug2: "661", aug3: "638", aug4: "638",
                sep1: "605", sep2: "605", sep3: "605", sep4: "605",
                oct1: "529", oct2: "529", oct3: "567", oct4: "567",
                nov1: "601", nov2: "601", nov3: "623", nov4: "623",
                dec1: "801", dec2: "801", dec3: "801", dec4: "801",
                jan1: "616", jan2: "616", jan3: "463", jan4: "463",
                feb1: "634", feb2: "930", feb3: "643", feb4: "557",
                mar1: "548", mar2: "702", mar3: "471", mar4: "471",
                apr1: "850", apr2: "617", apr3: "532", apr4: "565",
                may1: "673", may2: "673", may3: "673", may4: "673",
                jun1: "702", jun2: "774", jun3:"1008", jun4:"1008",
            },
            stufftodo: "asldkfjsl"},
        {city: "Zurich",
            country: "Switzerland",
            currencyCode: "CHF",
            clicks: 2,
            flightInfo: {
                aug1: "820", aug2:"1264", aug3:"1150", aug4: "565",
                sep1:"1765", sep2:"1765", sep3:"1100", sep4:"1100",
                oct1: "976", oct2: "573", oct3: "756", oct4: "756",
                nov1: "994", nov2: "994", nov3: "715", nov4: "715",
                dec1: "953", dec2: "953", dec3: "953", dec4: "953",
                jan1: "858", jan2: "858", jan3: "648", jan4: "648",
                feb1: "663", feb2: "663", feb3: "663", feb4: "663",
                mar1: "663", mar2: "663", mar3: "663", mar4: "663",
                apr1: "974", apr2: "974", apr3: "974", apr4: "974",
                may1: "706", may2: "706", may3: "706", may4: "706",
                jun1:"1108", jun2:"1108", jun3:"1108", jun4:"1108",
                jul1:"1521", jul2:"1521", jul3:"1648", jul4:"1648",
            },
            stufftodo: "asldkfjsl"},
        {city: "Havana",
            country: "Cuba",
            currencyCode: "CUP",
            clicks: 3,
            flightInfo: {
                jul1: "542", jul2: "542", jul3: "542", jul4: "542",
                aug1: "378", aug2: "378", aug3: "378", aug4: "378",
                sep1: "369", sep2: "369", sep3: "369", sep4: "369",
                oct1: "391", oct2: "391", oct3: "391", oct4: "391",
                nov1: "398", nov2: "398", nov3: "398", nov4: "398",
                dec1: "478", dec2: "478", dec3: "478", dec4: "478",
                jan1: "406", jan2: "406", jan3: "406", jan4: "406",
                feb1: "391", feb2: "391", feb3: "391", feb4: "391",
                mar1: "369", mar2: "369", mar3: "369", mar4: "369",
                apr1: "437", apr2: "437", apr3: "437", apr4: "437",
                may1: "403", may2: "403", may3: "403", may4: "403",
                jun1: "481", jun2: "481", jun3: "481", jun4: "481",
            },
            stufftodo: "asldkfjsl"},
        {city: "Tokyo",
            country: "Japan",
            currencyCode: "JPY",
            clicks: 4,
            flightInfo: {
                jul1: "836", jul2: "723", jul3:"1000", jul4:"1000",
                aug1:"1138", aug2: "815", aug3: "696", aug4: "485",
                sep1: "404", sep2: "396", sep3: "497", sep4: "606",
                oct1: "790", oct2: "804", oct3: "595", oct4: "495",
                nov1: "508", nov2: "887", nov3: "571", nov4: "571",
                dec1: "624", dec2: "564", dec3: "579", dec4:"1124",
                jan1:"1049", jan2: "684", jan3: "754", jan4: "533",
                feb1: "754", feb2: "754", feb3: "754", feb4: "754",
                mar1: "533", mar2: "533", mar3: "893", mar4: "759",
                apr1: "579", apr2:"3692", apr3: "512", apr4: "512",
                may1: "487", may2: "527", may3: "646", may4: "646",
                jun1: "734", jun2:"1030", jun3: "666", jun4: "956",
            },
            stufftodo: "asldkfjsl"},
        {city: "Johannesburg",
            country: "South Africa",
            currencyCode: "ZAR",
            clicks: 5,
            flightInfo: {//copied from japan
                jul1: "836", jul2: "723", jul3:"1000", jul4:"1000",
                aug1:"1138", aug2: "815", aug3: "696", aug4: "485",
                sep1: "404", sep2: "396", sep3: "497", sep4: "606",
                oct1: "790", oct2: "804", oct3: "595", oct4: "495",
                nov1: "508", nov2: "887", nov3: "571", nov4: "571",
                dec1: "624", dec2: "564", dec3: "579", dec4:"1124",
                jan1:"1049", jan2: "684", jan3: "754", jan4: "533",
                feb1: "754", feb2: "754", feb3: "754", feb4: "754",
                mar1: "533", mar2: "533", mar3: "893", mar4: "759",
                apr1: "579", apr2:"3692", apr3: "512", apr4: "512",
                may1: "487", may2: "527", may3: "646", may4: "646",
                jun1: "734", jun2:"1030", jun3: "666", jun4: "956",
            },
            stufftodo: "asldkfjsl"},
        {city: "Manila",
            country: "Philippines",
            currencyCode: "PHP",
            clicks: 6,
            flightInfo: {//copied from japan
                jul1: "836", jul2: "723", jul3:"1000", jul4:"1000",
                aug1:"1138", aug2: "815", aug3: "696", aug4: "485",
                sep1: "404", sep2: "396", sep3: "497", sep4: "606",
                oct1: "790", oct2: "804", oct3: "595", oct4: "495",
                nov1: "508", nov2: "887", nov3: "571", nov4: "571",
                dec1: "624", dec2: "564", dec3: "579", dec4:"1124",
                jan1:"1049", jan2: "684", jan3: "754", jan4: "533",
                feb1: "754", feb2: "754", feb3: "754", feb4: "754",
                mar1: "533", mar2: "533", mar3: "893", mar4: "759",
                apr1: "579", apr2:"3692", apr3: "512", apr4: "512",
                may1: "487", may2: "527", may3: "646", may4: "646",
                jun1: "734", jun2:"1030", jun3: "666", jun4: "956",
            },
            stufftodo: "asldkfjsl"},
        {city: "Seoul",
            country: "South Korea",
            currencyCode: "KRW",
            clicks: 7,
            flightInfo: {//copied from japan
                jul1: "836", jul2: "723", jul3:"1000", jul4:"1000",
                aug1:"1138", aug2: "815", aug3: "696", aug4: "485",
                sep1: "404", sep2: "396", sep3: "497", sep4: "606",
                oct1: "790", oct2: "804", oct3: "595", oct4: "495",
                nov1: "508", nov2: "887", nov3: "571", nov4: "571",
                dec1: "624", dec2: "564", dec3: "579", dec4:"1124",
                jan1:"1049", jan2: "684", jan3: "754", jan4: "533",
                feb1: "754", feb2: "754", feb3: "754", feb4: "754",
                mar1: "533", mar2: "533", mar3: "893", mar4: "759",
                apr1: "579", apr2:"3692", apr3: "512", apr4: "512",
                may1: "487", may2: "527", may3: "646", may4: "646",
                jun1: "734", jun2:"1030", jun3: "666", jun4: "956",
            },
            stufftodo: "asldkfjsl"},
        {city: "Sydney",
            country: "Australia",
            currencyCode: "AUD",
            clicks: 8,
            flightInfo: {//copied from japan
                jul1: "836", jul2: "723", jul3:"1000", jul4:"1000",
                aug1:"1138", aug2: "815", aug3: "696", aug4: "485",
                sep1: "404", sep2: "396", sep3: "497", sep4: "606",
                oct1: "790", oct2: "804", oct3: "595", oct4: "495",
                nov1: "508", nov2: "887", nov3: "571", nov4: "571",
                dec1: "624", dec2: "564", dec3: "579", dec4:"1124",
                jan1:"1049", jan2: "684", jan3: "754", jan4: "533",
                feb1: "754", feb2: "754", feb3: "754", feb4: "754",
                mar1: "533", mar2: "533", mar3: "893", mar4: "759",
                apr1: "579", apr2:"3692", apr3: "512", apr4: "512",
                may1: "487", may2: "527", may3: "646", may4: "646",
                jun1: "734", jun2:"1030", jun3: "666", jun4: "956",
            },
            stufftodo: "asldkfjsl"},
        {city: "Vancouver",
            country: "Canada",
            currencyCode: "CAD",
            clicks: 9,
            flightInfo: {//copied from japan
                jul1: "836", jul2: "723", jul3:"1000", jul4:"1000",
                aug1:"1138", aug2: "815", aug3: "696", aug4: "485",
                sep1: "404", sep2: "396", sep3: "497", sep4: "606",
                oct1: "790", oct2: "804", oct3: "595", oct4: "495",
                nov1: "508", nov2: "887", nov3: "571", nov4: "571",
                dec1: "624", dec2: "564", dec3: "579", dec4:"1124",
                jan1:"1049", jan2: "684", jan3: "754", jan4: "533",
                feb1: "754", feb2: "754", feb3: "754", feb4: "754",
                mar1: "533", mar2: "533", mar3: "893", mar4: "759",
                apr1: "579", apr2:"3692", apr3: "512", apr4: "512",
                may1: "487", may2: "527", may3: "646", may4: "646",
                jun1: "734", jun2:"1030", jun3: "666", jun4: "956",
            },
            stufftodo: "asldkfjsl"},
        {city: "Reykjavik",
            country: "Iceland",
            currencyCode: "ISK",
            clicks: 10,
            flightInfo: {//copied from japan
                jul1: "836", jul2: "723", jul3:"1000", jul4:"1000",
                aug1:"1138", aug2: "815", aug3: "696", aug4: "485",
                sep1: "404", sep2: "396", sep3: "497", sep4: "606",
                oct1: "790", oct2: "804", oct3: "595", oct4: "495",
                nov1: "508", nov2: "887", nov3: "571", nov4: "571",
                dec1: "624", dec2: "564", dec3: "579", dec4:"1124",
                jan1:"1049", jan2: "684", jan3: "754", jan4: "533",
                feb1: "754", feb2: "754", feb3: "754", feb4: "754",
                mar1: "533", mar2: "533", mar3: "893", mar4: "759",
                apr1: "579", apr2:"3692", apr3: "512", apr4: "512",
                may1: "487", may2: "527", may3: "646", may4: "646",
                jun1: "734", jun2:"1030", jun3: "666", jun4: "956",
            },
            stufftodo: "asldkfjsl"}
        ]

        function fillCityName(){
            var cityDiv, cityText, countryCode;
            for (var i in destinations){
                cityDiv = "#dest"+i+" .name";
                countryCode = destinations[i].currencyCode;
                cityText = destinations[i]["city"]+", "+destinations[i]["country"];
                $(cityDiv).text(cityText);
            }
        }
        fillCityName();

        var currencyURL = "http://apilayer.net/api/list?access_key=a7f50bef8b2879efd43630712a46b389";
        var currencyResponse = $.ajax({
            url: currencyURL,
        });

        var rateURL = "http://www.apilayer.net/api/live?access_key=a7f50bef8b2879efd43630712a46b389";
        var rateResponse = $.ajax({
            url: rateURL,
        });

        function fillCurrencyInfo(){
            var currencyList = currencyResponse.responseJSON.currencies;
            console.log("currencyList:");
            console.log(currencyList);

            var rateList = rateResponse.responseJSON.quotes;
            console.log("rateList:");
            console.log(rateList);

            var currencyDiv, currencyText, countryCode;
            for (var i in destinations){
                currencyDiv = "#dest"+i+" .currency";
                countryCode = destinations[i].currencyCode;
                destinations[i].currencyName = currencyList[countryCode];
                destinations[i].exchangeRate = rateList["USD"+countryCode]
                currencyText = "US Dollar to "+destinations[i].currencyName+" : 1 to "+destinations[i].exchangeRate;
                $(currencyDiv).text(currencyText);
            }
        }

        jQuery.when(currencyResponse,rateResponse).done(fillCurrencyInfo);

            //code for populating currency data
            // var currencyList = currencyResponse.responseJSON.currencies;
            // console.log("currencyList:");
            // console.log(currencyList);

            // var rateList = rateResponse.responseJSON.quotes;
            // console.log("rateList:");
            // console.log(rateList);

            // var currencyDiv, currencyText, countryCode;
            // for (var i in destinations){
            //     currencyDiv = "#dest"+i+" .currency";
            //     countryCode = destinations[i].currencyCode;
            //     destinations[i].currencyName = currencyList[countryCode];
            //     destinations[i].exchangeRate = rateList["USD"+countryCode]
            //     currencyText = "US Dollar to "+destinations[i].currencyName+" : 1 to "+destinations[i].exchangeRate;
            //     $(currencyDiv).text(currencyText);
            // }
            //end of code for populating currency data




        $("#sortPopular").on("click",function(){
            var sortedDestinations = [];
            destinations.sort(function(a,b){
                if (a.clicks < b.clicks)
                  return -1;
                if (a.clicks > b.clicks)
                  return 1;
                return 0;
                });
            console.log("sortedDestinations");
            console.log(destinations);
            fillCityName();
            fillCurrencyInfo();
        })


//weather API JS
var weatherCount = 1;
// This is our API key. Add your own API key between the ""
//var weatherAPIKey = "798ea114a6654cf1a775a5fce9773800";
//2nd API key
var weatherAPIKey = "d248772fc33441a58bfa6336cdc83ae6";

var city = "";

var country = "";

var queryURL = "";
var newTable, newTr, newTd;
var queryURLResponse;
var resCount = 0;
var obj;
//debugger;

for(var i = 0; i<destinations.length; i++)
{
    //debugger;
    //obj = destinations[i];
    city = destinations[i].city;

    country =  destinations[i].country; //FIX
    //debugger;
    getWeather(city,country);
    //debugger;

}

function displayWeather()
{
    var content = "";
    //debugger;
    for(var i=0;i<destinations.length;i++)
    {
        for(var j = 0; j < 7; j++)
        {
            content = "";
            content += "<h6>Avg Temp: "+ destinations[i].weather.data[j].temp+"&#176; C</h6>";
            content += "<h6>Precipitation: "+ destinations[i].weather.data[j].pop +"%</h6>";
            content += "<img src = 'https://www.weatherbit.io/static/img/icons/"+ destinations[i].weather.data[j].weather.icon+".png' alt='icon' width='30' height='30'>";
            content += "<br><h6>"+ destinations[i].weather.data[j].weather.description +"</h6>";
            $("#dest"+(weatherCount - 1)+" .weather #day"+(j+1)).html(content);

        }

        weatherCount++;
    }
}

function getWeather(a,b)
{
    queryURL = "https://api.weatherbit.io/v2.0/forecast/daily?city="+a+"&country="+b+"&key="+weatherAPIKey;
    console.log(queryURL);
    $.ajax({url: queryURL}).then(function(response){
        //var content = "";
        //debugger;

        for(var i = 0; i < destinations.length; i++)
        {
            if(destinations[i].city == a)
            {
                destinations[i].weather = response;
                resCount++;
            }
        }
        if(resCount == 10)
        {
            displayWeather();
        }

        // destinations[indexOf(a)].weather = response;   //FIX
        // resCount++;
        // if(resCount == 10)
        // {
        //     displayWeather();
        // }
    })

}