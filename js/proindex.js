"use strict";
var dataToRender = {};
var rawText;
var a;
var r;
var compiled;
var i1 = 1;
var i2 = 2;
var i3 = 3;
var i4 = 4;
var i5 = 5;
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////Object Store Creation/////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Creating Database objectstore
var store20 = new IDBStore({      //Creating Instance of the Objectstore
    dbVersion: 1,
    storeName: "store20",
    keyPath: "ID",                       //Keypath OR the Primary key for Objectstore
    autoIncrement: true,                 //For Auto incrementing Keypath
    onStoreReady: function () {
        console.log("Store20 ready!");     //If everything goes perfect Display "store is ready"
    },
    indexes: [{
        name: "info",
        keyPath: "info",
        unique: false,
        multiEntry: false
    }]     // Indexing key, other than keypath to using in query

});
//Another Objectstore
var store21 = new IDBStore({
      dbVersion: 1,
      storeName: "store2",
      keyPath: "ID",
      autoIncrement: true,
      onStoreReady: function () {
          console.log("Store21 ready!");
      },
      indexes: [{
          name: "info", keyPath: "info", unique: false, multiEntry: false }
      ]
});
//Another Objectstore
var store22 = new IDBStore({
    dbVersion: 1,
    storeName: "store22",
    keyPath: "ID",
    autoIncrement: true,
    onStoreReady: function () {
        console.log("Store22 ready!");
    }, 
    indexes: [
        { name: "info", keyPath: "info", unique: false, multiEntry: false }
    ]
});
//Another Objectstore
var store23 = new IDBStore({
    dbVersion: 1,
    storeName: "store23",
    keyPath: "ID",
    autoIncrement: true,
    onStoreReady: function () {
        console.log("Store23 ready!");
    },
    indexes: [
        { name: "info", keyPath: "info", unique: false, multiEntry: false }
    ]
});
//Another Objectstore
var store24 = new IDBStore({
    dbVersion: 1,
    storeName: "store24",
    keyPath: "ID",
    autoIncrement: true,
    onStoreReady: function () {
      console.log("Store24 ready!");
    },
    indexes: [
        { name: "info", keyPath: "info", unique: false, multiEntry: false }
    ]
});
//Another Objectstore
var store25 = new IDBStore({
    dbVersion: 2,
    storeName: "store25",
    keyPath: "ID",
    autoIncrement: true,
    onStoreReady: function () {
        console.log("Store25 ready!");
    },
    indexes: [
       { name: "info", keyPath: "info", unique: false, multiEntry: false }
  ]
});







function render() {
    if (i1 === 1) {
        a = "dust";
    } else if (i1 === 2) {
        a = "dust1";
    } else if (i1 === 3) {
        a = "dust2";
    } else if (i1 === 4) {
        a = "dust3";
    } else if (i1 === 5) {
        a = "dust4";
    }

    dust.render(a, dataToRender, function (err, out) {
        $("#display1").html("");
        $("#map").html("");
        $("#display").html(out);
        $("#newsDiv").html(err);
    });
}

//data succssfully added to IDBstore
var onsuccess = function (data) {
    var i = "1";
    dataToRender = {};
    data.forEach(function (item) {                         //Iterate over the Object store
        dataToRender["homeData" + i] = item.info;     //giving back the dust template with values from IDB
        i = Number(i) + 1;                          //Incrementing ID value to Iterate over the Object store
        i = String(i);
    });
    render();
};

function getData(a) {
    if (a === 1) {
        r = store20.getAll(onsuccess);
    }
    if (a === 2) {
        r = store21.getAll(onsuccess);
    }
    if (a === 3) {
        r = store22.getAll(onsuccess);
    }
    if (a === 4) {
        r = store23.getAll(onsuccess);
    }
    if (a === 5) {
        r = store24.getAll(onsuccess);
    }
}





/**********************************************************************************************************************
***************************Dust Handlers*****************************************************************************
************************************************************************************************************************/


