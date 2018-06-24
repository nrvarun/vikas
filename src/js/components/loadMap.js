document.addEventListener('DOMContentLoaded', () => {
  function initMap () {
    // Styles a map in night mode.
    var mluru = {lat: 12.780095, lng: 75.174238};
    console.log('Did the map load');
    var map = new google.maps.Map(document.querySelector('#vikasMap'), {
      center: mluru,
      zoom: 15,
      disableDefaultUI: true
    });
  }

  initMap();
});
