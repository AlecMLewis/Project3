async function initMap() {
    //  Request the needed libraries.
    const [{ Map }, { AdvancedMarkerElement }] = await Promise.all([
        google.maps.importLibrary('maps'),
        google.maps.importLibrary('marker'),
    ]);

    const mapElement = document.querySelector('gmp-map');

    const innerMap = mapElement.innerMap;

    innerMap.setOptions({
      mapTypeControl: false,
    });
    
    const MoG = new AdvancedMarkerElement({
      map: innerMap,
      position: { lat: 47.24555175466093, lng: -122.43401900264904 },
      title: 'Museum of Glass',
    });
    
    const DReef = new AdvancedMarkerElement({
      map: innerMap,
      position: { lat: 47.25739285397731, lng: -122.44187783747694 },
      title: "Devil's Reef",
    });
    
     const ToT = new AdvancedMarkerElement({
      map: innerMap,
      position: { lat: 47.22933137026923, lng: -122.42032177381394 },
      title: "Top of Tacoma",
    });
    
     const TPL = new AdvancedMarkerElement({
      map: innerMap,
      position: { lat: 47.20685819133857, lng: -122.48184392442506 },
      title: "Tacoma Public Library South Tacoma Branch",
    });
    
     const WHP = new AdvancedMarkerElement({
      map: innerMap,
      position: { lat: 47.200209588678284, lng: -122.46805894894034 },
      title: "Wapato Hills Park",
    });
};

initMap();

$('.bxslider').bxSlider({
    auto: true,
    autoControls: true,
    stopAutoOnClick: true,
    pager: true,
    slideWidth: 600
  });