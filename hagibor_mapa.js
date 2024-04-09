var mapOptions = {
 mapTypeId: 'roadmap',
 disableDefaultUI: false,
 //zoom: zoomSize,
 //scrollwheel: false,
 gestureHandling: "cooperative",
 styles: [
   {
       "featureType": "administrative",
       "elementType": "labels.text.fill",
       "stylers": [
           {
               "color": "#444444"
           }
       ]
   },
   {
       "featureType": "administrative.neighborhood",
       "elementType": "all",
       "stylers": [
           {
               "visibility": "off"
           }
       ]
   },
   {
       "featureType": "landscape",
       "elementType": "all",
       "stylers": [
           {
               "color": "#f2f2f2"
           }
       ]
   },
   {
       "featureType": "poi",
       "elementType": "all",
       "stylers": [
           {
               "visibility": "off"
           }
       ]
   },
   {
       "featureType": "road",
       "elementType": "all",
       "stylers": [
           {
               "saturation": -100
           },
           {
               "lightness": 45
           }
       ]
   },
   {
       "featureType": "road.highway",
       "elementType": "all",
       "stylers": [
           {
               "visibility": "simplified"
           }
       ]
   },
   {
       "featureType": "road.arterial",
       "elementType": "labels.icon",
       "stylers": [
           {
               "visibility": "off"
           }
       ]
   },
   {
       "featureType": "transit",
       "elementType": "all",
       "stylers": [
           {
               "visibility": "off"
           }
       ]
   },
   {
       "featureType": "water",
       "elementType": "all",
       "stylers": [
           {
               "color": "#cfe5ee"
           },
           {
               "visibility": "on"
           }
       ]
   }
]
};

