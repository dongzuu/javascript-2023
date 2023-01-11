function onGeoOk(position) {
  const lan = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log("You live in", lan, lng);
}
function onGeoError() {
  alert("sorry I can't find your loc");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
