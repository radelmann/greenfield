angular.module('greenfield.main', [])
  .controller('mainController', function($scope, main) {

    //KEY
    L.mapbox.accessToken = MAP_KEY;

    //instantiate new map
    var map = L.mapbox.map('map', 'mapbox.streets', {
      scrollWheelZoom: true
    }).setView([38.8929, -77.0252], 14);

    //render point on map
    //hard-coded json data
    var geojson = [{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[-77.018387,38.974193]},"properties":{"title":"Takoma Station Tavern"}}]},{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[-76.961158,38.935775]},"properties":{"title":"Urban Eats Arts & Music Cafe"}}]},{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[-77.0844444,38.8902778]},"properties":{"title":"Sehrkraft Brewery"}}]},{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[-77.0552,38.89606]},"properties":{"title":"Kennedy Center Opera House"}}]},{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[-77.0947511,38.9870889]},"properties":{"title":"Bethesda Blues & Jazz Supper Club"}}]},{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[-77.0366667,38.895]},"properties":{"title":"The Loft at F"}}]},{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[-77.023183,38.91789]},"properties":{"title":"9:30 Club"}}]},{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[-77.0674133,38.9145851]},"properties":{"title":"Bistrot Lepic & Wine Bar"}}]},{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[-77.020112,38.900734]},"properties":{"title":"Sixth & I Historic Synagogue"}}]},{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[-77.021445,38.916212]},"properties":{"title":"Flash"}}]},{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[-77.0366667,38.895]},"properties":{"title":"DC9"}}]},{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[-77.062754,38.902594]},"properties":{"title":"Gypsy Sally's"}}]},{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[-77.068103,38.904145]},"properties":{"title":"Vinyl Lounge at Gypsy Sally's"}}]},{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[-77.092245,38.980782]},"properties":{"title":"Villain & Saint"}}]},{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[-77.022074,38.895025]},"properties":{"title":"Hill Country DC"}}]},{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[-77.042144,38.922042]},"properties":{"title":"MADAMS ORGAN"}}]},{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[-77.032921,38.902175]},"properties":{"title":"Soundcheck"}}]},{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[-77.0472222,38.8047222]},"properties":{"title":"Blackwall Hitch "}}]},{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[-77.094026,38.9872695]},"properties":{"title":"Betheda Blues & Jazz"}}]},{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[-77.042322,38.906867]},"properties":{"title":"STK DC"}}]},{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[-77.027992,38.929889]},"properties":{"title":"The Wonderland Ballroom w/ PARTY LIKE IT'S..."}}]},{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[-77.0552,38.89606]},"properties":{"title":"Kennedy Center Opera House"}}]},{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[-76.98656,38.9]},"properties":{"title":"Rock N Roll Hotel"}}]},{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[-77.023183,38.91789]},"properties":{"title":"9:30 Club"}}]},{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[-77.0237417,38.9242966]},"properties":{"title":"ECAC"}}]},{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[-77.032843,38.897089]},"properties":{"title":"POV"}}]},{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[-77.068103,38.904145]},"properties":{"title":"Vinyl Lounge at Gypsy Sally's"}}]},{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[-76.986649,38.900007]},"properties":{"title":"Rock & Roll Hotel"}}]},{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[-77.0947511,38.9870889]},"properties":{"title":"BETHESDA BLUES & JAZZ"}}]},{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[-77.024685,38.917047]},"properties":{"title":"Eyes Of The Nile (Iron Maiden tribute)-Velvet Lounge"}}]},{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[-77.062545,38.904689]},"properties":{"title":"Blues Alley 8:00PM"}}]},{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[-77.021001,38.915552]},"properties":{"title":"Howard Theatre"}}]},{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[-77.021445,38.916212]},"properties":{"title":"Flash"}}]},{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[-77.092245,38.980782]},"properties":{"title":"Villain & Saint"}}]},{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[-77.062754,38.902594]},"properties":{"title":"Gypsy Sally's"}}]},{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[-77.0366667,38.895]},"properties":{"title":"Hill Country BBQ DC"}}]},{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[-77.042168,38.921613]},"properties":{"title":"Rumba Cafe"}}]},{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[-77.0419998,38.9216156]},"properties":{"title":"Rumba Cafe: Trifilio Tango Trio"}}]},{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[-77.062754,38.902594]},"properties":{"title":"Gypsy Sally's"}}]},{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[-77.0500107,38.9030495]},"properties":{"title":"Lotus lounge"}}]},{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[-77.0844444,38.8902778]},"properties":{"title":"William Jeffreys Tavern"}}]},{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[-77.062545,38.904689]},"properties":{"title":"Blues Alley 10:00PM"}}]},{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[-77.032921,38.902175]},"properties":{"title":"Soundcheck"}}]}]

    //generates map layer
    var venueLayer = L.mapbox.featureLayer().addTo(map);
    venueLayer.setGeoJSON(geojson);

    $scope.message = '';

    main.get().then(function(data) {
      console.log(data.statusText);
      $scope.message = data.statusText;
    });

  });