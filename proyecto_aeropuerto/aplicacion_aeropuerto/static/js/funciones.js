function iniciarMap(){
    var coord = {lat:-33.3897799 ,lng:-70.7944273};
    var map = new google.maps.Map(document.getElementById('map'),{
        zoom: 12,
        center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}
//1) definir las variables correspondientes
var opt_1 = new Array ("-", "Alhué", "Buin", "Calera De Tango", "Centro de Ski - El Colorado", "Centro de Ski - Farellones", 
"Centro de Ski - La Parva", "Centro de Ski - Valle Nevado", "Cerrillos","Cerro Navia", "Chicureo", "Colina", "Conchalí", 
"Curacaví", "El Bosque", "El Monte", "Estación Central", "Huechuraba", "Independencia", "Isla de Maipo", "La Cisterna", 
"La Florida", "La Granja", "La Pintana", "La Reina", "Lampa", "Las Condes", "Lo Barnechea", "Lo Barnechea (Excepto cordillera)", 
"Lo Espejo", "Lo Prado", "Macul", "Maipú", "María Pinto", "Melipilla", "Ñuñoa", "Padre Hurtado", "Paine", "Pedro Aguirre Cerda", 
"Peñaflor", "Peñalolén", "Pirque", "Providencia", "Pudahuel", "Puente Alto", "Quilicura", "Quinta Normal", "Recoleta", "Renca", 
"San Bernardo", "San Joaquín", "San José De Maipo", "San Miguel", "San Pedro", "San Ramón", "Santiago", "Talagante", "Tiltil", 
"Vitacura")
var opt_2 = new Array ("-", "Arica", "Camarones", "General Lagos", "Putre")
var opt_3 = new Array ("-", "Camiña", "Camarones", "Colchane", "Huara", "Iquique", "Pica", "Pozo Almonte", "Alto Hospicio")
var opt_4 = new Array ("-", "Antofagasta", "Calama", "María Elena", "Mejillones", "Ollague", "San Pedro De Atacama", 
"Sierra Gorda", "Taltal", "Tocopilla")
var opt_5 = new Array ("-", "Alto Del Carmen", "Caldera", "Chañaral", "Copiapó", "Diego De Almagro", "Freirina", "Huasco", 
"Tierra Amarilla", "Vallenar")
var opt_6 = new Array ("-", "Andacollo", "Canela", "Caleta Hornos", "Combarbalá", "Coquimbo", "Guanaqueros", "Illapel", 
"La Higuera", "La Serena", "Las Tacas", "Los Vilos", "Monte Patria", "Morrillos", "Ovalle", "Paihuano", "Playa Blanca", 
"Puerto Velero", "Punitaqui", "Rio Hurtado", "Salamanca", "Tongoy", "Totoralillo", "Vicuña")
var opt_7 = new Array ("-", "Algarrobo", "Cabildo", "Calle Larga", "Cartagena", "Casablanca", "Catemu", "concón", 
"El Quisco", "El Tabo", "Hijuelas", "Isla De Pascua", "Juan Fernández", "La Calera", "La Cruz", "La Ligua", "Limache", 
"Llay-Llay", "Los Andes", "Nogales", "Olmué", "Panequehue", "Papudo", "Petorca", "Puchancaví", "Putaendo", "Quillota", "Quilpué",
"Quintero", "Rinconada", "San Antonio", "San Esteban", "San Felipe", "Santa María", "Santo Domingo", "Valparaíso", "villa Alemana", 
"Viña Del Mar", "Zapallar")
var opt_8 = new Array ("-", "Chépica", "Chimbarongo", "Codegua", "Coinco", "Coltauco", "Doñihue", "Graneros", "La Estrella", 
"Lago Rapel", "Las Cabras", "Litueche", "Lolol", "Machalí", "Malloa", "Marchigue", "Mostazal", "Nacagua", "Navidad", 
"Olivar", "Palmilla", "Paredones", "Peralillo", "Peumo", "Pichidegua", "Pichilemu", "Placilla", "Pumanque","Quinta De Tilcoco", 
"Rancagua", "Rengo", "Requinoa", "San Fernando", "San Vicente", "Santa cruz")
var opt_9 = new Array ("-", "Caquenes", "Chanco", "Colbún", "Constitución", "Curepto", "Curicó", "Empedrado", "Hualañén", 
"Licantén", "Linares", "Longaví", "Maule", "Molina", "Parral", "Pelarco", "Pelluhue", "Pancahue", "Rauco", 
"Retiro", "Río Claro", "Romeral", "Sagrada Familia", "San Clemente", "San Javier", "San Rafael", "Talca", "Teno","Vichuquén", 
"Villa Alegre", "Yerbas Buenas")
var opt_10 = new Array ("-", "Bulnes", "Chillán", "Chillán Viejo", "Cobquecura", "Coelemu", "Coihueco", "El Carmen", "Ninhue", 
"Ñiquén", "Pemuco", "Pinto", "Portezuelo", "Quillón", "Quirihue", "Ranquil", "San Carlos", "San Fabián", "San Ignacio", 
"San Nicolás", "Treguaco", "Yungay")
var opt_11 = new Array ("-", "Alto Bío Bío", "Antuco", "Arauco", "Cabrero", "Cañete", "Chiguayante", "Concepción", "Contulmo", 
"Coronel", "Curanilahue", "Dichato", "Florida", "Hualpén", "Hualqui", "Laja", "Lebu", "Lirquen", "Los Alamos", "Los Ángeles", 
"Lota", "Mulchén", "Nacimiento", "Negrete", "Penco", "Pingueral", "Quilaco", "Quilleco", "Recinto", "San Pedro De La Paz", 
"San Rosendo", "anta Bárbara", "Santa Juana", "Talcahuano", "Tirúa", "Tomé", "Tucapel", "Yumbel")
var opt_12 = new Array ("-", "Angol", "Caburga", "Calafquen", "Carahue", "Cholchol", "Collipulli", "Corralco", "Cunco", 
"Curacautín", "Curarrehue", "Ercilla", "Freire", "Galvarino", "Gorvea", "Lago Cólico", "Lago Cólico Norte", "Lago Cólico Sur", 
"Lautaro", "Licanray", "Loncoche", "Lonquimay", "Los Sauces", "Lumaco", "Malalcahuello", "Melipueco", "Nueva Imperial", 
"Padre Las Casas", "Perquenco", "Pitrufquén", "Pucón", "Puerto Saavedra", "Purén", "Renaico", "Temuco", "Teodoro Schmidt", 
"Toltén", "Traiguén", "Victoria", "Vicún", "Villarrica")
var opt_13 = new Array ("-", "Coñaripe", "Corral", "Futrono", "La Union", "Lago Ranco", "Lanco", "Los Lagos", "Mafil", 
"Mariquina", "Paillaco", "Panguipulli", "Rio Bueno", "Valdivia")
var opt_14 = new Array ("-", "Ancud", "Calbuco", "Castro", "Chaitén", "Chonchi", "Cochamó", "Curaco De Vélez", "Dalcahue", 
"El Islote", "Ensenada", "Fresia", "Frutillar", "Futaleufú", "Hualaihué", "Llanquihue", "Los Muermos", "Marina Rupanco", 
"Maullín", "Osorno", "Palena", "Puerto Montt", "Puerto Octay", "Puerto Varas", "Puqueldón", "Purranque", "Puyehue", "Queilén", 
"Quillón", "Quemchi", "Quinchao", "Río Negro", "San Juan De La Costa", "San Pablo")
var opt_15 = new Array ("-", "Aysén", "Chile Chico", "Cisnes", "Cochrane", "Coyhaique", "Guaitecas", "Lago Verde", "O'Higgins", 
"Río Ibáñez", "Tortel")
var opt_16 = new Array ("-", "Antártica", "Cabo De Hornos", "Laguna Blanca", "Porvenir", "Primavera", "Puerto Natales", "Punta Arenas", 
"Río Verde", "San Gregorio", "Timaukel", "Torres Del Paine")
//2) crear una funcion que permita ejecutar el cambio dinamico
function cambiaDatos () {
  var region;
  //se toma el valor de la cosa seleccionada
  region = document.formularioDireccion.region[document.formularioDireccion.region.selectedIndex].value;
  //se chequea si la region esta definida
  if(region!=0){
      //seleccionamos las comunas correspondientes
      mis_opts=eval("opt_" + region);
      //se calcula el numero de cosas
      num_opts=mis_opts.length;
      //marco el numero de opt en el select
      document.formularioDireccion.comuna.length = num_opts;
      //para cada opt del array la pongo en el select
      for(i=0; i<num_opts; i++) {
          document.formularioDireccion.comuna.options[i].value=mis_opts[i];
          document.formularioDireccion.comuna.options[i].text=mis_opts[i];
      }
      }else{
          //si no habia nunguna opt seleccionada, elimino elimino las cosas del select
          document.formularioDireccion.comuna.length = 1;
          //ponemos un guion en la unica opt que he dejado
          document.formularioDireccion.comuna.options[0].value="-";
          document.formularioDireccion.comuna.options[0].text="-";
      }
      //hecer un reset de las opts
      document.formularioDireccion.comuna.options[0].selected = true;

}

function fn_ocultarEtiquetas(){
  document.getElementById('lbl_region').style.visibility = "hidden";
  document.getElementById('lbl_comuna').style.visibility = "hidden";
  document.getElementById('lbl_direccion').style.visibility = "hidden";
  document.getElementById('lbl_numero').style.visibility = "hidden";
  document.getElementById('lbl_asientos1').style.visibility = "hidden";
  document.getElementById('lbl_asientos2').style.visibility = "hidden";
  document.getElementById('lbl_asientos3').style.visibility = "hidden";
  document.getElementById('lbl_asientos4').style.visibility = "hidden";
  document.getElementById('lbl_asientos5').style.visibility = "hidden";
  document.getElementById('lbl_asientos6').style.visibility = "hidden";
}
function fn_mostrarErrores(){
  var region = document.getElementById('regiones');
  var comuna = document.getElementById('comunas');
  var direccion = document.getElementById('txt_direccion').value;
  var numero = document.getElementById('txt_numero').value;
  var cont = 0;

  var validacion =true;

  if(region.value==0 || region.value==""){
      document.getElementById('lbl_region').style.visibility = "visible";
      validacion = false;
      cont = cont-1;
  }else{
      document.getElementById('lbl_region').style.visibility = "hidden";
      validacion = true;
      cont = cont+1;
  }

  if(comuna.value==0 || comuna.value=="-"){
      document.getElementById('lbl_comuna').style.visibility = "visible";
      validacion = false;
      cont = cont-1;
  }else{
      document.getElementById('lbl_comuna').style.visibility = "hidden";
      validacion = true;
      cont = cont+1;
  }

  if(direccion == ""){
      document.getElementById('lbl_direccion').style.visibility = "visible";
      validacion = false;
      cont = cont-1;
  }else{
      document.getElementById('lbl_direccion').style.visibility = "hidden";
      validacion = true;
      cont = cont+1;
  }
  
  if(numero == ""){
      document.getElementById('lbl_numero').style.visibility = "visible";
      validacion = false;
      cont = cont-1;
  }else{
      document.getElementById('lbl_numero').style.visibility = "hidden";
      validacion = true;
      cont = cont+1;
  }
  if(cont == 4){
      location.href ="seleccion";
  }
}

    const open = document.getElementById('btn_mostrar');
    const modal_f = document.getElementById('modal_final'); 
    const close = document.getElementById('close');

    open.addEventListener('click', () =>{
        modal_f.classList.add('show');
        alert('Transfer Reserved')
        location.href="index.html"
    });

    close.addEventListener('click', () =>{
        modal_f.classList.remove('show');
    });