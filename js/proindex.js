//*****************Global Data and Functions***********************************
var dataToRender = { } ;
var rawText;
var compiled;
var i1=1, i2=2, i3=3, i4=4, i5=5;

var onsuccess = function(data){
	var i = "1";
	dataToRender = { };
	data.forEach(function(item){
		dataToRender["homeData"+i] = item.info;
		i = Number(i) + 1;
		i = String(i);
	})	
	render();	
}	

function getData(a,b,c,d,e){
	if(a==1){
		var r = store10.getAll(onsuccess);
	}
	if(a==2){
		var r = store11.getAll(onsuccess);
	}
	if(a==3){
		var r = store12.getAll(onsuccess);
	}
	if(a==4){
		var r = store13.getAll(onsuccess);
	}
	if(a==5){
		var r = store14.getAll(onsuccess);
	}
}

function render(){
	if(i1==1){var a="dust"; }
	else if(i1==2){var a="dust1"; }
	else if(i1==3){var a="dust2"; }
	else if(i1==4){var a="dust3"; }
	else if(i1==5){var a="dust4"; }
	dust.render(a ,dataToRender, function(err, out){
		$("#display1").html("");
		$("#map").html("");
		$("#display").html(out);
		$("#newsDiv").html("");
	});
}



/**********************************************************************************************************************
***************************Dust Handlers*****************************************************************************
************************************************************************************************************************/


function home(){
	rawText = $("#dustTemplate1").text();
	compiled = dust.compile(rawText,'dust');
	dust.loadSource(compiled);
	i1 = 1; 
	getData(i1,i2,i3,i4,i5)
}

function menu1(){
	rawText = $("#dustTemplate2").text();
	compiled = dust.compile(rawText,'dust1');
	dust.loadSource(compiled);
	i1 = 2; 
	dataToRender = getData(i1,i2,i3,i4,i5)
}

function menu2(){
	rawText = $("#dustTemplate3").text();
	compiled = dust.compile(rawText,'dust2');
	dust.loadSource(compiled);
	i1 = 3;
	i2 = "dust2" 
	dataToRender = getData(i1,i2,i3,i4,i5)
}


function menu3(){
	rawText = $("#dustTemplate4").text();
	compiled = dust.compile(rawText,'dust3');
	dust.loadSource(compiled);
	i1 = 4; 
	dataToRender = getData(i1,i2,i3,i4,i5)
}

function menu4(){
	rawText = $("#dustTemplate5").text();
	compiled = dust.compile(rawText,'dust4');
	dust.loadSource(compiled);
	i1 = 5; 
	dataToRender = getData(i1,i2,i3,i4,i5)
}






/**************************************************************************************************************************
*********************************IDBWrapper************************************************************************************
*****************************************************************************************************************************/

var store10 = new IDBStore({
  dbVersion: 1,
  storeName: 'store10',
  keyPath: 'ID',
  autoIncrement: true,
  onStoreReady: function(){
    console.log('Store10 ready!');
  },
  indexes: [
    { name: 'info10', keyPath: 'info10', unique: false, multiEntry: false }
  ]
});

var store11 = new IDBStore({
  dbVersion: 1,
  storeName: 'store11',
  keyPath: 'ID',
  autoIncrement: true,
  onStoreReady: function(){
    console.log('Store11 ready!');
  },
  indexes: [
    { name: 'info11', keyPath: 'info11', unique: false, multiEntry: false }
  ]
});

var store12 = new IDBStore({
  dbVersion: 1,
  storeName: 'store12',
  keyPath: 'ID',
  autoIncrement: true,
  onStoreReady: function(){
    console.log('Store12 ready!');
  },
  indexes: [
    { name: 'info12', keyPath: 'info12', unique: false, multiEntry: false }
  ]
});

var store13 = new IDBStore({
  dbVersion: 1,
  storeName: 'store13',
  keyPath: 'ID',
  autoIncrement: true,
  onStoreReady: function(){
    console.log('Store13 ready!');
  },
  indexes: [
    { name: 'info13', keyPath: 'info13', unique: false, multiEntry: false }
  ]
});

var store14 = new IDBStore({
  dbVersion: 1,
  storeName: 'store14',
  keyPath: 'ID',
  autoIncrement: true,
  onStoreReady: function(){
    console.log('Store14 ready!');
  },
  indexes: [
    { name: 'info14', keyPath: 'info14', unique: false, multiEntry: false }
  ]
});

var store15 = new IDBStore({
  dbVersion: 1,
  storeName: 'store15',
  keyPath: 'ID',
  autoIncrement: true,
  onStoreReady: function(){
    console.log('Store15 ready!');
  },
  indexes: [
    { name: 'info15', keyPath: 'info145', unique: false, multiEntry: false }
  ]
});