// Variables for Google maps
var map, mapElem, markerImg, markerImg2, infoWindow, marker;
var markers = [],
 infoWindows = [],
 races = [{
    lat: 50.07897083143043,
    lng: 14.483878655929344,
    nadpis: "Delta Hagibor",
    type: "hagibor"

  },
  {
    lat: 50.08066324108084, 
    lng: 14.466707644199964,
    nadpis: "Olšanské hřbitovy",
    type: "park"
  },
  {
    lat: 50.07814132696583, 
    lng: 14.466860700612793,
    nadpis: "Tram Olšanské hřbitovy",
    type: "tram"
  },
  {
    lat: 50.083290070137515, 
    lng: 14.47147528674202,
    nadpis: "OMV",
    type: "cerpaci"
  },
  {
    lat: 50.0825208957422, 
    lng: 14.471570858995253,
    nadpis: "Tram Mezi hřbitovy",
    type: "tram"
  },
  {
    lat: 50.07866498664558, 
    lng: 14.469714663946686,
    nadpis: "Medos",
    type: "cerpaci"
  },
  {
    lat: 50.078209913019684, 
    lng: 14.469742110292964,
    nadpis: "Vinohradská poliklinika",
    type: "lekarna"
  },
  {
    lat: 50.078043726787314, 
    lng: 14.470085424858064,
    nadpis: "Dr. Max Lékárna",
    type: "lekarna"
  },
  {
    lat: 50.0782442413143, 
    lng: 14.47262045759822,
    nadpis: "Želivárna",
    type: "restaurace"
  },
  {
    lat: 50.07981695225716, 
    lng: 14.473130525172406,
    nadpis: "Židovské hřbitovy",
    type: "park"
  },
  {
    lat: 50.07861171602996, 
    lng: 14.473780756380744,
    nadpis: "Metro Želivského",
    type: "metro"
  },
  {
    lat: 50.078948194326706, 
    lng: 14.473909603360935,
    nadpis: "UniCredit Bank",
    type: "bankomat"
  },
  {
    lat: 50.07843104987213, 
    lng: 14.470497123616227,
    nadpis: "Bus Želivského",
    type: "bus"
  },
  {
    lat: 50.07860931135989, 
    lng: 14.476328304320882,
    nadpis: "Lékárna Magistra",
    type: "lekarna"
  },
  {
    lat: 50.07628336760386, 
    lng: 14.475475626140264,
    nadpis: "Fakultní nemocnice Královské Vinohrady",
    type: "lekarna"
  },
  {
    lat: 50.077667189232685, 
    lng: 14.477627025886047,
    nadpis: "Základní umělecká škola",
    type: "zakladni"
  },
  {
    lat: 50.07650562298907, 
    lng: 14.480544092113464,
    nadpis: "Vinohradský hřbitov",
    type: "park"
  },
  {
    lat: 50.0730057784534, 
    lng: 14.483507860772693,
    nadpis: "Park Pod Rapidem",
    type: "park"
  },
  {
    lat: 50.07484155193948, 
    lng: 14.486099274109083,
    nadpis: "Park Fr. Suchého",
    type: "park"
  },
  {
    lat: 50.07757945591898, 
    lng: 14.481221126548046,
    nadpis: "Tram Vinohradské hřbitovy",
    type: "tram"
  },
  {
    lat: 50.08322796742093, 
    lng: 14.478182702902524,
    nadpis: "MOL",
    type: "cerpaci"
  },
  {
    lat: 50.08225051834154, 
    lng: 14.480571422895824,
    nadpis: "Sportovní areál VŠE Třebešín",
    type: "sport"
  },
  {
    lat: 50.081143092163806, 
    lng: 14.481056108066497,
    nadpis: "Dětské hřiště Pod Kapličkou",
    type: "hriste"
  },
  {
    lat: 50.08043929581853, 
    lng: 14.481732648269043,
    nadpis: "TJ Bohemians Praha",
    type: "sport"
  },
  {
    lat: 50.07990808997918, 
    lng: 14.483838283056324,
    nadpis: "Mateřská škola",
    type: "materska"
  },
  {
    lat: 50.079542177577686, 
    lng: 14.485052780420313,
    nadpis: "Restaurace",
    type: "restaurace"
  },
  {
    lat: 50.07798708516545, 
    lng: 14.484708942382817,
    nadpis: "Hřbitov Strašnice",
    type: "park"
  },
  {
    lat: 50.076566109601636, 
    lng: 14.484711276584004,
    nadpis: "Tram Krematorium Strašnice",
    type: "tram"
  },
  {
    lat: 50.081233370676756, 
    lng: 14.485397824313944,
    nadpis: "BUS Pod Třebešínem",
    type: "bus"
  },
  {
    lat: 50.083404042923455, 
    lng: 14.484767316255377,
    nadpis: "Park Jiřího Karena",
    type: "park"
  },
  {
    lat: 50.083223169765276, 
    lng: 14.485032408435444,
    nadpis: "Dětské hřiště Třebešín",
    type: "hriste"
  },
  {
    lat: 50.08044010139702, 
    lng: 14.488607089925196,
    nadpis: "Bus Na Palouku",
    type: "bus"
  },
  {
    lat: 50.078826115426864, 
    lng: 14.488426421009482,
    nadpis: "Obývák bar",
    type: "restaurace"
  },
  {
    lat: 50.07736405220421, 
    lng: 14.48829507700091,
    nadpis: "ČSOB",
    type: "bankomat"
  },
  {
    lat: 50.07367621180573, 
    lng: 14.500132921389296,
    nadpis: "Tram Vozovna Strašnice",
    type: "tram"
  },
  {
    lat: 50.08019808590987, 
    lng: 14.490502905836275,
    nadpis: "Slunečná lékárna",
    type: "lekarna"
  },
  {
    lat: 50.079275029218785, 
    lng: 14.490770191752729,
    nadpis: "ROCHER Café",
    type: "restaurace"
  },
  {
    lat: 50.07803645109427, 
    lng: 14.490195517711792,
    nadpis: "THERAPY CENTRE",
    type: "lekarna"
  },
  {
    lat: 50.07753430361202, 
    lng: 14.489892865860792,
    nadpis: "Park Ivana Jilemnického",
    type: "park"
  },
  {
    lat: 50.076579977612006, 
    lng: 14.489598066606543,
    nadpis: "Chemické divadlo",
    type: "divadlo"
  },
  {
    lat: 50.075210828015706, 
    lng: 14.489909943242765,
    nadpis: "Česká spořitelna",
    type: "bankomat"
  },
  {
    lat: 50.07671038737693, 
    lng: 14.490475029802438,
    nadpis: "TRAM Vinice",
    type: "tram"
  },
  {
    lat: 50.07507624057693, 
    lng: 14.490800520259736,
    nadpis: "Sabroso",
    type: "restaurace"
  },
  {
    lat: 50.07396840204867, 
    lng: 14.4909134902893,
    nadpis: "Kávový Magnát",
    type: "restaurace"
  },
  {
    lat: 50.07313260763516, 
    lng: 14.490464541246444,
    nadpis: "METRO Strašnická",
    type: "metro"
  },
  {
    lat: 50.079544524531826, 
    lng: 14.492379249788113,
    nadpis: "Mateřská Škola Hřibská",
    type: "materska"
  },
  {
    lat: 50.076384296630486, 
    lng: 14.494366132520485,
    nadpis: "Dětské hřiště Pod Hotelem",
    type: "hriste"
  },
  {
    lat: 50.07702453457531, 
    lng: 14.494741465109758,
    nadpis: "TRAM Solidarita",
    type: "tram"
  },
  {
    lat: 50.07846877011741, 
    lng: 14.494993253309113,
    nadpis: "MŠ Ve Stínu",
    type: "materska"
  },
  {
    lat: 50.07980177691309, 
    lng: 14.494404292955748,
    nadpis: "Základní škola Hostýnská",
    type: "zakladni"
  },
  {
    lat: 50.075510609338316, 
    lng: 14.49714198144987,
    nadpis: "MŠ Dvouletky",
    type: "materska"
  },
  {
    lat: 50.08517946349345, 
    lng: 14.499133550639527,
    nadpis: "Malešický park",
    type: "park"
  },
  {
    lat: 50.07542946777324, 
    lng: 14.49912443503135,
    nadpis: "Strašnické divadlo",
    type: "divadlo"
  
    }];

   function initialize() {
    markerImg = {
      hagibor: {
        url: 'https://uploads-ssl.webflow.com/66150ba34279ae6a77347291/66150d06c8ae94c7c31edec9_hag_map_pin.svg',
        size: new google.maps.Size(64, 64),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(32, 64),
        scaledSize: new google.maps.Size(64, 64)
      },
      zakladni: {
        url: 'https://uploads-ssl.webflow.com/65e70b877b8655d234359445/66055ae57a9a09b4befe0923_zs.png',
        size: new google.maps.Size(32, 32),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(16, 32),
        scaledSize: new google.maps.Size(32, 32)
      },
      stredni: {
        url: 'https://uploads-ssl.webflow.com/65e70b877b8655d234359445/66055ae50196cd0521a1342b_s%C5%A1.png',
        size: new google.maps.Size(32, 32),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(16, 32),
        scaledSize: new google.maps.Size(32, 32)
      },
      tram: {
        url: 'https://uploads-ssl.webflow.com/65e70b877b8655d234359445/66055ae57109e4b47584ecc4_tram.png',
        size: new google.maps.Size(32, 32),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(16, 32),
        scaledSize: new google.maps.Size(32, 32)
      },
      vlak: {
        url: 'https://uploads-ssl.webflow.com/65e70b877b8655d234359445/66055ae5f026cbf14ca32952_vlak.png',
        size: new google.maps.Size(32, 32),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(16, 32),
        scaledSize: new google.maps.Size(32, 32)
      },
      lekarna: {
        url: 'https://uploads-ssl.webflow.com/65e70b877b8655d234359445/66055ae41df21a9ca5e3158a_lekarna.png',
        size: new google.maps.Size(32, 32),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(16, 32),
        scaledSize: new google.maps.Size(32, 32)
      },
      posta: {
        url: 'https://uploads-ssl.webflow.com/65e70b877b8655d234359445/66055ae4b5e77f317f93bdf9_posta.png',
        size: new google.maps.Size(32, 32),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(16, 32),
        scaledSize: new google.maps.Size(32, 32)
      },
      sport: {
        url: 'https://uploads-ssl.webflow.com/65e70b877b8655d234359445/66055ae4a0bf251c26992028_sportovni-areal.png',
        size: new google.maps.Size(32, 32),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(16, 32),
        scaledSize: new google.maps.Size(32, 32)
      },
      restaurace: {
        url: 'https://uploads-ssl.webflow.com/65e70b877b8655d234359445/66055ae3e98d021ca91c87ce_restaurace.png',
        size: new google.maps.Size(32, 32),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(16, 32),
        scaledSize: new google.maps.Size(32, 32)
      },
      materska: {
        url: 'https://uploads-ssl.webflow.com/65e70b877b8655d234359445/66055ae333ea3f83189cd423_MS.png',
        size: new google.maps.Size(32, 32),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(16, 32),
        scaledSize: new google.maps.Size(32, 32)
      },
      cyklo: {
        url: 'https://uploads-ssl.webflow.com/65e70b877b8655d234359445/66055ae3fd34e35eae988eb1_cysklostezka.png',
        size: new google.maps.Size(32, 32),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(16, 32),
        scaledSize: new google.maps.Size(32, 32)
      },
      park: {
        url: 'https://uploads-ssl.webflow.com/65e70b877b8655d234359445/66055ae3284c786335a3935b_park.png',
        size: new google.maps.Size(32, 32),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(16, 32),
        scaledSize: new google.maps.Size(32, 32)
      },
      nakupni: {
        url: 'https://uploads-ssl.webflow.com/65e70b877b8655d234359445/66055ae3adeccea3c9726820_nakupni-centrum.png',
        size: new google.maps.Size(32, 32),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(16, 32),
        scaledSize: new google.maps.Size(32, 32)
      },
      metro: {
        url: 'https://uploads-ssl.webflow.com/65e70b877b8655d234359445/66055ae322eb7814bbcb2e2e_metro.png',
        size: new google.maps.Size(32, 32),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(16, 32),
        scaledSize: new google.maps.Size(32, 32)
      },
      parkovani: {
        url: 'https://uploads-ssl.webflow.com/65e70b877b8655d234359445/66055ae385f6069bdc35d787_parkovani.png',
        size: new google.maps.Size(32, 32),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(16, 32),
        scaledSize: new google.maps.Size(32, 32)
      },
      bus: {
        url: 'https://uploads-ssl.webflow.com/65e70b877b8655d234359445/66055ae3c39da81a09718732_bus.png',
        size: new google.maps.Size(32, 32),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(16, 32),
        scaledSize: new google.maps.Size(32, 32)
      },
      koupaliste: {
        url: 'https://uploads-ssl.webflow.com/65e70b877b8655d234359445/66055ae3256d26ee4a776e01_koupaliste.png',
        size: new google.maps.Size(32, 32),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(16, 32),
        scaledSize: new google.maps.Size(32, 32)
      },
      divadlo: {
        url: 'https://uploads-ssl.webflow.com/65e70b877b8655d234359445/66055ae364622b86f9c64e1c_divadlo.png',
        size: new google.maps.Size(32, 32),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(16, 32),
        scaledSize: new google.maps.Size(32, 32)
      },
     
      bankomat: {
        url: 'https://uploads-ssl.webflow.com/65e70b877b8655d234359445/66055ae32c03877ee0d45c35_bankomat.png',
        size: new google.maps.Size(32, 32),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(16, 32),
        scaledSize: new google.maps.Size(32, 32)
      },
      hriste: {
        url: 'https://uploads-ssl.webflow.com/65e70b877b8655d234359445/66055ae34d81a9b6abe85d25_detske-hriste.png',
        size: new google.maps.Size(32, 32),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(16, 32),
        scaledSize: new google.maps.Size(32, 32)
      },
      cerpaci: {
        url: 'https://uploads-ssl.webflow.com/65e70b877b8655d234359445/66055ae3601b171d1ef66482_cerpaci%20stanice.png',
        size: new google.maps.Size(32, 32),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(16, 32),
        scaledSize: new google.maps.Size(32, 32)
      }
    }

 // Display a map on the page
 mapElem = document.getElementById('map_canvas');
 map = new google.maps.Map(mapElem, mapOptions);
 map.setTilt(45);



 // Loop through our array of races
 for (i = 0; i < races.length; i++) {
   var race = races[i];

   // Generate an infowindow content for the marker
   var infoWindow = new google.maps.InfoWindow();
   infoWindow.setContent(
     '<h2 class="mapbox_header">' + race.nadpis + '</h2>'
   );
   infoWindows.push(infoWindow);

   // Place a marker on the map
   createMarker(race.lat, race.lng, race.type, i);
 }

// defaultni hodnoty pokud by se neco posralo, 
// ale tyto hodnoty by se meli pokazde zmenit samy
// -Max
  var zoomOffset = 16;
  var xOffset = -0;
  var yOffset = -0;
  
 	if (document.documentElement.clientWidth >= 2560){
  // 4k
    zoomOffset = 16;
    xOffset = -50;
    yOffset = -58;
  }else if (document.documentElement.clientWidth >= 1440){
  // laptop L
    zoomOffset = 16;
    xOffset = -50;
    yOffset = -58;
  }else if (document.documentElement.clientWidth >= 1024){
  // Laptop
    zoomOffset = 16;
    xOffset = -30;
    yOffset = -50;
  }else if (document.documentElement.clientWidth >= 768){
  // Tablet
    zoomOffset = 16;
    xOffset = -20;
    yOffset = -45;
  }else if (document.documentElement.clientWidth >= 425){
  // Phone L
    zoomOffset = 16;
    xOffset = -20;
    yOffset = -45;
  }
  
  // pokud budete potrebovat vic rozliseni staci 
  // zkopirovat else if a zmenit hodnotu cisla
  // -Max
  
 // pridat parametr true pokud je vzdalenost zoomSize 
 // nedulezita a staci prumerny zoom
 // -Max
 fitToMarkers(xOffset, yOffset,zoomOffset /*,true*/);
  
}

