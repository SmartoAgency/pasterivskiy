// map

window.initMap = function() {
  const mapElement = document.getElementById('map');
  if (!mapElement) {
    console.error('Map element not found');
    return;
  }

  const myLatLng = {
    lat: 49.42021665848833,
    lng: 32.05678587802557,
  };

  const map = new google.maps.Map(mapElement, {
    zoom: 16,
    center: myLatLng,
    fullscreenControl: false,
    zoomControl: false,
    streetViewControl: false,
    mapTypeControl: false,
  });

  new google.maps.Marker({
    position: myLatLng,
    map,
    title: 'Pasterivskyy',
    icon: 'https://pasterivsky.com.ua/wp-content/uploads/2023/10/logopin.png',
  });
};

document.addEventListener('DOMContentLoaded', function() {
  if (typeof google !== 'undefined' && google.maps && document.getElementById('map')) {
    initMap();
  }
});
