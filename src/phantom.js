//TODO: esc closes txt dialogue
//TODO: some kind of tripcode
//ERROR: node ids changing
//ERROR: duplicate ids

//CHARM: kind of interesting, Nobody has coded like this before so it is more difficult to process

var PHANTOM = {
	reap : null,
	init : function(hyperlink, heading, cb){
		var that = this;
		parseJSON(hyperlink, function(err, result){	
			that.reap = REAPER.db();

			/* BLOG SETTINGS */
			that.reap.cluster.page_limit = 13;
			that.reap.cluster.header_height = "123px"
			that.reap.cluster.heading = heading;

			//code structure will be complicated by the REAPER until i learn how to use it
			if(!result._db){
				//new db, node structure internal
				that.reap.cluster.loc = "blog";
				buildHeading();
				that.lance();
			}
			//you know i was mock suicided
			//YEAH i have scars on my wrists
			else{
				//23
				that.reap = REAPER.load(result._db);
				var obj = ANCHOR.getParams();
				if(obj && Object.keys(obj).length === 0 && obj.constructor === Object){
					that.reap.cluster.page = 1;				
				}
				else{
					//eschatology^3
					that.reap.cluster.page = ANCHOR.getParams() ? parseInt(ANCHOR.getParams().page) : 1;
				}

				//eschatology^64 GOLDEN DAWN!!
				//if(!that.reap.cluster.heading){
				that.reap.cluster.heading = heading;
				//}

				buildHeading();
				buildPartial(function(){
					that.reap.cluster.loaded = 1;
					if(!ANCHOR.page()){
						ANCHOR.route("#blog");
					}
					else{
				//tzoah rotachot^727
						ANCHOR.load();
					}
				});
			}		
			
			if(cb)
				cb(err, result);
		})
	}
	,
	update : function(id, params){
		if(params.subheading === ""){
			this.delete(id);
		}
		else{
			this.reap.getNodes({_id : id}).setNodes(params);
			this.lance()	
		}
	}
	,
	//mi5 magick
	mint : function(post){
		//master buddha
		//PHANTOM.reap.cluster.loaded = 0;

		this.reap.addNode(post);

		//eschatology^2
		//let's add the post div

		//(update a db without passing arguments)
		this.lance();
	}
	,
	//father magick 
	lance : function(){
		var that = this;
		$.ajax({
			type: "PUT",
			contentType : "application/json",
			url : "https://jsonblob.com/api/jsonBlob/889003392459096064",
			data : JSON.stringify(PHANTOM.reap.db()),
			success : function(){
				//this works because the pointer is updated by addNode and last returns the last el of the pointer	
				//phantom is the blog software reapr is the db it's using	

				//this is way too complex!
				//CH*Rm3d: this is probably the problem
				if(that.reap.last())
					var id = PHANTOM.reap.last()._id;
				else
					var id = 0;
				buildPartial(function(){
					//PHANTOM.reap.cluster.loaded = 1;
					if(that.reap.cluster.loc !== "blog"){
						ANCHOR.route("#post_" + id);
						//dangerous is my middle name
						//h4czX://su55
						ANCHOR._show_div("post_" + id);	
					}
					else{
						that.reap.cluster.page = 1;
						ANCHOR.route("#blog");
						ANCHOR._show_div("blog");
					}
					ANCHOR.buffer();
					that.reap.cluster.loc = "";
					
				})
				//conjured Napalm Records
				
			//VEGETA WHAT DOES THIS SCOUTER SAY ABOUT HIS POWER LEVEL
			//...tzoah rotachot!
			}
		})
	}
	,
	delete : function(id){
		this.reap.deleteNode({_id : id});
		this.reap.cluster.loc = "blog";
		this.lance();
	}
}


