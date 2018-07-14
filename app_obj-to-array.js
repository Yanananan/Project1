var destination = [
    {Bridgetown:
        {country: "Barbados", 
        currencyCode: "BBD", 
        flightInfo: "flight 1", 
        stufftodo: "asldkfjsl"}
    },
    {Zurich: 
        {country: "Switzerland", 
        currencyCode: "CHF", 
        flightInfo: "flight 1", 
        stufftodo: "asldkfjsl"}
    },
    {Havana: 
        {country: "Cuba", 
        currencyCode: "CUP", 
        flightInfo: "flight 1", 
        stufftodo: "asldkfjsl"}
    },
    {Tokyo: 
        {country: "Japan", 
        currencyCode: "JPY", 
        flightInfo: "flight 1", 
        stufftodo: "asldkfjsl"}
    },
    {Johannesburg: 
        {country: "South Africa", 
        currencyCode: "ZAR", 
        flightInfo: "flight 1", 
        stufftodo: "asldkfjsl"}
    },
    {Manila: 
        {country: "Philippines", 
        currencyCode: "PHP", 
        flightInfo: "flight 1", 
        stufftodo: "asldkfjsl"}
    },
    {Seoul: 
        {country: "South Korea", 
        currencyCode: "KRW", 
        flightInfo: "flight 1", 
        stufftodo: "asldkfjsl"}
    },
    {Sydney: 
        {country: "Australia", 
        currencyCode: "AUD", 
        flightInfo: "flight 1", 
        stufftodo: "asldkfjsl"}
    },
    {Vancouver: 
        {country: "Canada", 
        currencyCode: "CAD", 
        flightInfo: "flight 1", 
        stufftodo: "asldkfjsl"}
    },
    {Reykjavik: 
        {country: "Iceland", 
        currencyCode: "ISK", 
        flightInfo: "flight 1", 
        stufftodo: "asldkfjsl"}
    }
]


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

for(var i = 0; i<destination.length; i++)
{
    //debugger;
    obj = destination[i];
    city = Object.keys(destination[i]).join();
    
    country = obj[city].country; //FIX
    //debugger;
    getWeather(city,country);
    //debugger;
    
}

function displayWeather()
{
    var content = "";
    //debugger;
    for(var i=0;i<destination.length;i++)
    {
        for(var j = 0; j < 7; j++)
        {
            content = "";
            content += "<h6>Avg Temp: "+ destination[i].weather.data[j].temp+"&#176; C</h6>";
            content += "<h6>Precipitation: "+ destination[i].weather.data[j].pop +"%</h6>";
            content += "<img src = 'https://www.weatherbit.io/static/img/icons/"+ destination[i].weather.data[j].weather.icon+".png' alt='icon' width='30' height='30'>";
            content += "<br><h6>"+ destination[i].weather.data[j].weather.description +"</h6>";
            $("#dest"+weatherCount+" .weather #day"+(j+1)).html(content);
            
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

        for(var i = 0; i < destination.length; i++)
        {
            if(Object.keys(destination[i]).join() == a)
            {
                destination[i].weather = response;
                resCount++;
            }
        }
        if(resCount == 10)
        {
            displayWeather();
        }

        // destination[indexOf(a)].weather = response;   //FIX
        // resCount++;
        // if(resCount == 10)
        // {
        //     displayWeather();
        // }
    })

}

