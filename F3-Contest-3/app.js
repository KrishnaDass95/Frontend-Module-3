const getLocationButton = document.querySelector('#get-location');
const mapDiv = document.querySelector('#map');
const removeLocationButton = document.querySelector('#remove-location');

function embedGoogleMaps(lat, long){
    mapDiv.innerHTML = `<iframe src="https://maps.google.com/maps?q=${lat}, 
    ${long}&output=embed" width="360" height="270" frameborder="0" 
    style="border:0"></iframe>`
    removeLocationButton.style.display = 'block';
    
}

function setDataToLocalStorage(latitude, longitude){
    localStorage.setItem('lat', latitude);
    localStorage.setItem('long', longitude);
}

function showPosition(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log('latitude', latitude);
    console.log('longitude', longitude);

    // lets set it to local storage
    setDataToLocalStorage(latitude, longitude);
    embedGoogleMaps(latitude, longitude);
    getLocationButton.disabled = true;
    removeLocationButton.disabled = false;

}

function getLocation(){
    if(navigator.geolocation){ // navigator is a JS object which gives information about the users browser and more about different parameters
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
        console.log('location blocked');
        mapDiv.innerHTML = "<h1>HTML location API not supported on this browser</h1>"
    }
}


getLocationButton.addEventListener('click', getLocation);
removeLocationButton.addEventListener('click', ()=>{
    embedGoogleMaps(0, 0);
    setDataToLocalStorage('', '');
    getLocationButton.disabled = false;
    removeLocationButton.disabled = true;
})
