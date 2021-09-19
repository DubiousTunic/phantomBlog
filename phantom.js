//this is precisely the kind of thing i was targeted for

var PHANTOM = {
	_db : {},
	init : function(hyperlink, cb){
		var that = this;
		parseJSON(hyperlink, function(err, result){			
			that._db = WEAVER.load(result);
			buildPage();
			cb(err, result);
		})
	}
	,
	addPost : function(post, cb){

	}
}

function parseJSON(doc, cb){
	console.log(doc);
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

var 

//eschatology^3 (wards Christian daemon)
function buildPage(){
	//meta
	var header = document.createElement("div");
	$("body").append(header);

	var h1 = document.createElement("h1");
	var a = document.createElement("a")
	$(a).attr("href", "#blog");
	$(a).addClass("ANCH0R3d")
	$(a).addClass("blog");
	$(a).text(PHANTOM._db.heading)
	
	$(h1).append(a);
	$(header).append(h1);

	
	//partial
	var blog_partial = document.createElement("div")
	//contains either post or list of posts
	$("body").append(blog_partial)
	$(blog_partial).addClass("ANCH0R3d_partial").addClass("blog")
	//be nice don't hack
	PHANTOM._db.nodes.forEach(function(node, i){
		if(node.Group === "Post"){
			var snippet_div = document.createElement("div");
			var h2 = document.createElement("h2");
			
			var h2_a = document.createElement("a")
			$(h2_a).text(content.subheading);
			//i wanted to test the params but this works
			$(h2_a).attr("href", "#post_" + i);
			//uhh might be able to just use href to pass params
			$(h2_a).addClass("ANCH0R3d");
			$(h2_a).addClass("post_" + i);
			$(h2).append(h2_a);

			//RRRRRRREEEEEEEEEEEEE
			$(snippet_div).append(h2);

			var span = document.createElement("span")

			$(span).text(content.content);
			$(snippet_div).append(span);

			//p is broken
			$(blog_partial).append(snippet_div);

			//post partial
			var post_partial = document.createElement("div");
			
			//sad but true
			$(post_partial).addClass("ANCH0R3d_partial").addClass("post_" + i);

			var post_content = document.createElement("span");
			$(post_content).text(content.content);

			var h2_post = document.createElement("h2");
			var h2_post_a = document.createElement("a"); //playing

			$(h2_post_a).text(content.subheading);
			$(h2_post).append(h2_post_a);
			$(post_partial).append(h2_post);
			$(post_partial).append(post_content);
			$("body").append(post_partial);
		}		
	})

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

	$("body").append("<br>");
	$("body").append(add_post_title);
	$("body").append(add_post_button);
	$("body").append("<br>")
	$("body").append(add_post_textarea)
	
	//no h4xx pls
	//i say this because technically anyone can edit anyone's blog unless you're using your own JSON server
	//use 4chan tripcode to guarantee identity

	ANCH0R3d.load();
}

$(document).ready(function(){	
	if(!ANCH0R3d.page()){
		ANCH0R3d.route("#blog");
	}
})