/*
// pridano z jineho scriptu
function mapResize() {
 google.maps.event.trigger(map, "resize");
 fitToMarkers();
}
// pridano z jineho scriptu end
*/

function createMarker(x, y, type, i) {
 var iconImg = markerImg
 if (type == "zakladni") {
   var iconImg = markerImg.zakladni
 } else if (type == "stredni") {
   var iconImg = markerImg.stredni
  } else if (type == "tram") {
    var iconImg = markerImg.tram
  } else if (type == "vlak") {
    var iconImg = markerImg.vlak
  } else if (type == "lekarna") {
    var iconImg = markerImg.lekarna
  } else if (type == "posta") {
    var iconImg = markerImg.posta
  } else if (type == "sport") {
    var iconImg = markerImg.sport
  } else if (type == "restaurace") {
    var iconImg = markerImg.restaurace
  } else if (type == "materska") {
    var iconImg = markerImg.materska
  } else if (type == "cyklo") {
    var iconImg = markerImg.cyklo
  } else if (type == "park") {
    var iconImg = markerImg.park
  } else if (type == "nakupni") {
    var iconImg = markerImg.nakupni
  } else if (type == "metro") {
    var iconImg = markerImg.metro
  } else if (type == "parkovani") {
    var iconImg = markerImg.parkovani
  } else if (type == "bus") {
    var iconImg = markerImg.bus
  } else if (type == "koupaliste") {
    var iconImg = markerImg.koupaliste
  } else if (type == "divadlo") {
    var iconImg = markerImg.divadlo
  } else if (type == "bankomat") {
    var iconImg = markerImg.bankomat
  } else if (type == "hriste") {
    var iconImg = markerImg.hriste
} else if (type == "cerpaci") {
    var iconImg = markerImg.cerpaci
 } else {
   var iconImg = markerImg.hagibor
 }
 marker = new google.maps.Marker({
   map: map,
   icon: iconImg,
   position: new google.maps.LatLng(x, y),
   title: races[i].name
 });
 marker._index = i;
 markers.push(marker);

 // Click event on marker
 google.maps.event.addListener(marker, 'click', (function(marker, i) {
   return function() {
     // Close last opened infowindow if any
     if (infoWindow) infoWindow.close();
     // Open clicked infowindow
     infoWindow = infoWindows[i];
     infoWindow.open(map, marker);
   }
 })(marker, i));
}

