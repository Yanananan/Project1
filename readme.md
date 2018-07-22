For this project, the YSL International group wanted to create a site that caters to spur-of-the-moment travellers.  We offer travel packages to ten international cities of varying price and duration.

The APIs used in this project are weather, currency exchange, stripe (for taking payment info), and intercom (for chatting with "customer service").

Hover over each package to reveal detailed information.  For information such as city/country, duration, price, and Places to See, we hardcoded this information into the destinations[] within app.js.  Please note that the price displayed is obtained by using current week and month and historical roundtrip plane ticket info pulled from https://www.faredetective.com/farehistory/.  This is to simulate an API.  For now, "travel package" is only including plane ticket price.  Ideally we'd like to get pricing for activities and attractions as well.

We included sorting functionality: by popularity, by price, as well as by duration of trip. Popularity is measured by the clicks received for each location.  The number of clicks are stored within firebase. Price and duration are stored within destinations[]. All three sorts can sort ascending and decending by clicking on the same button mult.  Sorting will reorder the destinations[] as well as firebase content.

Firebase content: https://ysl-traveling.firebaseio.com/.  We will provide access to firebase to Seif and Veronica.

We see alot of potential for this concept project.  Other ideas we would like to integrate includes:
-backend to take care of stripe payment and intercom
-accounts and logins
-social media capabilities, such as ability to share via fb or ig or email, ability to connect with others who purchased the same travel package as you
-gps capabilities
-ability to rate, comment, save for later, send alert when price changes
-a larger and more randomized selection of locations