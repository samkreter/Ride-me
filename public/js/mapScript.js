var map;
var geocoder;

//initialize page
function initialize() {
  var myLatlng = new google.maps.LatLng(38.945759,-92.335303);
  var mapOptions = {
    center: myLatlng,
    zoom: 11
  };
  //Initializes 
  map = new google.maps.Map(document.getElementById('map-canvas'),
    mapOptions);
  geocoder = new google.maps.Geocoder();


  //Will be array of users' addresses to fill map with
  var locations = [
    ('5003 Commercial Drive Columbia, mo'),
    ('7600 Twin lake drive jefferson city, mo')
  ];
  var users=[];

  //Will populate the map with all users at certain time
  for(var i=0; i<2; i++)
  {
    users.push(convertToGeocoder(locations[i]));
  }
}
google.maps.event.addDomListener(window, 'load', initialize);



function convertToGeocoder(address)
{
//var geocoder;
  geocoder.geocode({'address': address}, function(results, status){
  if(status == google.maps.GeocoderStatus.OK)
  {
    var marker = new google.maps.Marker({
      map:map,
      position: results[0].geometry.location
    });
    google.maps.event.addListener(marker, 'click', function(){
      infoWindow.open(map, marker);
      });
  }
  else
  {
    alert('Geocode was not sucessful: ' + status);
  }

  //return marker;
});