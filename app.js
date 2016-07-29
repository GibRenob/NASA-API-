//console.info('app.js" is loaded!')
// create a module
angular.module('Meteorite', [])
//create a controller
  .controller('meteoriteCtrl', meteoriteCtrl)

// create a factory
 .factory('MeteoriteFactory', MeteoriteFactory)

meteoriteCtrl.$inject =  ['MeteoriteFactory']

MeteoriteFactory.$inject =['$http']
// the fucntion, injection and variable allowed me to call the api in the factory. Storing the api info. //
function MeteoriteFactory($http) {
  var mFact = {}
  mFact.apiCall = function () {
      return $http.get('https://data.nasa.gov/resource/gh4g-9sfh.json')
  }

  return mFact
 }

// the functions below connect the list / ng click icons to the API //
// Year Range Button //
function meteoriteCtrl(MeteoriteFactory) {
var mCtrl = this;
// mCtrl.test = 'Are you working?';
mCtrl.yearRange = function () {
  var Start = (mCtrl.year.split('-')[0])
  var Stop = (mCtrl.year.split('-')[1])
  MeteoriteFactory.apiCall ()
  .then (function (response) {
    for( var i = 0; i < response.data.length; i++) {
      if (response.data[i].year.substring(0,4) >Start && response.data[i].year.substring(0,4) <Stop ) {
        var targetLat = parseInt(response.data[i].reclat)
        var targetLong = parseInt(response.data[i].reclong)
        function Marker() {
             var myLatLng = {lat:targetLat, lng:targetLong};
             var marker = new google.maps.Marker({
               position: myLatLng,
               map: map,
               icon: 'http://icons.iconarchive.com/icons/everaldo/crystal-clear/24/App-asteroids-icon.png'


             });
        }
        Marker()
      }
    }
  })
}

// // Location Landed Button //
// mCtrl.locLanded = function () {
//   var Longitude
//   var Latitude
//   Longitude = (mCtrl.locLanded)
//   // console.log ('Location Landed')
//   MeteoriteFactory.apiCall ()
// .then (function (response) {
//   // console.log(response.data)
//   for( var i = 0; i < response.locLanded; i++) {
//     // console.log('latlngString', response.data[i].locLanded)
//     if (response.data[i].locLanded === mCtrl.var) {
//       // console.log('latlngString', response.data[i].locLanded)
// }
// }
// })
// }
// Name Button //
// mCtrl.metName = function () {
//   var Start = (mCtrl.name.[0])
//   // console.log ('Meteorite Name')
//   MeteoriteFactory.apiCall ()
//   .then (function (response) {
//     // console.log(response.data)
//     for( var i = 0; i < response.data.name; i++) {
//   // console.log('Name', response.data[i].name)
//       if (response.data[i].name === mCtrl.var) {
//         // console.log('Name', response.data[i].name)
//         var targetName = pop(response.data[i].name)
//
//         function Marker() {
//              var name = {name};
//              var marker = new google.maps.Marker({
//                position: myLatLng,
//                map: map,
//                icon: 'http://icons.iconarchive.com/icons/everaldo/crystal-clear/24/App-asteroids-icon.png'
//
//
//              });
//         }
// //         Marker()
// //     }
//     }
// })
// }
// // mCtrl.metMass = function () {
//   console.log ('Meteorite Mass')
//   MeteoriteFactory.apiCall ()
//   .then(function (response) {
//     console.log(response.data)
//   })
// }

// concludes the connection of the ng click to API function script //


// creating a MARKER function - need to connect lat - long to ng model that will then populate function
// function Marker() {
//      var myLatLng = {lat: 50.775000, lng: 6.083330};
//
//     //  var map = new google.maps.Map(document.getElementById('map'), {
//     //    zoom: 2,
//     //    center: myLatLng
//     //  });
//
//      var marker = new google.maps.Marker({
//        position: myLatLng,
//        map: map,
//        title: 'Hello World!'
//      });
//    }









//--=-=-=-=-=-=- closing tag -=-=-=-=-=-=-=
}
