//TODO: esc closes txt dialogue

var PHANTOM = {
	reave : null,
	init : function(hyperlink, cb){
		var that = this;
		parseJSON(hyperlink, function(err, result){			
			that.reave = REAVER.load(result);
			console.log(that.reave);
			that.reave.cluster.page_limit = 13;
			var obj = ANCHOR.getParams();
			if(obj && Object.keys(obj).length === 0 && obj.constructor === Object){
				PHANTOM.reave.cluster.page = 1;				
			}
			else{
				//why is it called PHANTOM
				//well Jesus is jealous of airplanes
				//so we'll take the Fighting Phantom for the NA
				//((they)) not letting me code because it's called PHANTOM and that's Unchristian
				PHANTOM.reave.cluster.page = ANCHOR.getParams() ? parseInt(ANCHOR.getParams().page) : 1;
			}
			buildHeading();
			buildPartial(function(){
				that.reave.cluster.loaded = 1;
				if(!ANCHOR.page()){
					ANCHOR.route("#blog");
				}
				else{
			//tzoah rotachot^727
					ANCHOR.load();
				}
			});
			cb(err, result);
		})
	}
	,
	addPost : function(post, cb){

	}
}



/*//magick IT'S VERY EFFECTIVE
$(document).on("ANCHOR", function () {
	//the reason my code is perfect is	
			//first error not caused by USSS
	console.log("magick");
	var obj = ANCHOR.getParams();
	if(obj && Object.keys(obj).length === 0 && obj.constructor === Object)
		PHANTOM.reave.cluster.page = 1;
	else
		PHANTOM.reave.cluster.page = ANCHOR.getParams() ? parseInt(obj.page) : 1;
	t

	//console.log(PHANTOM.reave.cluster.loaded);
	//if(!PHANTOM.reave.cluster.loaded){
		//buildPartial(function(){
			//PHANTOM.reave.cluster.loaded = 1;
		//})
	//}
	//now that i have the Reputation she will leave me alone		
})

$(document).ready(function(){

})
*/
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

function deletePost(id){
	PHANTOM.reave.deleteNode({_id : id});
	PHANTOM.reave.cluster.loc = "blog";
	lance();
}

function updatePost(id, params){
	if(params.subheading === ""){
		deletePost(id);
	}
	else{
		PHANTOM.reave.getNodes({_id : id}).limit(13).setNodes(params);
		console.log(PHANTOM.reave.toArray());
		lance()	
	}
	
}

//mi5 magick
function mintPost(post){
	//master buddha
	//PHANTOM.reave.cluster.loaded = 0;

	PHANTOM.reave.addNode(post);

	//let's add the post div

	//(update a db without passing arguments)
	lance();
}

