
var destinations = {
    Bridgetown:{
        country: "Barbados", 
        currencyCode: "BBD", 
        flightInfo: "flight 1", 
        stufftodo: "asldkfjsl"},
    Zurich: {
        country: "Switzerland", 
        currencyCode: "CHF", 
        flightInfo: "flight 1", 
        stufftodo: "asldkfjsl"},
    Havana: {
        country: "Cuba", 
        currencyCode: "CUP", 
        flightInfo: "flight 1", 
        stufftodo: "asldkfjsl"},
    Tokyo: {
        country: "Japan", 
        currencyCode: "JPY", 
        flightInfo: "flight 1", 
        stufftodo: "asldkfjsl"},
    Johannesburg: {
        country: "South Africa", 
        currencyCode: "ZAR", 
        flightInfo: "flight 1", 
        stufftodo: "asldkfjsl"},
    Manilla: {
        country: "The Philippines", 
        currencyCode: "PHP", 
        flightInfo: "flight 1", 
        stufftodo: "asldkfjsl"},
    Seoul: {
        country: "South Korea", 
        currencyCode: "KRW", 
        flightInfo: "flight 1", 
        stufftodo: "asldkfjsl"},
    Sydney: {
        country: "Australia", 
        currencyCode: "AUD", 
        flightInfo: "flight 1", 
        stufftodo: "asldkfjsl"},
    Vancouver: {
        country: "Canada", 
        currencyCode: "CAD", 
        flightInfo: "flight 1", 
        stufftodo: "asldkfjsl"},
    Reykjavik: {
        country: "Iceland", 
        currencyCode: "ISK", 
        flightInfo: "flight 1", 
        stufftodo: "asldkfjsl"}
}

var cityDiv, cityText, countryCode, i=0;
for (var key in destinations){
    i++;
    cityDiv = "#dest"+i+" .name";
    countryCode = destinations[key].currencyCode;
    cityText = key+", "+destinations[key]["country"];
    $(cityDiv).text(cityText);
}

var currencyURL = "http://apilayer.net/api/list?access_key=a7f50bef8b2879efd43630712a46b389";
var currencyResponse = $.ajax({
    url: currencyURL,
});
    
var rateURL = "http://www.apilayer.net/api/live?access_key=a7f50bef8b2879efd43630712a46b389";
var rateResponse = $.ajax({
    url: rateURL,
});

jQuery.when(currencyResponse,rateResponse).done(function(){
    var currencyList = currencyResponse.responseJSON.currencies;
    console.log("currencyList:");
    console.log(currencyList);

    var rateList = rateResponse.responseJSON.quotes;
    console.log("rateList:");
    console.log(rateList);

    var currencyDiv, currencyText, countryCode, i=0;
    for (var key in destinations){
        i++;
        currencyDiv = "#dest"+i+" .currency";
        countryCode = destinations[key].currencyCode;
        currencyText = "US Dollar to "+currencyList[countryCode]+" : 1 to "+rateList["USD"+countryCode];
        $(currencyDiv).text(currencyText);
    }

});
