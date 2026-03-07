function initMap() {
  
    const markers = {
      {
        locationName: 'Museum of Glass',
        lat: 47.245544471307014,
        lng: -122.43401900264904,
        address: '1801 Dock St, Tacoma, WA 98402'
      }
    }
    
    const mapOptions = {
      center: lat: 47.245544471307014, lng: -122.43401900264904,
      zoom: 10
      disableDefaultUI: true
    }
    
    const map = new google.maps.Map(document.getElementByID('map'), mapOptions);
    });
    mapElement.append(marker);
}
initMap();