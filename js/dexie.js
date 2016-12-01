var store1 = new IDBStore({
  dbVersion: 1,
  storeName: 'store1',
  keyPath: 'ID',
  autoIncrement: true,
  onStoreReady: function(){
    console.log('Store ready!');
  }
});

var customers = new IDBStore({
  dbVersion: 1,
  storeName: 'customer',
  keyPath: 'id',
  autoIncrement: true,
  onStoreReady: function(){
    console.log('Store ready!');
  }
});



function adddeleteupdate(){
    $("#result1").html("<input type=\"text\" name=\"content\" id=\"head\" placeholder=\"Enter content\"><input type=\"url\" placeholder=\"Enter URL\" name=\"url\" id=\"url\"><button id=\"but3\" >Add</button><br><br>")
    $("#result2").html("<input type=\"text\" placeholder=\"id\" name=\"id\" id=\"id4\"><button id=\"but4\" >Delete</button>") 

    $("#but3").click(function(){
    	var data = {
    		head: $("#head").val(),
    		url: $("#url").val()
    	}
    	store1.put(data);
    	alert("added");
    })
    
    $("#but4").click(function(){
    	var removeId = Number($("#id4").val());
    	alert(removeId)
    	store1.remove(removeId);
    	alert(removeId)
    	alert(typeof(removeId))
    	alert("deleted");
    })

    
}

function success2(result){
    result.forEach(function(item){
    	$("#tr").append("<th><h2><a " + "href= "+"\""+item.url+"\"" +"\""+">"+ item.head+"<a></h2></th>");
	});
}

function error2(){
    	alert("error");
}


function menu(){ 
    $("#tr").html("<th><h1><a onclick=\"menu()\">Menu</a></h1></th>") ; 
   	store1.getAll(success2, error2)
}



//--------------------------------------------------------------------------------------------------------------


        
var store2 = new IDBStore({
  dbVersion: 2,
  storeName: 'store2',
  keyPath: 'ID',
  autoIncrement: true,
  onStoreReady: function(){
    console.log('Store ready!');
  },
  indexes: [
    { name: 'info', keyPath: 'info', unique: false, multiEntry: false }
  ]
});

function success1(data){
	data.forEach(function(item){
		$("#result1").append(item.info)
	})
}
function error1(){
	alert("error")
}

function home(){
    $("#result1").html("");
    $("#result2").html("");
    store2.getAll(success1, error1)
}

var addId;
var deleteId;
function add(){
    $("#result1").html("<br><input type=\"text\" placeholder=\"id\" name=\"id\" id=\"id1\"><input type=\"text\" name=\"content\" id=\"content1\" placeholder=\"Enter content\"><button id=\"but1\" >Add</button><br><br>")
    $("#result2").html("<input type=\"text\" placeholder=\"id\" name=\"id\" id=\"id2\"><button id=\"but2\" >Delete</button>")

    $("#but1").click(function(){
    	addId = $("#id1").val();
        var i =$("#content1").val();
        var data ={
                ID:addId,
                info:i
        }
        store2.put(data);
    })

    $("#but2").click(function(){
    	deleteId = $("#id2").val();
    	deleteId = Number(deleteId);
    	store2.remove(deleteId);
    	alert("deleteId")
    })

}

//---------------------------------------------------------------------------------------------------------------


function contact(){
    $("#result1").html("");
    $("#result2").html("");


   
}

function gallery(){
    $("#result2").html("");
	$("#result1").html("<div class=\"responsive\"><div class=\"img\"> <a target=\"_blank\" href=\"images/download.jpg\"><img src=\"images/download.jpg\" alt=\"Trolltunga Norway\" width=\"300\" height=\"200\"></a><div class=\"desc\">Add a description of the image here</div></div></div><div class=\"responsive\"><div class=\"img\"><a target=\"_blank\" href=\"images/download(1).jpg\"><img src=\"images/download(1).jpg\" alt=\"Forest\" width=\"600\" height=\"400\"></a><div class=\"desc\">Add a description of the image here</div></div></div><div class=\"responsive\"><div class=\"img\"><a target=\"_blank\" href=\"images/download(2).jpg\"><img src=\"images/download(2).jpg\" alt=\"Northern Lights\" width=\"600\" height=\"400\"></a><div class=\"desc\">Add a description of the image here</div></div></div><div class=\"responsive\"><div class=\"img\"><a target=\"_blank\" href=\"images/download(3).jpg\"><img src=\"images/download(3).jpg\" alt=\"Mountains\" width=\"600\" height=\"400\"></a><div class=\"desc\">Add a description of the image here</div></div></div>");
       
}
