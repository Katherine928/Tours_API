export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1Ijoia2F0aGVyaW5lODg4IiwiYSI6ImNrcHZ2bGdqbDE1NWcydXM0cTkydnJnY2wifQ.32XmerpjlN67yhfuZlQMZw';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/katherine888/ckpvw5ko93zc618qt7zef72d7',
  });
  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    // Create marker
    const el = document.createElement('div');
    el.className = 'marker';

    // Add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Extend map bounds to include current location
    bounds.extend(loc.coordinates);
  });
  map.fitBounds(bounds);
};