function parseJSON(doc, cb){
	
	//if json is passed
	if(doc.isJson){
		cb(null, doc);
	}
	//if a hyperlink is passed
	else{
		$.ajax({			
			url : doc,
		 	success : function(dat){
				cb(null, dat);
			},
			error : function(err){
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

//post numbers are changing on page load


function greentext(partial, str){
	var splitted = decodeHtml(str).split("\n");
	splitted.forEach(function(line){
	  var e = document.createElement('p');
	  partial.append(e);
	  $(e).text(line)
							
	  if(line.indexOf(">")==0){
	    //$(this).text($(this).text().substring(1))
	    $(e).css({"color" : "green"})
	  }
	}) 	
}
//tzoah rotcahot ^5

function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}

function buildHeading(){
	
	
	//meta
	var header = document.createElement("div");
	$("body").append(header);
	//sue me
	
	//css
	$(header).css({"top" : 0 , "left" : 0, "z-index" : 999, "border-bottom" : "3px solid goldenrod", "position" : "fixed",
	 "height" : PHANTOM.reap.cluster.header_height, "width" : "100%", "background-color" : "#abcdba", "box-shadow" : "3px 4px 5px crimson", "border-radius" : "7px"})

	var h1 = document.createElement("h1");
	var a = document.createElement("a")
	$(a).attr("href", "#blog");
	$(a).addClass("ANCHOR")
	$(a).addClass("blog");
	//i guess you can store arbitrary data in the reapr too
	$(a).text(PHANTOM.reap.cluster.heading)
	
	$(h1).append(a);
	$(header).append(h1);
	$("h1 a").css({"color" : "darkviolet", "text-shadow" : "1px 2px #0F0F0F"})

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
		PHANTOM.mint({
			subheading : $(add_post_title).val(),
			content: $(add_post_textarea).val(),
			Group : "Post",
			time : new Date()
		})
		$(add_post_title).hide();
		$(add_post_textarea).hide();
		$(add_post_button).hide();
		$(add_post_title).val("")
		$(add_post_textarea).val("")
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
		PHANTOM.reap.cluster.page = 1;
	})



	//body
	$("body").css({"border-left" : "5px solid navy", "box-sizing" : "border-box", "margin" : "0 0 0 7px", "overflow" : "hidden",
		"background-color" : "#CDCDCD", "height" : "100%", "width" : "100%"})
}
 
//eschatology^99910000000000001 (wards Christian daemon)
function buildPartial(cb){	
	$(".ANCHOR_partial").remove();

	//partial
	var blog_partial = document.createElement("div")
	//contains either post or list of posts
	$("body").append(blog_partial)
	$(blog_partial).addClass("ANCHOR_partial").addClass("blog")
	//be nice don't hack :ref Tripcodes (yes you lost the tripcodes)

	//first loop, for blog page
	//reap.cluster.page_limit per page
	console.log(PHANTOM.reap.getNodes().toArray());
	PHANTOM.reap.getNodes().sort({time : -1}).skip(PHANTOM.reap.cluster.page_limit * (PHANTOM.reap.cluster.page - 1)).limit(PHANTOM.reap.cluster.page_limit).toArray().forEach(function(node, i){
		$("h2").css({"padding" : "13px"})
			if(node.Group === "Post"){
				var snippet_div = document.createElement("div");

				//HEX1MEX
				
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
				greentext($(snippet_div), $(span).text())
				//$(snippet_div).append(span);

				//p is broken
				$(blog_partial).append(snippet_div);
				$(snippet_div).css({"background-color" : "white", "position": "relative", "margin" : "55px 55px 0px 55px",
				 "padding" : "0px 33px 123px 33px", "border-bottom" : "1px dotted goldenrod", "font-size" : "13px",
					"border-top" : "5px solid CRIMSON", "border-left" : "1px solid #abcdba", "border-radius" : "5px", "box-shadow" : "2px 5px 7px palegoldenrod"})
				
				$("span").css({"font-family" : "Oswald, Arial, serif"})
				$("h1").css({"margin-top" : "0px", "padding" : "13px"})
				
				$("h2 a, h1 a").css({"font-family" : "Bookman, Georgia, serif", "font-variant" : "small-caps"})
			}
			console.log(node);
	})

	//second loop, for all post partials
	PHANTOM.reap.getNodes().toArray().forEach(function(node, i){
		if(node.Group === "Post"){			
			//post partial
			var post_partial = document.createElement("div");
			
			//sad but true
			$(post_partial).addClass("ANCHOR_partial").addClass("post_" + node._id);

			var post_content_div = document.createElement("div");			
			var post_content = document.createElement("p");
			$(post_content_div).css("background-color", "white")
			$(post_content).text(node.content);
			$(post_content_div).css({"margin" : "0px 33px 0px 33px", "font-size" : "13px", "border-radius" :"6px", "box-shadow" : "inset 3px 3px 3px #ABABAB", "text-justify" : "justified", "min-height" : "333px"})
			$(post_content).css("padding" , "33px");

			greentext($(post_content_div), $(post_content).text())
			//$(post_content_div).append(post_content);

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
				PHANTOM.update(id, {
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
			$(post_partial).append(post_content_div);
			$("body").append(post_partial);
		}
	})
	$("p").css("padding" , "0 0 0 13px")
	
	//no h4xx pls
	//i say this because technically anyone can edit anyone's blog unless you're using your own JSON server
	//use 4chan tripcode to guarantee identity

	$(".ANCHOR_partial").css({"overflow" : "auto", "height" : "100%", "width" : "100%", "top" : 0, "left" : 0,
	 "position" : "absolute", "margin-top" : PHANTOM.reap.cluster.header_height})


	var prev = document.createElement("a");
	var next = document.createElement("a");
	$(prev).text("Prev");
	$(prev).css("padding-left", "123px")
	$(next).text("Next");
	$(next).css("padding-left", "123px")
	$(".ANCHOR_partial").append("<br>")

	console.log(PHANTOM.reap.cluster.page);

	if(PHANTOM.reap.cluster.page ===  1){
		$(prev).hide();
	}
	//check max pages
	//jesus is nagging me
	//gt:_Rosicrucian
	if(PHANTOM.reap.cluster.page >= Math.ceil((PHANTOM.reap.getNodes({"Group" : "Post"}).toArray().length) / PHANTOM.reap.cluster.page_limit)){
		$(next).hide();
	}
	$(prev).attr("href", "#blog?page=" + (PHANTOM.reap.cluster.page - 1));
	$(next).attr("href", "#blog?page=" + (PHANTOM.reap.cluster.page + 1));

	//is not sending back the last item

	$(prev).click(function(e){
		e.preventDefault()
		var that = $(this);
	//	buildHeading();
		//it's called blowback suck my ph41115
		PHANTOM.reap.cluster.page--;
		buildPartial(function(){
			ANCHOR.route(that.attr("href"));		
		})
	})

	$(next).click(function(e){
		e.preventDefault();
		var that = $(this);
	//	buildHeading();
		PHANTOM.reap.cluster.page++;
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