var addId;
var deleteId;
function add(){
	$("#map").html("");
	$("#newsDiv").html("");
    $("#display").html("<form><br><label>Enter Store Number</label><input  type=\"text\" name=\"storeNumber\" id=\"storeNumber\"><label>Enter ID</label><input type=\"text\"  name=\"id\" id=\"id1\"><label>Enter Content</label><input type=\"text\" name=\"content\" id=\"content1\" ><button id=\"but1\" >Add</button><br><br></form>")
    $("#display1").html("<br><label>Enret Store Number</label><input  type=\"text\" name=\"storeNumber\" id=\"storeNumber1\"><label>Enret ID</label><input type=\"text\"  name=\"id\" id=\"id2\"><button id=\"but2\" >Delete</button>")

    $("#but1").click(function(){
    	$("#storeNumber").html("");
    	addId = $("#id1").val();
        var i =$("#content1").val();
        var data ={
                ID:addId,
                info:i
        }
        if(Number($("#storeNumber").val())==1){
        	store10.put(data);
        }
        if(Number($("#storeNumber").val())==2){
        	store11.put(data);
        }
        if(Number($("#storeNumber").val())==3){
        	store12.put(data);
        }
        if(Number($("#storeNumber").val())==4){
        	store13.put(data);
        }
        if(Number($("#storeNumber").val())==5){
        	store14.put(data);
        }
        
    })

    $("#but2").click(function(){
    	deleteId = $("#id2").val();
    	//deleteId = Number(deleteId);
    	if(Number($("#storeNumber1").val())==1){

    		store10.remove(deleteId);
    	}
    	if(Number($("#storeNumber1").val())==2){
    		store11.remove(deleteId);
    	}
    	if(Number($("#storeNumber1").val())==3){
    		alert("removing")
    		store12.remove(deleteId);
    	}
    	if(Number($("#storeNumber1").val())==4){
    		store13.remove(deleteId);
    	}
    	if(Number($("#storeNumber1").val())==5){
    		store14.remove(deleteId);
    	}
    	alert("deleteId")
    })

}



//************************************************************************************************************
function gallery(){
	$("#map").html("");
    $("#display").html("");
    $("#newsDiv").html("");
	$("#display1").html("<div class=\"responsive\"><div class=\"img\"> <a target=\"_blank\" href=\"images/download.jpg\"><img src=\"images/download.jpg\" alt=\"Trolltunga Norway\" width=\"300\" height=\"200\"></a><div class=\"desc\">Add a description of the image here</div></div></div><div class=\"responsive\"><div class=\"img\"><a target=\"_blank\" href=\"images/download(1).jpg\"><img src=\"images/download(1).jpg\" alt=\"Forest\" width=\"600\" height=\"400\"></a><div class=\"desc\">Add a description of the image here</div></div></div><div class=\"responsive\"><div class=\"img\"><a target=\"_blank\" href=\"images/download(2).jpg\"><img src=\"images/download(2).jpg\" alt=\"Northern Lights\" width=\"600\" height=\"400\"></a><div class=\"desc\">Add a description of the image here</div></div></div><div class=\"responsive\"><div class=\"img\"><a target=\"_blank\" href=\"images/download(3).jpg\"><img src=\"images/download(3).jpg\" alt=\"Mountains\" width=\"600\" height=\"400\"></a><div class=\"desc\">Add a description of the image here</div></div></div>");
}




function contact() {
		$("#display1").html("");
		$("#display").html("");
		$("#newsDiv").html("");
        var uluru = {lat: 12.931611, lng: 77.628411};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 20,
          center: uluru
        });

        var contentString = "<h1>Zenrays Technologies </h1><br>456, 8th Main Rd, Koramangala 4th Block, Koramangala, Bengaluru, Karnataka 560034 <br><a href=\"http://zenrays.com/\">zenrays.com</a> <br>099164 82106 <br>Open now:  9AM-9PM ";

        var infowindow = new google.maps.InfoWindow({
          content: contentString,
          maxWidth: 200
        });

        var marker = new google.maps.Marker({
          position: uluru,
          map: map,
          title: 'Uluru (Ayers Rock)'
        });
        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
}


function clear(){
	$("#display1").html("");
	$("#display").html("");
	$("#map").html("");
	$("#newsDiv").html("");	
}



function addNews(){
	$("#display").html("");
	$("#newsDiv").html("");
	$("#map").html("");
	$("#newsDiv").html("");
	$("#display1").html("<form><label>Enter News</label><br><br><br><input type=\"text\" name=\"news\" width=\"500px\" id=\"newsInput\"><br><br><button id=\"news\">Submit</button></form>");
	$("#news").click(function(){

		var dataToAdd = {
			info15: $("#newsInput").val()
		}
	})
}