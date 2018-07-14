
var destination = {
    Bridgetown:{country: "Barbados", currencyCode: "BBD", flightInfo: "flight 1", stufftodo: "asldkfjsl"},
    Zurich: {country: "Switzerland", currencyCode: "CHF", flightInfo: "flight 1", stufftodo: "asldkfjsl"},
    Havana: {country: "Cuba", currencyCode: "CUP", flightInfo: "flight 1", stufftodo: "asldkfjsl"},
    Tokyo: {country: "Japan", currencyCode: "JPY", flightInfo: "flight 1", stufftodo: "asldkfjsl"},
    Johannesburg: {country: "South Africa", currencyCode: "ZAR", flightInfo: "flight 1", stufftodo: "asldkfjsl"},
    Manila: {country: "Philippines", currencyCode: "PHP", flightInfo: "flight 1", stufftodo: "asldkfjsl"},
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
    var queryURL = "";
    var newTable, newTr, newTd;
    var queryURLResponse;
    for(var obj in destination)
    {
        //debugger;
        city = obj;
        country = destination[city]["country"];  //FIX
        //debugger;
        //getWeather(city,country);


        queryURL = "https://api.weatherbit.io/v2.0/forecast/daily?city="+city+"&country="+country+"&key="+weatherAPIKey;
        queryURLResponse = $.ajax({url: queryURL});
        console.log(queryURL);
        //debugger;
        
       
    
    
        // We then created an AJAX call
        jQuery.when(queryURLResponse).done(function(response) {
    
          console.log(response);
            
          //create a table
           
            var content = "";
          for(var i = 0; i < 7; i++)
          {
            content = "";
          console.log(response.data[i].valid_date)
        //   console.log(response.data[i].max_temp);
        //   console.log(response.data[i].min_temp);
        //   console.log(response.data[i].temp);
        //   console.log(response.data[i].pop);
        //   console.log(response.data[i].weather.description);
        //   console.log(response.data[i].weather.icon);
        //   console.log(response.data[i].weather.code);
        //   console.log("https://www.weatherbit.io/static/img/icons/"+response.data[i].weather.icon+".png");
          //debugger;
            
          // content += "<h6>Max Temp: "+ response.data[i].max_temp+"&#176; C</h6>";
          // content += "<h6>Min Temp: "+ response.data[i].min_temp+"&#176; C</h6>";
           content += "<h6>Avg Temp: "+ response.data[i].temp+"&#176; C</h6>";
           content += "<h6>Precipitation: "+ response.data[i].pop +"%</h6>";
           content += "<img src = 'https://www.weatherbit.io/static/img/icons/"+ response.data[i].weather.icon+".png' alt='icon' width='30' height='30'>";
           content += "<br><h6>"+ response.data[i].weather.description +"</h6>";
          $("#dest"+weatherCount+" .weather #day"+(i+1)).html(content);
          console.log(weatherCount);
        // debugger;
        //   newTable = $("<table>");
        //   newTr = $("<tr>");
                
               
        //         newTd = $("<td>").html("weather content");
        //         newTr.append(newTd);
        //         newTable.append(newTr);
        //         $("#dest"+weatherCount+" .weather").append(newTable);
          //       weatherCount++;
          }
        
          weatherCount++;
        });



        //weatherCount++;
    }
    

function getWeather(city,country){
    // Here we are building the URL we need to query the database
    queryURL = "https://api.weatherbit.io/v2.0/forecast/daily?city="+city+"&country="+country+"&key="+weatherAPIKey;
    

    //debugger;
    
   


    // We then created an AJAX call
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {

      //console.log(response);
        
      //create a table
       

      for(var i = 0; i < 7; i++)
      {
      console.log(response.data[i].valid_date)
      console.log(response.data[i].max_temp);
      console.log(response.data[i].min_temp);
      console.log(response.data[i].temp);
      console.log(response.data[i].pop);
      console.log(response.data[i].weather.description);
      console.log(response.data[i].weather.icon);
      console.log(response.data[i].weather.code);
      console.log("https://www.weatherbit.io/static/img/icons/"+response.data[i].weather.icon+".png");
      //debugger;

      $("#dest"+weatherCount+" .weather #day"+(i+1)).html(response.data[i].valid_date);
      debugger;
    //   newTable = $("<table>");
    //   newTr = $("<tr>");
            
           
    //         newTd = $("<td>").html("weather content");
    //         newTr.append(newTd);
    //         newTable.append(newTr);
    //         $("#dest"+weatherCount+" .weather").append(newTable);
      //       weatherCount++;
      }
    
      
    });

}
    