var success =function (data) {
    $("#newsDiv").html("");
    data.forEach(function(event) {
         $("#newsDiv").append("<br>"+event.info+" <br>");
    });
};
//Extracting data from IDBstore for "home" menu
function home() {
    rawText = $("#dustTemplate1").text();           //collecting raw data from dust template
    compiled = dust.compile(rawText,"dust");          //compiling raw data and giving name "dust"
    dust.loadSource(compiled);                    //loadind the compiled data "compiled"
    i1 = 1;
    getData(i1);
    store25.getAll(success);
}
//Extracting data from IDBstore for "menu1" menu
function menu1() {
    rawText = $("#dustTemplate2").text();
    compiled = dust.compile(rawText,"dust1");
    dust.loadSource(compiled);
    i1 = 2;
    dataToRender = getData(i1);
}
//Extracting data from IDBstore for "menu2" menu
function menu2() {
    rawText = $("#dustTemplate3").text();
    compiled = dust.compile(rawText,"dust2");
    dust.loadSource(compiled);
    i1 = 3;
    i2 = "dust2" ;
    dataToRender = getData(i1);
}

//Extracting data from IDBstore for "menu3" menu
function menu3(){
    rawText = $("#dustTemplate4").text();
    compiled = dust.compile(rawText,"dust3");
    dust.loadSource(compiled);
    i1 = 4;
    dataToRender = getData(i1);
}
//Extracting data from IDBstore for "menu4" menu
function menu4() {
    rawText = $("#dustTemplate5").text();
    compiled = dust.compile(rawText,"dust4");
    dust.loadSource(compiled);
    i1 = 5;
    dataToRender = getData(i1);
}






/**************************************************************************************************************************
*********************************IDBWrapper************************************************************************************
*****************************************************************************************************************************/

var success111 = function () {       //success funtion for adding data
    alert("added");
}
var error111 = function () {        //error function for adding data
    alert("error");
}

var addId;
var deleteId;


//function for adding data to Obectstore
function add() {
    $("#map").html("");             //Clearing Current content
    $("#newsDiv").html("");         //Clearing Current content

//displaying Input forms for add and Delete
    $("#display").html("<form><br><label>Enter Store Number</label><input  type=\"text\" name=\"storeNumber\" id=\"storeNumber\"><label>Enter ID</label><input type=\"text\"  name=\"id\" id=\"id1\"><label>Enter Content</label><input type=\"text\" name=\"content\" id=\"content1\" ><button id=\"but1\" >Add</button><br><br></form>")
    $("#display1").html("<br><label>Enter Store Number</label><input  type=\"text\" name=\"storeNumber\" id=\"storeNumber1\"><label>Enret ID</label><input type=\"text\"  name=\"id\" id=\"id2\"><button id=\"but2\" >Delete</button>")

    $("#but1").click(function () {          // onclick of add button
        addId = $("#id1").val();            //ID of Object to be added
        var i = $("#content1").val();       //Content to be added to Objectstore
        var data = {                        // Object to add
            ID:addId,
            info:i
        }
        //Checking for  Which ObjectStore should be  selected
        if(Number($("#storeNumber").val())==1){
            store20.put(data,success111, error111);    //  Addind object to the  ObjectStore
        }
        //Checking for  Which ObjectStore should be  selected
        if(Number($("#storeNumber").val())==2){
            store21.put(data, success111, error111);   //  Addind object to the  ObjectStore
        }
        //Checking for  Which ObjectStore should be  selected
        if(Number($("#storeNumber").val())==3){
            store22.put(data, success111, error111);   //  Addind object to the  ObjectStore
        }
        //Checking for  Which ObjectStore should be  selected
        if(Number($("#storeNumber").val())==4){
            store23.put(data, success111, error111);    //  Addind object to the  ObjectStore
        }
        //Checking for  Which ObjectStore should be  selected
        if(Number($("#storeNumber").val())==5){
            store24.put(data, success111, error111);     //  Addind object to the  ObjectStore
        }
    })


    $("#but2").click(function(){
        deleteId = $("#id2").val();
        //deleteId = Number(deleteId);
        if(Number($("#storeNumber1").val()) == 1) {
            alert("HI")
            store20.remove(deleteId);              //removing Object from Objectstore corresponding to "deleteID"
        }
        if(Number($("#storeNumber1").val()) == 2) {
            store21.remove(deleteId);
        }
        if(Number($("#storeNumber1").val()) == 3) {
            alert("removing")
            store22.remove(deleteId);
        }
        if(Number($("#storeNumber1").val()) == 4) {
            store23.remove(deleteId);
        }
        if(Number($("#storeNumber1").val()) == 5) {
            store24.remove(deleteId);
    }
    alert("deleteId");
    })
}



