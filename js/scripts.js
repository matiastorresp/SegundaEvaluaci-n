function iniciarMap(){
    var coord = {lat:-33.447170227774095 ,lng: -70.6576868888345};
    var map = new google.maps.Map(document.getElementById('mapaDuoc'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}
