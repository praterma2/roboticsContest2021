function mtrAFwd() {
  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", "https://api.particle.io/v1/devices/37001f000447363339343638/cartKommand?access_token=730d17457669375efa9789faa441ab1448beff1b", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("value=mtrAFwd");
}

function mtrAStp() {
  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", "https://api.particle.io/v1/devices/37001f000447363339343638/cartKommand?access_token=730d17457669375efa9789faa441ab1448beff1b", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("value=mtrAStp");
}

function mtrARev() {
  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", "https://api.particle.io/v1/devices/37001f000447363339343638/cartKommand?access_token=730d17457669375efa9789faa441ab1448beff1b", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("value=mtrARev");
}

function mtrBFwd() {
  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", "https://api.particle.io/v1/devices/37001f000447363339343638/cartKommand?access_token=730d17457669375efa9789faa441ab1448beff1b", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("value=mtrBFwd");
}

function mtrBStp() {
  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", "https://api.particle.io/v1/devices/37001f000447363339343638/cartKommand?access_token=730d17457669375efa9789faa441ab1448beff1b", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("value=mtrBStp");
}

function mtrBRev() {
  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", "https://api.particle.io/v1/devices/37001f000447363339343638/cartKommand?access_token=730d17457669375efa9789faa441ab1448beff1b", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("value=mtrBRev");
}

function goForwd() {
  mtrAFwd();
  mtrBFwd();
}

function allStop() {
  mtrAStp();
  mtrBStp();
}

function allRev() {
  mtrARev();
  mtrBRev();
}