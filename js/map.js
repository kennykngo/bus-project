function initMap() {
  var directionsService = new google.maps.DirectionsService();
  var directionsRenderer = new google.maps.DirectionsRenderer();

  var haight = new google.maps.LatLng(37.7699298, -122.4469157);
  var oceanBeach = new google.maps.LatLng(
    37.7683909618184,
    -122.51089453697205
  );
  var mapOptions = {
    zoom: 14,
    center: haight,
  };
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);
  directionsRenderer.setMap(map);
}

function calcRoute() {
  var selectedMode = TRANSIT;
  // var selectedMode = document.getElementById("mode").value;
  var request = {
    origin: haight,
    destination: oceanBeach,
    // Note that JavaScript allows us to access the constant
    // using square brackets and a string value as its
    // "property."
    travelMode: google.maps.TravelMode[selectedMode],
  };
  directionsService.route(request, function (response, status) {
    if (status == "OK") {
      directionsRenderer.setDirections(response);
    }
  });
}

// function initMap() {
//   // Map options
//   var options = {
//     zoom: 8,
//     center: { lat: 42.3601, lng: -71.0589 },
//   };

//   // New map
//   var map = new google.maps.Map(document.getElementById("map"), options);

//   // Listen for click on map
//   google.maps.event.addListener(map, "click", function (event) {
//     // Add marker
//     addMarker({ coords: event.latLng });
//   });

//   // Array of markers
//   var markers = [
//     {
//       coords: { lat: 42.4668, lng: -70.9495 },
//       iconImage:
//         "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
//       content: "<h1>Lynn MA</h1>",
//     },
//     {
//       coords: { lat: 42.8584, lng: -70.93 },
//       content: "<h1>Amesbury MA</h1>",
//     },
//     {
//       coords: { lat: 42.7762, lng: -71.0773 },
//     },
//   ];

//   // Loop through markers
//   for (var i = 0; i < markers.length; i++) {
//     // Add marker
//     addMarker(markers[i]);
//   }

//   // Add Marker Function
//   function addMarker(props) {
//     var marker = new google.maps.Marker({
//       position: props.coords,
//       map: map,
//       //icon:props.iconImage
//     });

//     // Check for customicon
//     if (props.iconImage) {
//       // Set icon image
//       marker.setIcon(props.iconImage);
//     }

//     // Check content
//     if (props.content) {
//       var infoWindow = new google.maps.InfoWindow({
//         content: props.content,
//       });

//       marker.addListener("click", function () {
//         infoWindow.open(map, marker);
//       });
//     }
//   }
// }

//     zoom: 13, //   var option = { // function initMap() {
//     center: { lat: 37.7749, lng: -122.4194 },
//   };
//   const map = new google.maps.Map(document.getElementById("map"), option);
//   const transitLayer = new google.maps.TransitLayer();
//   transitLayer.setMap(map);
// }

// function initMap() {
//   var options = {
//     //   // map options //  // // map
//     zoom: 15,
//     center: { lat: 37.7749, lng: -122.4194 },
//   };

//   var directionsService = new google.maps.DirectionsService();
//   var directionsDisplay = new google.maps.DirectionsRenderer();

//   var map = new google.maps.Map(document.getElementById("map"), options);

//   directionsDisplay.setMap(map);

//   var onChangeHandler = function () {
//     calculateAndDisplayRoute(directionsService, directionsDisplay);
//   };

//   document
//     .getElementById("operators")
//     .addEventListener("change", onChangeHandler);
//   // document.getElementById("end").addEventListener("change", onChangeHandler);
// }

// function calculateAndDisplayRoute(directionsService, directionsDisplay) {
//   directionsService.route(
//     {
//       // origin: { lat: 42.4668, lng: -70.9495 },
//       // destination: { lat: 42.7762, lng: -71.0773 },
//       // travelMode: "TRANSIT",

//       origin: "Chicago, IL",
//       destination: "Los Angeles, CA",
//       waypoints: [
//         {
//           location: "Joplin, MO",
//           stopover: false,
//         },
//         {
//           location: "Oklahoma City, OK",
//           stopover: true,
//         },
//       ],
//       // provideRouteAlternatives: false,
//       travelMode: "TRANSIT",
//       drivingOptions: {
//         departureTime: new Date(/* now, or future date */),
//         // trafficModel: "pessimistic",
//       },
//       // unitSystem: google.maps.UnitSystem.IMPERIAL,
//     },
//     function (response, status) {
//       if (status === "OK") {
//         directionsDisplay.setDirections(response);
//       } else {
//         window.alert("Directions request failed due to " + status);
//       }
//     }
//   );
// }

// // Listen for click on map
// google.maps.event.addListener(map, "click", (event) => {
//   // Add marker
//   addMarker({ coords: event.latLng });
// });

// // Array of Markers
// var markers = [
//   {
//     coords: { lat: 37.7642708, lng: -122.461502 },
//     iconImg:
//       "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
//     content: "<h1>Thing</h1>",
//   },
//   {
//     coords: { lat: 37.7644728, lng: -122.462502 },
//     content: "<h1>Thing2</h1>",
//   },
// ];

// for (var i = 0; i < markers.length; i++) {
//   addMarker(markers[i]);
// }

// // add marker function
// function addMarker(props) {
//   // map marker (marks where current bus is)
//   var marker = new google.maps.Marker({
//     position: props.coords,
//     map: map,
//     // icon: props.iconImg,
//   });

//   // check for customIcon
//   if (props.iconImg) {
//     // Set iconImg
//     marker.setIcon(props.iconImg);
//   }

//   if (props.content) {
//     var infoWindow = new google.maps.InfoWindow({
//       content: props.content,
//     });

//     // opens info window if clicked
//     marker.addListener("click", () => {
//       infoWindow.open(map, marker);
//     });
//   }
// }

//   var map = new google.maps.Map(document.getElementById("map"), options);

//   let autocomplete = new google.maps.places.Autocomplete(DOM_NODE);

//   autocomplete.bindTo("bounds", map);

//   autocomplete.addListener("place_changed", () => {
//     const place = autocomplete.getPlace();
//     // do something with place
//   });

//   const calculateAndRenderDirections = (origin, destination) => {
//     let directionsService = new google.maps.DirectionsService(),
//       directionsDisplay = new google.maps.DirectionsDisplay(),
//       request = {
//         origin: origin,
//         destination: destination,
//         travelMode: "TRANSIT",
//       };
//     directionsDisplay.setMap(map);
//     directionsService.route(request, (res, status) => {
//       if (status == "OK") {
//         directionsDisplay.setDirections(res);
//       }
//     });
//   };
// }