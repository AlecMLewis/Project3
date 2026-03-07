var map;
function initMap() {
  map = new google.maps.map(document.getElementById("map"), {
    center: {lat: -34, lng: 150},
    zoom: 8
  });
}