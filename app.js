
var destination = {
    Bridgetown:{country: "Barbados", currencyCode: "BBD", flightInfo: "flight 1", stufftodo: "asldkfjsl"},
    Zurich: {country: "Switzerland", currencyCode: "CHF", flightInfo: "flight 1", stufftodo: "asldkfjsl"},
    Havana: {country: "Cuba", currencyCode: "CUP", flightInfo: "flight 1", stufftodo: "asldkfjsl"},
    Tokyo: {country: "Japan", currencyCode: "JPY", flightInfo: "flight 1", stufftodo: "asldkfjsl"},
    Johannesburg: {country: "South Africa", currencyCode: "ZAR", flightInfo: "flight 1", stufftodo: "asldkfjsl"},
    Manilla: {country: "The Philippines", currencyCode: "PHP", flightInfo: "flight 1", stufftodo: "asldkfjsl"},
    Seoul: {country: "South Korea", currencyCode: "KRW", flightInfo: "flight 1", stufftodo: "asldkfjsl"},
    Sydney: {country: "Australia", currencyCode: "AUD", flightInfo: "flight 1", stufftodo: "asldkfjsl"},
    Vancouver: {country: "Canada", currencyCode: "CAD", flightInfo: "flight 1", stufftodo: "asldkfjsl"},
    Reykjavik: {country: "Iceland", currencyCode: "ISK", flightInfo: "flight 1", stufftodo: "asldkfjsl"}
}

var weatherCount = 1;
//weather API JS
    // This is our API key. Add your own API key between the ""
    var weatherAPIKey = "798ea114a6654cf1a775a5fce9773800";
    var city = "";
    var country = "";
    for(var obj in destination)
    {
        //debugger;
        city = obj;
        country = destination[city]["country"];  //FIX
        //debugger;
        getWeather(city,country);
    }
    

function getWeather(city,country){
    // Here we are building the URL we need to query the database
    var queryURL = "https://api.weatherbit.io/v2.0/forecast/daily?city="+city+"&country="+country+"&key="+weatherAPIKey;
    //create a table
    
    var newTable = $("<table>");
    newTable.append($("<tr>").html("1st row"));
    $("#dest"+count+" .weather").append(newTable);
    weatherCount++;
    //debugger;
    



    // We then created an AJAX call
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {

      // Create CODE HERE to Log the queryURL
      console.log(queryURL);
      // Create CODE HERE to log the resulting object
      console.log(response);
      // Create CODE HERE to transfer content to HTML
      //debugger;
      //$("body").append($("<div>").html(JSON.stringify(response)));
      //debugger;

      //things needed
      //max temp: response.data[1].max_temp
      //min temp: response.data[1].min_temp
      //date: response.data[1].datetime OR response.data[1].valid_date
      
    });

}
    