//father magick 
function lance(){
	$.ajax({
		type: "PUT",
		contentType : "application/json",
		url : "https://jsonblob.com/api/jsonBlob/889003392459096064",
		data : JSON.stringify(PHANTOM.reave.db()),
		success : function(){
			//this works because the pointer is updated by addNode and last returns the last el of the pointer	
			//phantom is the blog software reaver is the db it's using	
			console.log(PHANTOM.reave.toArray())

			//this is way too complex!
			if(PHANTOM.reave.last())
				var id = PHANTOM.reave.last()._id;
			else
				var id = 0;
			buildPartial(function(){
				//PHANTOM.reave.cluster.loaded = 1;
				if(PHANTOM.reave.cluster.loc !== "blog"){
					ANCHOR.route("#post_" + id);
					//dangerous is my middle name
					//h4czX://su55
					ANCHOR._show_div("post_" + id);	
				}
				else{
					PHANTOM.reave.cluster.page = 1;
					ANCHOR.route("#blog");
					ANCHOR._show_div("blog");
				}
				ANCHOR.buffer();
				PHANTOM.reave.cluster.loc = "";
				
			})
			//conjured Napalm Records
			
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

const header_height = "123px"

function buildHeading(){
	
	
	//meta
	var header = document.createElement("div");
	$("body").append(header);
	//sue me
	
	//css
	$(header).css({"top" : 0 , "left" : 0, "z-index" : 999, "border-bottom" : "3px solid goldenrod", "position" : "fixed",
	 "height" : header_height, "width" : "100%", "background-color" : "#abcdba", "box-shadow" : "3px 4px 5px crimson"})

	var h1 = document.createElement("h1");
	var a = document.createElement("a")
	$(a).attr("href", "#blog");
	$(a).addClass("ANCHOR")
	$(a).addClass("blog");
	//i guess you can store arbitrary data in the reaver too
	$(a).text(PHANTOM.reave.db().heading)
	
	$(h1).append(a);
	$(header).append(h1);
	$("h1 a").css({"color" : "darkviolet", "text-shadow" : "2px 2px #0F0F0F"})

	var add_post = document.createElement("button");
	$(add_post).text("Mint a New Post!");
	$(add_post).css("margin" , "13px")
	$(header).append(add_post);

	$(add_post).click(function(e){
		e.preventDefault(); //HAHAHHAHA
		$(add_post_title).toggle();
		$(add_post_textarea).toggle();
		$(add_post_button).toggle();
	})

	var post_div = document.createElement("div");

	var add_post_title = document.createElement("input");
	var add_post_textarea = document.createElement("textarea");
	var add_post_button = document.createElement("button");

	$(add_post_title).attr("placeholder", "Post Title").hide();
	$(add_post_textarea).attr("placeholder", "Post Content").width(333).height(333).hide();
	$(add_post_button).text("Post!").hide();
	//always remember to bring a towel

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

	//hides mint post on click
	$('*').click(function(e) {
        if(e.target.localName !== 'button' && e.target.localName !== 'input' && e.target.localName !== 'textarea') {
            $(add_post_title).hide();
			$(add_post_textarea).hide();
			$(add_post_button).hide();
        }
    });

	$(header).append("<br>")
	$(header).append(add_post_title);
	$(header).append(add_post_button);
	$(header).append("<br>")

	$(header).append(add_post_textarea)
	//not so elite not so
	$("a.blog").click(function(){
		PHANTOM.reave.cluster.page = 1;
	})



	//body
	$("body").css({"border-left" : "5px solid navy", "box-sizing" : "border-box", "margin" : "0 0 0 7px", "overflow" : "hidden",
		"background-color" : "#CDCDCD", "height" : "100%", "width" : "100%"})
}
 
//eschatology^9991000000001 (wards Christian daemon)
function buildPartial(cb){	
	$(".ANCHOR_partial").remove();

	//partial
	var blog_partial = document.createElement("div")
	//contains either post or list of posts
	$("body").append(blog_partial)
	$(blog_partial).addClass("ANCHOR_partial").addClass("blog")
	//be nice don't hack :ref Tripcodes (yes you lost the tripcodes)

	//first loop, for blog page
	//reave.cluster.page_limit per page
	console.log(PHANTOM.reave.getNodes().toArray());
	PHANTOM.reave.getNodes().skip(PHANTOM.reave.cluster.page_limit * (PHANTOM.reave.cluster.page - 1)).limit(PHANTOM.reave.cluster.page_limit).toArray().forEach(function(node, i){
		$("h2").css({"padding" : "13px"})
			if(node.Group === "Post"){
				var snippet_div = document.createElement("div");

				//HEX1MEX
				$(snippet_div).css({"background-color" : "white", "position": "relative", "margin" : "55px 55px 0px 55px",
				 "padding" : "0px 33px 123px 33px", "border-bottom" : "1px dotted goldenrod", "font-size" : "13px",
					"border-top" : "5px solid CRIMSON", "border-left" : "1px solid #abcdba", "border-radius" : "5px", "box-shadow" : "2px 5px 7px palegoldenrod"})
				$("h2 a, h1 a").css({"font-family" : "Bookman, Georgia, serif", "font-variant" : "small-caps"})
				$("span").css({"font-family" : "Oswald, Arial, serif"})
				$("h1").css({"margin-top" : "0px", "padding" : "13px"})
				
				var h2 = document.createElement("h2");
				
				var h2_a = document.createElement("a")
				$(h2_a).text(node.subheading);
				//i wanted to test the params but this works
				$(h2_a).attr("href", "#post_" + node._id);
				//uhh might be able to just use href to pass params
				$(h2_a).addClass("ANCHOR");
				$(h2_a).addClass("post_" + node._id);
				$(h2).append(h2_a);

				//RRRRRRREEEEEEEEEEEEE
				$(snippet_div).append(h2);

				var span = document.createElement("span")

				$(span).text(node.content.substring(0, 256) + "...");
				$(snippet_div).append(span);

				//p is broken
				$(blog_partial).append(snippet_div);
			}
			console.log(node);
	})

	//second loop, for all post partials
	PHANTOM.reave.getNodes().toArray().forEach(function(node, i){
		if(node.Group === "Post"){			
			//post partial
			var post_partial = document.createElement("div");
			
			//sad but true
			$(post_partial).addClass("ANCHOR_partial").addClass("post_" + node._id);

			var post_content = document.createElement("p");
			$(post_content).css("background-color", "white")
			$(post_content).text(node.content);
			$(post_content).css({"margin" : "0px 33px 0px 33px", "font-size" : "13px", "border-radius" :"6px", "box-shadow" : "inset 3px 3px 3px #ABABAB", "text-justify" : "justified", "min-height" : "333px"})

			var h2_post = document.createElement("h2");
			$(h2_post).css({"display" : "inline-block", "padding" : "33px"})
			var h2_post_a = document.createElement("a"); //playing

			var post_edit = document.createElement("a");
			$(post_edit).text("[edit]")
			$(post_edit).attr("href", "#")

			$(post_edit).click(function(e){
				e.preventDefault();
				$(edit_post_title).fadeToggle(777);
				$(edit_post_textarea).fadeToggle(777);
				$(edit_post_button).fadeToggle(777);
			})

			var edit_post_title = document.createElement("input");
			var edit_post_textarea = document.createElement("textarea");
			var edit_post_button = document.createElement("button");
			console.log(node._id);
			$(edit_post_button).attr("id", "update_" + node._id)
			$(edit_post_title).css("margin-left", "55px")
			$(edit_post_textarea).css("margin-left", "55px");
			$(edit_post_title).attr("placeholder", "Post Title").val(node.subheading).hide();
			$(edit_post_textarea).attr("placeholder", "Post Content").val(node.content).width(333).height(333).hide();
			$(edit_post_button).text("Update!").hide();
			//remember to lance the post Group

			$(edit_post_button).click(function(e){
				e.preventDefault();
				//try the lance
				var id = parseInt($(this).attr("id").substr($(this).attr("id").lastIndexOf("_") + 1))
				console.log(id);
				updatePost(id, {
					subheading : $(edit_post_title).val(),
					content: $(edit_post_textarea).val(),
					Group : "Post"
				})
				$(edit_post_title).hide();
				$(edit_post_textarea).hide();
				$(edit_post_button).hide();
			})
			//tzoah rotachot
			$(h2_post_a).text(node.subheading);
			$(h2_post).append(h2_post_a);
			$(post_partial).append(h2_post);
			$(post_partial).append("&nbsp;")
			$(post_partial).append(post_edit)
			$(post_partial).append("<br>")
			$(post_partial).append(edit_post_title);
			$(post_partial).append(edit_post_button);
			$(post_partial).append("<br>")

			$(post_partial).append(edit_post_textarea)
			$(post_partial).append("<br>")
			$(post_partial).append("<br>");
			$(post_partial).append(post_content);
			$("body").append(post_partial);
		}
	})
	
	//no h4xx pls
	//i say this because technically anyone can edit anyone's blog unless you're using your own JSON server
	//use 4chan tripcode to guarantee identity

	$(".ANCHOR_partial").css({"overflow" : "auto", "height" : "100%", "width" : "100%", "top" : 0, "left" : 0,
	 "position" : "absolute", "margin-top" : header_height})


	var prev = document.createElement("a");
	var next = document.createElement("a");
	$(prev).text("Prev");
	$(prev).css("padding-left", "123px")
	$(next).text("Next");
	$(next).css("padding-left", "123px")
	$(".ANCHOR_partial").append("<br>")

	console.log(PHANTOM.reave.cluster.page);

	if(PHANTOM.reave.cluster.page ===  1){
		$(prev).hide();
	}
	//check max pages
	//jesus is nagging me
	//gt:_Rosicrucian
	if(PHANTOM.reave.cluster.page > Math.ceil((PHANTOM.reave.getNodes({"Group" : "Post"}).toArray().length - 1) / PHANTOM.reave.cluster.page_limit)){
		$(next).hide();
	}
	$(prev).attr("href", "#blog?page=" + (PHANTOM.reave.cluster.page - 1));
	$(next).attr("href", "#blog?page=" + (PHANTOM.reave.cluster.page + 1));

	//is not sending back the last item

	$(prev).click(function(e){
		e.preventDefault()
		var that = $(this);
	//	buildHeading();
		//it's called blowback suck my ph41115
		PHANTOM.reave.cluster.page--;
		buildPartial(function(){
			ANCHOR.route(that.attr("href"));		
		})
	})

	$(next).click(function(e){
		e.preventDefault();
		var that = $(this);
	//	buildHeading();
		PHANTOM.reave.cluster.page++;
		buildPartial(function(){
			ANCHOR.route(that.attr("href"));		
		})	
	})


	$("div.blog").append(prev);
	$("div.blog").append("&nbsp;");
	$("div.blog").append(next);
	$("a:visited").css("color" , "darkviolet")
	ANCHOR.buffer();
	$(".ANCHOR_partial").append("<br><br><br><br><br><br><br><br>")

	//I don't give a damn about you
	cb();
}

$(document).ready(function(){	
	if(!ANCHOR.page()){
		ANCHOR.route("#blog");
	}
})