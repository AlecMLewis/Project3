const mapElement = document.querySelector('gmp-map');
async function initMap() {
    const { Map } = (await google.maps.importLibrary('maps'));
    const { AdvancedMarkerElement } = (await google.maps.importLibrary('marker'));
    const marker = new AdvancedMarkerElement({
        position: { lat: 47.24582, lng: -122.43405},
        title: {"Tacoma Glassblowing Studio"},
    });
    mapElement.append(marker);
}
initMap();