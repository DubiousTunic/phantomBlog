var PHANTOM = {
	pointer : null,
	weave : null,
	init : function(hyperlink, cb){
		var that = this;
		parseJSON(hyperlink, function(err, result){			
			that.weave = WEAVER.load(result);
			console.log(that.weave);
			buildHeading();
			buildPartial(function(){
				that.weave.cluster.loaded = 1;
				if(!ANCH0R3d.page()){
					ANCH0R3d.route("#blog");
				}
				else{
					ANCH0R3d.load();
				}
			});
			cb(err, result);
		})
	}
	,
	addPost : function(post, cb){

	}
}

//magick IT'S VERY EFFECTIVE
$(document).on("ANCH0R3d", function () {
	//the reason my code is perfect is	
			//first error not caused by USSS
	console.log("magick");
	console.log(PHANTOM.weave.cluster.loaded);
	/*if(!PHANTOM.weave.cluster.loaded){
		buildPage(function(){
			PHANTOM.weave.cluster.loaded = 1;
		})
	}*/
	//now that i have the Reputation she will leave me alone		
});

$(document).ready(function(){

})
//bind

function parseJSON(doc, cb){
	
	//if json is passed
	if(doc.isJson){
		cb(null, doc);
	}
	//if a hyperlink is passed
	else{
		console.log("processing json hyperlink")
		$.ajax({			
			url : doc,
		 	success : function(dat){
				cb(null, dat);
			},
			error : function(err){
				console.log(err);
				cb(err);
			}
		})
	}
}

function isJson(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

//mi5 magick
function mintPost(post){
	PHANTOM.weave.cluster.loaded = 0;
	PHANTOM.weave.addNode(post);

	//let's add the post div

	//(update a db without passing arguments)
	lance();
}

//father magick 
//mary is shrinking my jaw line
function lance(){
	$.ajax({
		type: "PUT",
		contentType : "application/json",
		url : "https://jsonblob.com/api/jsonBlob/889003392459096064",
		data : JSON.stringify(PHANTOM.weave.db()),
		success : function(){
			//this works because the pointer is updated by addNode and last returns the last el of the pointer			
			if(PHANTOM.weave.cluster.loaded === 0){		
				buildPartial(function(){
					PHANTOM.weave.cluster.loaded = 1;
					var id = PHANTOM.weave.last()._id;
					ANCH0R3d.route("#post_" + id);
					//dangerous is my middle name
					//h4czX://su55
					ANCH0R3d._show_div("post_" + id);
				})
			//conjured Napalm Records
			}
		//VEGETA WHAT DOES THIS SCOUTER SAY ABOUT HIS POWER LEVEL
		//...tzoah rotachot!
		}
	})
}

/*
	
	"heading" : "My Phantom"
    "contents" : [
        {
            "subheading" : "Post 1",
            "date" : "TODay",
            "content" : "Lorem ipsum hocus pocus stupendo!"
        },
        {
            "subheading" : "Post 2",
            "date" : "YESTAday",
            "content" : "Lorem ipsum hocus pocus stupendo!"
        }
    ]
}

*/
function buildHeading(){
	
	//meta
	var header = document.createElement("div");
	$("body").append(header);
	var h1 = document.createElement("h1");
	var a = document.createElement("a")
	$(a).attr("href", "#blog");
	$(a).addClass("ANCH0R3d")
	$(a).addClass("blog");
	//i guess you can store arbitrary data in the weaver too
	$(a).text(PHANTOM.weave.db().heading)
	
	$(h1).append(a);
	$(header).append(h1);

	var add_post = document.createElement("button");
	$(add_post).text("Mint a New Post!");
	$("body").append("<br>")
	$("body").append(add_post);

	$(add_post).click(function(e){
		e.preventDefault(); //HAHAHHAHA
		$(add_post_title).fadeToggle(777);
		$(add_post_textarea).fadeToggle(777);
		$(add_post_button).fadeToggle(777);
	})

	var add_post_title = document.createElement("input");
	var add_post_textarea = document.createElement("textarea");
	var add_post_button = document.createElement("button");

	$(add_post_title).attr("placeholder", "Post Title").hide();
	$(add_post_textarea).attr("placeholder", "Post Content").width(555).height(555).hide();
	$(add_post_button).text("Post!").hide();
	//remember to lance the post Group

	$(add_post_button).click(function(e){
		e.preventDefault();
		mintPost({
			subheading : $(add_post_title).val(),
			content: $(add_post_textarea).val(),
			Group : "Post"
		})
		$(add_post_title).hide();
		$(add_post_textarea).hide();
		$(add_post_button).hide();
	})

	$("body").append("<br>");
	$("body").append(add_post_title);
	$("body").append(add_post_button);
	$("body").append("<br>")
	$("body").append(add_post_textarea)
}

//eschatology^99910000000 (wards Christian daemon)
function buildPartial(cb){	
	$(".partial").empty();

	//partial
	var blog_partial = document.createElement("div")
	//contains either post or list of posts
	$("body").append(blog_partial)
	$(blog_partial).addClass("ANCH0R3d_partial").addClass("blog")
	//be nice don't hack :ref Tripcodes (yes you lost the tripcodes)

	PHANTOM.weave.getNodes().toArray().forEach(function(node, i){
		if(node.Group === "Post"){

			var snippet_div = document.createElement("div");
			$(snippet_div).css({"margin" : "55px", "padding" : "33px", "border-bottom" : "2px dotted goldenrod", 
				"border-top" : "7px solid CRIMSON"})

			var h2 = document.createElement("h2");
			
			var h2_a = document.createElement("a")
			$(h2_a).text(node.subheading);
			//i wanted to test the params but this works
			$(h2_a).attr("href", "#post_" + i);
			//uhh might be able to just use href to pass params
			$(h2_a).addClass("ANCH0R3d");
			$(h2_a).addClass("post_" + i);
			$(h2).append(h2_a);

			//RRRRRRREEEEEEEEEEEEE
			$(snippet_div).append(h2);

			var span = document.createElement("span")

			$(span).text(node.content);
			$(snippet_div).append(span);


			//p is broken
			$(blog_partial).append(snippet_div);

			//post partial
			var post_partial = document.createElement("div");
			
			//sad but true
			$(post_partial).addClass("ANCH0R3d_partial").addClass("post_" + i);

			var post_content = document.createElement("span");
			$(post_content).text(node.content);

			var h2_post = document.createElement("h2");
			var h2_post_a = document.createElement("a"); //playing

			$(h2_post_a).text(node.subheading);
			$(h2_post).append(h2_post_a);
			$(post_partial).append(h2_post);
			$(post_partial).append(post_content);
			$("body").append(post_partial);

			//HEX1MEX
		}		
	})
	
	//no h4xx pls
	//i say this because technically anyone can edit anyone's blog unless you're using your own JSON server
	//use 4chan tripcode to guarantee identity

	cb();
}

$(document).ready(function(){	
	if(!ANCH0R3d.page()){
		ANCH0R3d.route("#blog");
	}
})