async function initMap() {
    //  Request the needed libraries.
    const [{ Map }, { AdvancedMarkerElement }] = await Promise.all([
        google.maps.importLibrary('maps'),
        google.maps.importLibrary('marker'),
    ]);

    const mapElement = document.querySelector('gmp-map');

    const myMap = mapElement.innerMap;

    myMap.setOptions({
      mapTypeControl: false,
    });
    
    const MoG = new AdvancedMarkerElement({
      map: myMap,
      position: { lat: 47.24555175466093, lng: -122.43401900264904 },
      title: 'Museum of Glass',
    });
    
    const DReef = new AdvancedMarkerElement({
      map: myMap,
      position: { lat: 47.25739285397731, lng: -122.44187783747694 },
      title: "Devil's Reef",
    });
    
     const ToT = new AdvancedMarkerElement({
      map: myMap,
      position: { lat: 47.22933137026923, lng: -122.42032177381394 },
      title: "Top of Tacoma",
    });
    
     const TPL = new AdvancedMarkerElement({
      map: myMap,
      position: { lat: 47.20685819133857, lng: -122.48184392442506 },
      title: "Tacoma Public Library South Tacoma Branch",
    });
    
     const WHP = new AdvancedMarkerElement({
      map: myMap,
      position: { lat: 47.200209588678284, lng: -122.46805894894034 },
      title: "Wapato Hills Park",
    });
    
    /*
    const markers = {
      {
        map: innerMap
        locationName: 'Museum of Glass',
        lat: 47.24555175466093,
        lng: -122.43401900264904,
        address: '1801 Dock St, Tacoma, WA 98402',
      },
      {
        locationName: "Devil's Reef",
        lat: 47.25739285397731,
        lng: -122.44187783747694,
        address: '706 Court C, Tacoma, WA 98402',
      },
      {
        locationName: 'Top of Tacoma',
        lat: 47.22933137026923,
        lng: -122.42032177381394,
        address: '3529 McKinley Ave, Tacoma, WA 98404',
      },
      {
        locationName: 'Tacoma Public Library South Tacoma Branch',
        lat: 47.20685819133857,
        lng: -122.48184392442506,
        address: '3411 S 56th St, Tacoma, WA 98409',
      },
      {
        locationName: 'Wapato Hills Park',
        lat: 47.200209588678284,
        lng: -122.46805894894034,
        address: '6231 S Wapato St, Tacoma, WA 98409',
      },
    }
    */
}
initMap();