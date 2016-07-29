var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.518, lng: -90.672},
    zoom: 2,
      mapTypeId: google.maps.MapTypeId.SATELLITE
    });
    map.setTilt(45);
  }