//************************************************************************************************************

//Sample Gallery which contain images to Demo app caching
/*function gallery(){
    $("#map").html("");
    $("#display").html("");
    $("#newsDiv").html("");
    $("#display1").html("<div class=\"responsive\"><div class=\"img\"> <a target=\"_blank\" href=\"images/download.jpg\"><img src=\"images/download.jpg\" alt=\"Trolltunga Norway\" width=\"300\" height=\"200\"></a><div class=\"desc\">Add a description of the image here</div></div></div><div class=\"responsive\"><div class=\"img\"><a target=\"_blank\" href=\"images/download(1).jpg\"><img src=\"images/download(1).jpg\" alt=\"Forest\" width=\"600\" height=\"400\"></a><div class=\"desc\">Add a description of the image here</div></div></div><div class=\"responsive\"><div class=\"img\"><a target=\"_blank\" href=\"images/download(2).jpg\"><img src=\"images/download(2).jpg\" alt=\"Northern Lights\" width=\"600\" height=\"400\"></a><div class=\"desc\">Add a description of the image here</div></div></div><div class=\"responsive\"><div class=\"img\"><a target=\"_blank\" href=\"images/download(3).jpg\"><img src=\"images/download(3).jpg\" alt=\"Mountains\" width=\"600\" height=\"400\"></a><div class=\"desc\">Add a description of the image here</div></div></div>");
}
*/
//Do display the Contact Information in Google Map
function contact() {
    $("#display1").html("");   //Clearing the Home Page
    $("#display").html("");    //Clearing the Home Page
    $("#newsDiv").html("");    //Clearing the Home Page
    var zen = {lat: 12.931611, lng: 77.628411};         //Coordinates of the Zenrays in Google map
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 20,              // Amount of Zoom
        center: zen            //Centre to be Pointed
    });
        //Content displayed on the Pointed Location
    var contentString = "<h1>Zenrays Technologies </h1><br>456, 8th Main Rd, Koramangala 4th Block, Koramangala, Bengaluru, Karnataka 560034 <br><a href=\"http://zenrays.com/\">zenrays.com</a> <br>099164 82106 <br>Open now:  9AM-9PM ";

        //Displaying content
    var infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 200
    });

        //Marking the Location
    var marker = new google.maps.Marker({
        position: zen,
        map: map,
        title: "Zenrays"
    });
    marker.addListener("click", function() {          //To display information Window
        infowindow.open(map, marker);
    });
}


//Adding recent News To Database (IDB)
function addNews() {
    $("#display").html("");           //Clearing the Home Page
    $("#newsDiv").html("");           //Clearing the Home Page
    $("#map").html("");               //Clearing the Home Page
    $("#newsDiv").html("");           //Clearing the Home Page
    //Displaying input form
    $("#display1").html("<form><label>Enter News</label><br><br><br><input type=\"text\" name=\"news\" width=\"500px\" id=\"newsInput\"><br><br><button id=\"news\" >Submit</button></form>");
    $("#news").click(function(){      //After Clicking the Button
        var g = $("#newsInput").val();     //input Data(Recent News)
        var dataToAdd = {             //Creating data Object
              info: g
        }
        store25.put(dataToAdd);       //adding Data object ObjectStore--
    });
}