function fitToMarkers(OffsetX, OffsetY, zoomSize, boolBound = false) {

var bounds = new google.maps.LatLngBounds();
 for (var i = 0; i < markers.length; i++) {
   var myLatLng = new google.maps.LatLng(markers[i].getPosition().lat(), markers[i].getPosition().lng());
   bounds.extend(myLatLng);
 }
 
 // kvuli fitBound nejde menit vzdalenost zoomu
 // bylo by zapotrebi pridat offset body, ktere by 
 // oznacovaly offset od hrany
 // => hodne prace navic
 // hodnotu dejte true pokud moc nezalezi na placementu kamery
 // -Max
 if(boolBound){
 	map.fitBounds(bounds);
 }
 
 // hodi kameru do prumerneho stredu vsech bodu
 // -Max
 map.setCenter(bounds.getCenter());
 
 // panBy posouva kameru podle hodnoty Offsetu
 // pokud je offsetx = 150,
 // tak kamera bude posunuta hodne doprava (treba z prahy do brna)
 // -Max
 map.panBy(OffsetX,OffsetY);
 
 // zoomSize urcuje jak moc je kamera priblizena
 // cim mensi cislo tim vetsi vzdalenost
 // takze pokud zoomSize = 1
 // tak bude kamera tak moc oddalena ze bude videt cela Evropa
 // pokud je zoomSize = 24 (myslim ze maximalni hodnota)
 // mel by teoreticky jit videt jeden byt pres celou mapu
 // -Max
 map.setZoom(zoomSize);
}