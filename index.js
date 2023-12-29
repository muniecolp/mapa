document.addEventListener('DOMContentLoaded', function() {
	const map = L.map('map').setView([-34.92143513027968, -57.956380862807876], 15);
  var imageUrl = 'icons8-toy-24.png';
  var customIcon = L.icon({
    iconUrl: imageUrl,
    iconSize: [32, 32], // Tamaño del icono [ancho, alto]
    iconAnchor: [16, 32], // Punto de anclaje del icono en relación con el marcador [ancho/2, alto]
    popupAnchor: [0, -32] // Punto de anclaje del popup en relación con el icono [ancho/2, alto*(-1)]
});

	const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 19,
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	}).addTo(map);


  var jsonData = [
    {
      "Latitude": "-34.9341567653044",
      "Longitude": "-57.9649245185205",
      "Address": "25 y 55",
      "Title": "Hallowen",
      "Time": "1:00 AM",
      "image_url": "https://cdn1.eldia.com/122023/1703629945595/Halloween%20-%2025%20y%2055.jpg"
    },
    {
      "Latitude": "-34.8733435519079",
      "Longitude": "-57.9082564701159",
      "Address": "Echeverría y Remedios de Escalada, Ensenada",
      "Title": "La guardia del Dragón",
      "Time": "1:30 AM",
      "image_url": "https://cdn1.eldia.com/122023/1703629611482/La%20Guardia%20del%20Drag%C3%B3n%20-%20Echeverr%C3%ADa%20entre%20Remedios%20de%20Escalada%20y%20Mart%C3%ADn%20Coronado,%20Ensenada.jpg"
    },
    {
      "Latitude": "-34.9582766380101",
      "Longitude": "-57.9722741314681",
      "Address": "65 y 142",
      "Title": "Bob Esponja",
      "Time": "1:00 AM",
      "image_url": ""
    },
    {
      "Latitude": "-34.9487347304234",
      "Longitude": "-57.9281861770617",
      "Address": "82, 17 y 18",
      "Title": "Bob Esponja",
      "Time": "2:30 AM",
      "image_url": "https://cdn1.eldia.com/122023/1703358875950/65c82e07-1fb3-4cd4-9ef8-2ddcd38be628.jpg"
    },
    {
      "Latitude": "-34.9003211548241",
      "Longitude": "-57.9328140587749",
      "Address": "124 y 51",
      "Title": "Larguiducho",
      "Time": "1:00 AM",
      "image_url": ""
    },
    {
      "Latitude": "-34.90243723",
      "Longitude": "-57.97116252",
      "Address": "9 y 32",
      "Title": "Larguiducho, Hijitus y Oaky",
      "Time": "2:00 AM",
      "image_url": "https://cdn1.eldia.com/122023/1703691760071.jpeg"
    },
    {
      "Latitude": "-34.96317515229701",
      "Longitude": "-58.00664205980939",
      "Address": "160 y 47",
      "Title": "Wall E",
      "Time": "1:00 AM",
      "image_url": "https://cdn1.eldia.com/122023/1703714919421.jpeg"
    },
    {
      "Latitude": "-34.94429861910245",
      "Longitude": "-57.979733048366015",
      "Address": "137 y 52",
      "Title": "Castillo, dragón y caballeros medievales",
      "Time": "1:00 AM",
      "image_url": "https://cdn1.eldia.com/122023/1703787686582.jpeg"
    },

    {
      "Latitude": "-34.934066087664654",
      "Longitude": "-57.92154184210024",
      "Address": "78 bis y 6",
      "Title": "Mike Wazousky",
      "Time": "1:00 AM",
      "image_url": ""
    },

    {
      "Latitude": "-34.964349426781496",
      "Longitude": "-57.95149111841763",
      "Address": "79 entre 136 y 137",
      "Title": "Monster Inc",
      "Time": "1:00 AM",
      "image_url": ""
    },
    {
      "Latitude": "-34.953200279559006",
      "Longitude": "-57.932456287616574",
      "Address": "22 entre 82 y 83",
      "Title": "El Hombre Araña",
      "Time": "1:00 AM",
      "image_url": ""
    },
    {
      "Latitude": "-34.92765766563419",
      "Longitude": "-58.02038669285229",
      "Address": "145 entre 521 y 522",
      "Title": "Raven de Jóvenes Titanes",
      "Time": "1:00 AM",
      "image_url": ""
    },
    {
      "Latitude": "-34.90241425742453",
      "Longitude": "-57.9992951628987",
      "Address": "518 entre 22 y 23",
      "Title": "Piolín y Silvestre",
      "Time": "1:00 AM",
      "image_url": ""
    },
    {
      "Latitude": "-34.90005153647454",
      "Longitude": "-57.932521486190275",
      "Address": "51 entre 124 y 125",
      "Title": "La Monja",
      "Time": "1:00 AM",
      "image_url": ""
    },
    {
      "Latitude": "-34.89775896158336",
      "Longitude": "-57.96587905531199",
      "Address": "4 y 32",
      "Title": "La familia de Peppa Pig",
      "Time": "1:00 AM",
      "image_url": ""
    },
    {
      "Latitude": "-34.96280887629127",
      "Longitude": "-57.9536933170379",
      "Address": " 77 entre 136 y 137",
      "Title": "Digital Circus",
      "Time": "1:00 AM",
      "image_url": ""
    },
    {
      "Latitude": "-34.97398547859842",
      "Longitude": "-58.01974084808235",
      "Address": "172 e/ 46 y 47",
      "Title": "El mundo de Ghibli",
      "Time": "1:00 AM",
      "image_url": ""
    },
    {
      "Latitude": "-34.81307557928095",
      "Longitude": "-57.988724830283125",
      "Address": "15 entre 102 y 104, Punta Lara",
      "Title": "Phineas y Ferb",
      "Time": "1:00 AM",
      "image_url": ""
    },

    {
      "Latitude": "-34.89405168691481",
      "Longitude": "-57.98450791137413",
      "Address": "10 y 521",
      "Title": "Me$$iento un dólar",
      "Time": "1:00 AM",
      "image_url": ""
    },
    {
      "Latitude": "-34.91970456455851",
      "Longitude": "-57.977539943503956",
      "Address": "38 y 22",
      "Title": "Emanuel de Ke Personajes, Fer Palacios y Duki",
      "Time": "1:00 AM",
      "image_url": ""
    },
    {
      "Latitude": "-34.93658386947757",
      "Longitude": "-57.91758816980316",
      "Address": "6 y 80 bis",
      "Title": "Plim Plim",
      "Time": "1:00 AM",
      "image_url": ""
    },
    {
      "Latitude": "-34.93820756447853",
      "Longitude": "-57.94814495429187",
      "Address": "66 y 20",
      "Title": "Chimuelo",
      "Time": "1:00 AM",
      "image_url": ""
    },
    {
      "Latitude": "-34.88383272506246",
      "Longitude": "-57.97317040295808",
      "Address": "116 y 521",
      "Title": "Los pingüinos de Madagascar",
      "Time": "1:00 AM",
      "image_url": ""
    },
    {
      "Latitude": "-34.88267805777212",
      "Longitude": "-57.89078677313594",
      "Address": "13 entre 154 y 155 de Berisso",
      "Title": "Bob Esponja y casita de Bob Esponja",
      "Time": "1:00 AM",
      "image_url": ""
    },
    {
      "Latitude": "-34.9478979957087",
      "Longitude": "-57.95780759501345",
      "Address": "30 entre 66 y 67",
      "Title": "Peppa Pig",
      "Time": "1:00 AM",
      "image_url": ""
    },
    {
      "Latitude": "-34.91196708105884",
      "Longitude": "-57.99601137019748",
      "Address": "525 entre 25 y 26",
      "Title": "Bart y Homero Simpson",
      "Time": "1:00 AM",
      "image_url": ""
    },
    {
      "Latitude": "-34.93918559614586",
      "Longitude": "-57.97175752136663",
      "Address": "31 y 54",
      "Title": "Super Mario MDT",
      "Time": "1:00 AM",
      "image_url": ""
    },
    {
      "Latitude": "-34.934472217725876",
      "Longitude": "-57.94613524940955",
      "Address": "65 y 17",
      "Title": "Mazinger Z",
      "Time": "2:00 AM",
      "image_url": ""
    },
    {
      "Latitude": "-34.98158881539727",
      "Longitude": "-58.039351336179024",
      "Address": "185 y 41 de Lisandro Olmos",
      "Title": "Among Us",
      "Time": "2:30 AM",
      "image_url": ""
    },
    {
      "Latitude": "-34.94698472691227",
      "Longitude": "-57.947654278638716",
      "Address": "25 y 71",
      "Title": "Rodri y Benson",
      "Time": "1:30 AM",
      "image_url": ""
    },
    {
      "Latitude": "-34.97315668363195",
      "Longitude": "-57.98664607957967",
      "Address": "66 y 157",
      "Title": "Hulk",
      "Time": "1:30 AM",
      "image_url": ""
    },
    {
      "Latitude": "-34.91946117360374",
      "Longitude": "-57.98923943526886",
      "Address": "27 y 32",
      "Title": "T-Rex",
      "Time": "2:00 AM",
      "image_url": ""
    },
    {
      "Latitude": "-34.891326863448164",
      "Longitude": "-57.950561168903384",
      "Address": "121 y 36",
      "Title": "Toy Story",
      "Time": "2:30 AM",
      "image_url": ""
    },
    {
      "Latitude": "-34.93330771281905",
      "Longitude": "-57.98528699307333",
      "Address": "133 entre 41 y 42",
      "Title": "Stranger Things",
      "Time": "1:30 AM",
      "image_url": ""
    },
    {
      "Latitude": "-34.92115501629202",
      "Longitude": "-57.968855530491844",
      "Address": "19 y 43",
      "Title": "Meteoro con Chito y el Mach5",
      "Time": "1:00 AM",
      "image_url": ""
    },
    {
      "Latitude": "-34.93967825138824",
      "Longitude": "-57.976806054677255",
      "Address": "133 y 50",
      "Title": "Señor Cara de Papa y Marcianitos de Toy Story (Grupo Gambier)",
      "Time": "2:00 AM",
      "image_url": ""
    },
    {
      "Latitude": "-34.97380768315388",
      "Longitude": "-57.97426371725175",
      "Address": "152 entre 72 y 72 bis",
      "Title": "Los Locos Adams, el Grinch y Michael Jackson",
      "Time": "1:30 AM",
      "image_url": ""
    },
    {
      "Latitude": "-34.89094416461234",
      "Longitude": "-57.98205546765394",
      "Address": "7 y 520 bis",
      "Title": "Muñeco de jengibre - Shrek",
      "Time": "2:30 AM",
      "image_url": ""
    },
    {
      "Latitude": "-34.93728210072241",
      "Longitude": "-57.93334913267204",
      "Address": "13 entre 72 y 73",
      "Title": "Intensamente",
      "Time": "2:30 AM",
      "image_url": ""
    },
    {
      "Latitude": "-34.93702039017764",
      "Longitude": "-57.975877524083366",
      "Address": "131 y 49",
      "Title": "Mario Bross",
      "Time": "1:30 AM",
      "image_url": ""
    },
    {
      "Latitude": "-34.91775752775523",
      "Longitude": "-57.97336797135681",
      "Address": "19 y 39",
      "Title": "El viaje de Chihiro",
      "Time": "1:00 AM",
      "image_url": ""
    },
    {
      "Latitude": "-34.94490279770293",
      "Longitude": "-57.9617452332076",
      "Address": "30 y 66",
      "Title": "Trucus",
      "Time": "2:00 AM",
      "image_url": ""
    },
    {
      "Latitude": "-34.9316336823658",
      "Longitude": "-58.009191810468764",
      "Address": "142 bis y 529",
      "Title": "Furia de Intensamente",
      "Time": "2:30 AM",
      "image_url": ""
    },
    {
      "Latitude": "-34.973238829758955",
      "Longitude": "-57.98657206805648",
      "Address": "157 y 66",
      "Title": "Increíble Hulk",
      "Time": "1:00 AM",
      "image_url": ""
    },
    {
      "Latitude": "-34.945772153775415",
      "Longitude": "-57.93686641292909",
      "Address": "76 entre 19 y 20",
      "Title": "Pacman",
      "Time": "1:00 AM",
      "image_url": ""
    },
    {
      "Latitude": "-34.910143677550444",
      "Longitude": "-57.962854105401135",
      "Address": "10 y 40",
      "Title": "Zamba y San Martín",
      "Time": "1:30 AM",
      "image_url": ""
    },
    {
      "Latitude": "-34.935527485940085",
      "Longitude": "-57.88188907136216",
      "Address": "602 entre 127 y 128",
      "Title": "Bob Esponja",
      "Time": "2:30 AM",
      "image_url": ""
    },
    {
      "Latitude": "-34.94371312399993",
      "Longitude": "-57.93111492436625",
      "Address": "16 y 78",
      "Title": "La Guarida del Dragón",
      "Time": "1:30 AM",
      "image_url": ""
    },
    {
      "Latitude": "-34.95217821529963",
      "Longitude": "-57.912171105374476",
      "Address": "13 entre 94 y 95",
      "Title": "Los Pingüinos de Madagascar",
      "Time": "2:00 AM",
      "image_url": ""
    },
    {
      "Latitude": "-34.945513769439955",
      "Longitude": "-57.95199132041116",
      "Address": "26 y 68",
      "Title": "Los Simpsons",
      "Time": "2:00 AM",
      "image_url": ""
    },
    {
      "Latitude": "-34.94421794271274",
      "Longitude": "-57.896645116676126",
      "Address": "99 entre 1 y 2",
      "Title": "Olaff",
      "Time": "1:00 AM",
      "image_url": ""
    },
    {
      "Latitude": "-34.93591088993005",
      "Longitude": "-57.948749816509796",
      "Address": "19 entre 64 y 65",
      "Title": "Ben 10, Cuatro Brazos y Fuego",
      "Time": "1:00 AM",
      "image_url": ""
    },
    {
      "Latitude": "-34.951483959145335",
      "Longitude": "-57.91209581992105",
      "Address": "94 entre 12 y 13",
      "Title": "Huggy Wuggy",
      "Time": "2:30 AM",
      "image_url": ""
    },
    {
      "Latitude": "-34.96115315218256",
      "Longitude": "-57.88379960322773",
      "Address": "618 entre 6 y 5 bis",
      "Title": "Bugs Bunny",
      "Time": "2:30 AM",
      "image_url": ""
    },
    {
      "Latitude": "-34.94514280119419",
      "Longitude": "-57.95582489738435",
      "Address": "66 entre 27 y 28",
      "Title": "Gabby Dollhouse",
      "Time": "2:30 AM",
      "image_url": ""
    }
   ]


   jsonData.forEach(function (location) {
    var latitude = parseFloat(location.Latitude.replace(',', '.'));
    var longitude = parseFloat(location.Longitude.replace(',', '.'));
    var title = location.Title;
    var subtitle = 'Calle: ' + location.Address + '. Hora: ' + location.Time;
    var imageUrl = location.image_url;
    var markerLocation = L.latLng([latitude, longitude]);

    var marker = L.marker(markerLocation, { icon: customIcon }).addTo(map);

    var popupContent = '<div class="text-center">' +
                     '<strong class="text-2xl font-bold">' + title + '</strong>' +
                     '<p class="text-md">' + subtitle + '</p>' +
                     (imageUrl ? '<img src="' + imageUrl + '" alt="Imagen del evento" class="mx-auto mt-4" width="100">' : '') +
                   '</div>';



    marker.bindPopup(popupContent);
  });
});
