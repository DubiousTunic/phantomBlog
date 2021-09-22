//TODO: esc closes txt dialogue etc.
//TODO: some kind of tripcode
//TODO: tags with graph db
//TODO: VR tag cloud
//ERROR: sometimes when you add a Tag it routes to the wrong post 

//CHARM: kind of interesting, Nobody has coded like this before so it is more difficult to process

var PHANTOM = {
	weave : null,
	init : function(hyperlink, heading, cb){
		var that = this;
		parseJSON(hyperlink, function(err, result){	
			that.weave = WEAVER.init();

			/* BLOG SETTINGS */
			that.weave.cluster.page_limit = 13;
			that.weave.cluster.header_height = "161px"
			that.weave.cluster.heading = heading;
			that.weave.cluster.hyperlink = hyperlink;

			//code structure will be complicated by the WEAVER until i learn how to use it
			if(!result || !result.nodes || result.nodes.length === 0){
				//new db, node structure internal
				that.weave.cluster.loc = "blog";
				buildHeading();
				that.lance();
			}
			//you know i was mock suicided
			//YEAH i have scars on my wrists
			else{
				//23
				that.weave = WEAVER.load(result);
				var obj = ANCHOR.getParams();
				if(obj && Object.keys(obj).length === 0 && obj.constructor === Object){
					that.weave.cluster.page = 1;				
				}
				else{
					//eschatology^3333333333
					that.weave.cluster.page = ANCHOR.getParams() ? parseInt(ANCHOR.getParams().page) : 1;
				}

				//eschatology^64 GOLDEN DAWN!!
				//if(!that.weave.cluster.heading){
				that.weave.cluster.heading = heading;
				//}

				buildHeading();
				buildPartial(function(){
					that.weave.cluster.loaded = 1;
					if(!ANCHOR.page()){
						ANCHOR.route("#blog");
					}
					else{
				//tzoah rotachot^727
						ANCHOR.load();
					}
				});
				//the aushwitz behavioral health uniforms lol
			}	
			
			if(cb)
				cb(err, result);
		})
	}
	,
	//USSS ((trickery))f13
	update : function(id, params){
		if(params.name === ""){
			this.delete(id);
		}
		//update tags
		else if(params.tags){
			this.weave.getNodeByID(id).setNodesArray(params);
			this.lance();
		}
		//we drink your blood
		else{
			//console.log(id, params);
			//console.log(this.weave.getNodeByID(id));
			this.weave.getNodeByID(id).setNodes(params);
			this.lance()
		}
	}
	,
	mintTag : function(postID, tagName){
		if(!tagName)
			return;
		var node = this.weave.addNodeUnique({ group: "Tag", name : tagName.toLowerCase()}, {name : tagName.toLowerCase()});
		this.weave.addLink({source: postID, target : this.weave.last().id})
		//sets the lance
		this.weave.getNodes({id : postID});
		this.lance();
	}
	//(f((sorcery))13)
	,
	delete : function(postID){
		this.weave.cluster.loc = "blog";
		this.weave.deleteNodeByID(postID)
		this.lance();
	}
	,
	//~G://already murdered
	deleteTag : function(postID, tagName){
		if(!tagName)
			return;
		var nodeID = this.weave.getNodes({name : tagName, group : "Tag"}).last().id
		console.log(postID, nodeID);
		this.weave.deleteLink({"source" : postID, "target" : nodeID})
		//this sets the lance
		this.weave.getNodes({id : postID});
		this.lance();
		//TODO if it has no links delete the node
	}
	,
	//mi5 magick: ((jewish sorcery))^13
	/* Man was once an Egyptopithecus */
	mint : function(post){
		//master buddha
		//PHANTOM.weave.cluster.loaded = 0;

		this.weave.addNode(post);

		//eschatology^((3))
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
			url : PHANTOM.weave.cluster.hyperlink,
			data : JSON.stringify(PHANTOM.weave.db()),
			success : function(){
				//this works because the pointer is updated by addNode and last returns the last el of the pointer	
				//phantom is the blog software weaver is the db it's using	

				//this is way too complex!
				//CH*Rm3d: this is probably the problem*J4!#'
				console.log(that.weave.last());
				if(that.weave.last()){
					var id = that.weave.last().id;
				}
				else{
					var id = 0
					//it didn't go in $(".ANCHOR_partial").append("Welcome to your new phantom blog!")
				}

				buildPartial(function(){
					//PHANTOM.weave.cluster.loaded = 1;
					if(that.weave.cluster.loc !== "blog"){
						ANCHOR.route("#post_" + id);
						//dangerous is my middle name
						//h4czX://su55!j:ATLANTIS#
						ANCHOR._show_div("post_" + id);	
					}
					else{
						that.weave.cluster.page = 1;
						ANCHOR.route("#blog");
						ANCHOR._show_div("blog");
					}
					ANCHOR.buffer();
					that.weave.cluster.loc = "";
					
				})
				
			//VEGETA WHAT DOES THIS SCOUTER SAY ABOUT HIS POWER LEVEL
			//...tzoah rotachot!^2
			}
		})
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
//tzoah rotcahot ^5555

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
	$(header).css({"top" : 0 , "left" : 0, "z-index" : 999,
	 "height" : PHANTOM.weave.cluster.header_height, "width" : "100%", "box-shadow" : "0px 2px 3px palegoldenrod"})

	var h1 = document.createElement("h1");
	var a = document.createElement("a")
	$(a).attr("href", "#blog?page=1");
	$(a).addClass("ANCHOR")
	$(a).addClass("blog");
	//i guess you can store arbitrary data in the weaver too
	$(a).text(PHANTOM.weave.cluster.heading)
	
	$(h1).append(a);
	$(header).append(h1);
	$("h1 a").css({"z-index" : 9999, "position" : "relative", "color" : "CRIMSON", "text-shadow" : "1px 2px #0F0F0F", "border-radius" : "7px"})

	var add_post = document.createElement("button");
	$(add_post).text("Mint a New Post!");
	$(add_post).css({ "top" : "72px", "left" : "55px", "position" : "fixed", "z-index" : 9999})
	$("body").append(add_post);

	$(add_post).click(function(e){
		e.preventDefault(); //HAHAHHAHA
		$(post_div).toggle();
	})

	var post_div = document.createElement("div");

	var add_post_title = document.createElement("input");
	var add_post_img = document.createElement("input");
	var add_post_textarea = document.createElement("textarea");
	var add_post_button = document.createElement("button");

	//illuminiti
	$(post_div).css({"position" : "fixed", "z-index" : 9999, "width" : "100%", 
		"height" : "100%", "top" : PHANTOM.weave.cluster.header_height}) 

	$(add_post_title).attr("placeholder", "Post Title")
	$(add_post_textarea).attr("placeholder", "Post Content").width("77%").height("calc(90% - " + PHANTOM.weave.cluster.header_height + ")").css("margin", "0 auto")
	$(add_post_img).attr("placeholder", "IMG hyperlink");
	$(add_post_button).text("Post!")
	//always remember to bring a towel

	$(add_post_button).click(function(e){
		e.preventDefault();
		PHANTOM.mint({
			name : $(add_post_title).val(),
			content: $(add_post_textarea).val(),
			group : "Post",
			time : new Date(),
			img : $(add_post_img).val(),
			tags : []
		})
		$(post_div).hide();
		$(add_post_title).val("")
		$(add_post_textarea).val("")
		$(add_post_img).val("");
	})
	$(post_div).hide();
	//((behold)) i come as a thief in the night

	//TODO
	//hides mint post on click
	/*$('body').click(function(e) {
        if(e.target.localName !== 'button' && e.target.localName !== 'input' && e.target.localName !== 'textarea') {
            $(add_post_title).hide();
			$(add_post_textarea).hide();
			$(add_post_button).hide();
        }
    });*/

	$(post_div).append(add_post_title);
	$(post_div).append(add_post_button);
	$(post_div).append("<br>")
	$(post_div).append(add_post_img)
	$(post_div).append("<br>")
	$(post_div).append(add_post_textarea)
	$("body").append(post_div)


	//not so elite not so
	//((THE CLOCKWORK ORANGE))
	$("a.blog").click(function(){
		console.log("HERE");
		PHANTOM.weave.cluster.page = 1;
		buildPartial(function(){
			
		})
	})

	//body
	$("body").css({"border-left" : "5px solid #abcdba", "box-sizing" : "border-box", "margin" : "0 0 0 7px", "overflow" : "hidden",
		"background-color" : "#abcdba", "height" : "100%", "width" : "100%", "margin-bottom" : PHANTOM.weave.cluster.header_height})
}
 
//eschatology^999100000000000001 (wards Christian daemon)
function buildPartial(cb){	
	$(".ANCHOR_partial").remove();

	//partial
	var blog_partial = document.createElement("div")
	//contains either post or list of posts
	$("body").append(blog_partial)
	$(blog_partial).addClass("ANCHOR_partial").addClass("blog")
	//be nice don't hack :ref Tripcodes (yes you lost the tripcodes)

	//first loop, for blog page
	//weave.cluster.page_limit per page
	PHANTOM.weave.getNodes({"group" : "Post"}).sort({time : -1}).skip(PHANTOM.weave.cluster.page_limit * (PHANTOM.weave.cluster.page - 1)).limit(PHANTOM.weave.cluster.page_limit).toArray().forEach(function(node, i){
		$("h2").css({"padding" : "13px"})		    
			//if(node.group === "Post"){
			var snippet_div = document.createElement("div");

			//HEX1MEX
			
			var h2 = document.createElement("h2");
			
			var h2_a = document.createElement("a")
			$(h2_a).text(node.name);
			//i wanted to test the params but this works
			$(h2_a).attr("href", "#post_" + node.id);
			//uhh might be able to just use href to pass params
			$(h2_a).addClass("ANCHOR");
			$(h2_a).addClass("post_" + node.id);
			$(h2).append(h2_a);

			//RRRRRRREEEEEEEEEEEEE
			$(snippet_div).append(h2);

			var snippet_img = document.createElement("img");

			$(snippet_img).attr("src", node.img).width("444px");
			$(snippet_div).append("<br>")
			$(snippet_div).append(snippet_img)
			$(snippet_div).append("<br>")
			var span = document.createElement("span")

			$(span).text(node.content.substring(0, 256) + "...");
			greentext($(snippet_div), $(span).text())
			//$(snippet_div).append(span);

			//p is broken
			$(blog_partial).append(snippet_div);
			$(snippet_div).css({"background-color" : "white", "position": "relative", "margin" : "55px 55px 0px 55px",
			 "padding" : "0px 33px 123px 33px", "border-bottom" : "1px dotted goldenrod", "font-size" : "13px",
				"border-top" : "4px dotted CRIMSON", "border-collapse": "collapse", "border-left" : "2px solid #abcdba", "border-radius" : "5px", "box-shadow" : "2px 4px 5px palegoldenrod"})
			
			$("span").css({"font-family" : "Oswald, Arial, serif"})
			$("h1").css({"margin-top" : "0px", "padding" : "13px"})
			
			$("h2 a, h1 a").css({"font-family" : "Bookman, Georgia, serif", "font-variant" : "small-caps"})
			//}
	})

	//second loop, for all post partials
	PHANTOM.weave.getNodes({group : "Post"}).toArray().forEach(function(node, i){
	//	if(node.group === "Post"){			
		//post partial
		var post_partial = document.createElement("div");
		
		//sad but true
		$(post_partial).addClass("ANCHOR_partial").addClass("post_" + node.id);

		var post_content_div = document.createElement("div");		
		var post_content = document.createElement("p");
		$(post_content_div).css("background-color", "white")
		$(post_content).text(node.content);
		$(post_content_div).css({"margin" : "0px 33px 0px 33px", "border-top": "3px dotted CRIMSON", "font-size" : "13px", "border-radius" :"6px", "box-shadow" : "inset 3px 3px 3px #ABABAB", "text-justify" : "justified", "min-height" : "333px"})
		$(post_content).css("padding" , "33px");

		greentext($(post_content_div), $(post_content).text())

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
			$(edit_post_img).fadeToggle(777);
			$(edit_post_button).fadeToggle(777);
		})

		var edit_post_title = document.createElement("input");
		var edit_post_img = document.createElement("input");
		var edit_post_textarea = document.createElement("textarea");
		var edit_post_button = document.createElement("button");
		$(edit_post_button).attr("id", "update_" + node.id)
		//BUDDHA the nihilist! i can't work with you i am Morality
		$(edit_post_title).css("margin-left", "55px")
		$(edit_post_textarea).css("margin-left", "55px");
		$(edit_post_img).css({"margin-left" : "55px"}).attr("placeholder", "IMG hyperlink").val(node.img).hide(); //I AM THE JESTER!!!1
		$(edit_post_title).attr("placeholder", "Post Title").val(node.name).hide();
		$(edit_post_textarea).attr("placeholder", "Post Content").val(node.content).width(555).height(444).hide();
		$(edit_post_button).text("Update!").hide();

		//remember to lance the post group
		$(edit_post_button).click(function(e){
			e.preventDefault();
			//try the lance lol
			var id = parseInt($(this).attr("id").substr($(this).attr("id").lastIndexOf("_") + 1))
		
			PHANTOM.update(id, {
				name : $(edit_post_title).val(),					
				content: $(edit_post_textarea).val(),
				img : $(edit_post_img).val(),
				group : "Post"
			})
			$(edit_post_title).hide();
			$(edit_post_textarea).hide();
			$(edit_post_button).hide();
			$(edit_post_img).hide();
		})
		//tzoah rotachot^333 (repeating of course)
		var post_img = document.createElement("img");
		$(post_img).attr("src", node.img).css({"margin" : "0 0 55px 123px", "width" : "444px"});

		$(h2_post_a).text(node.name);
		$(h2_post).append(h2_post_a);
		$(post_partial).append(h2_post);
		$(post_partial).append("&nbsp;")
		$(post_partial).append(post_edit)
		$(post_partial).append("<br>")
		$(post_partial).append(edit_post_title);
		$(post_partial).append(edit_post_button);
		$(post_partial).append("<br>")
		$(post_partial).append(edit_post_img);
		$(post_partial).append("<br>")
		$(post_partial).append(edit_post_textarea)
		$(post_partial).append("<br><br><br>");
		$(post_partial).append(post_img);
		$(post_partial).append("<br>")
		$(post_partial).append(post_content_div);

		var tag_area = document.createElement("div");
		if(node.tags){
			node.tags.forEach(function(tag){
				var a = document.createElement("a");
				$(a).css({"padding" : "33px"});
				$(tag_area).append(a);
			})		
		}

		//Nobody codes like this
		$(post_partial).append(tag_area);

		$("body").append(post_partial);

		var tag_area = document.createElement("span");

		var tag_input = document.createElement("input");
		var tag_button = document.createElement("button");
		var tag_button_remove = document.createElement("button");
		$(tag_button).text("+");
		$(tag_button_remove).text("-");
		$(tag_button).attr("id", "tags_" + node.id)
		$(tag_button_remove).attr("id", "tags_remove_" + node.id)

		$(post_partial).append("<br>");

		$(post_partial).append(tag_area);

		$(post_partial).append(tag_input);
		$(post_partial).append(tag_button);
		$(post_partial).append(tag_button_remove)

		$(tag_input).css("margin-left", "55px")
		$(tag_input).attr("placeholder", "tag")

		$(tag_button).click(function(){
			var id = parseInt($(this).attr("id").substr($(this).attr("id").lastIndexOf("_") + 1))
			PHANTOM.mintTag(id, $(tag_input).val().toLowerCase())
		})

		$(tag_button_remove).click(function(){
			var id = parseInt($(this).attr("id").substr($(this).attr("id").lastIndexOf("_") + 1))
			PHANTOM.deleteTag(id, $(tag_input).val().toLowerCase())
		})
		//}
	})
	$("p").css("padding" , "0 0 0 13px")

	//no h4xx pls
	//i say this because technically anyone can edit anyone's blog unless you're using your own JSON server
	//use 4chan tripcode to guarantee identity

	$(".ANCHOR_partial").css({"overflow" : "auto", "height" : "100%", "width" : "100%", "top" : 0, "left" : 0, 
	 "position" : "absolute", "margin-top" : PHANTOM.weave.cluster.header_height})


	var prev = document.createElement("a");
	var next = document.createElement("a");
	$(prev).text("Prev");
	$(prev).css("padding-left", "123px")
	$(next).text("Next");
	$(next).css("padding-left", "123px")
	$(".ANCHOR_partial").append("<br>")

	console.log("PAGE : " + PHANTOM.weave.cluster.page);

	//watch out
	if(!PHANTOM.weave.cluster.page || PHANTOM.weave.cluster.page ===  1){
		$(prev).hide();
	}
	//KAT 5 HURRIC4NE
	//check max pages
	//jesus is nagging me
	//gt:_Rosicrucian
	if(!PHANTOM.weave.cluster.page || PHANTOM.weave.cluster.page >= Math.ceil((PHANTOM.weave.getNodes({"group" : "Post"}).toArray().length) / PHANTOM.weave.cluster.page_limit)){
		$(next).hide();
	}
	$(prev).attr("href", "#blog?page=" + (PHANTOM.weave.cluster.page - 1));
	$(next).attr("href", "#blog?page=" + (PHANTOM.weave.cluster.page + 1));

	//is not sending back the last item
	//p.p.

	//eschatology 1st edition
	$(prev).click(function(e){
		e.preventDefault()
		var that = $(this);
	//	buildHeading();
		//it's called blowback suck my ph41115
		PHANTOM.weave.cluster.page--;
		buildPartial(function(){
			ANCHOR.route(that.attr("href"));		
		})
	})

	//eschatology 2nd edition
	$(next).click(function(e){
		e.preventDefault();
		var that = $(this);
	//	buildHeading();
		PHANTOM.weave.cluster.page++;
		buildPartial(function(){
			ANCHOR.route(that.attr("href"));		
		})
	})

	//realtime graph search of posts
	var graph = document.createElement("div");
	$(graph).attr("id", "ATL");

	$(graph).css({"position" : "fixed" , "z-index" : "999", "top" : "0px", "left" : "0", "right" : 0});

	$("body").append(graph);

	//why does this have graph properties
	console.log(PHANTOM.weave.db());//kkk

	var graphDB = jQuery.extend(true, {}, PHANTOM.weave.db());
	//somehow this saves all sorts of graph properties in the db
	var myGraph = ForceGraphVR().width("100%").height(PHANTOM.weave.cluster.header_height);
					myGraph(document.getElementById('ATL'))
					    .graphData(graphDB).nodeAutoColorBy('group')

	myGraph.onNodeClick(function(node){								
		switch(node.group){
			case "Post" :
				console.log(node);
				ANCHOR.route("#post_" + node.id)
				break;	
			default:
				break;
		}						
	})

	console.log(PHANTOM.weave.db());

	$("div.blog").append(prev);
	$("div.blog").append("&nbsp;");
	$("div.blog").append(next);
	$("a:visited").css("color" , "darkviolet")
	ANCHOR.buffer();
	$(".ANCHOR_partial").append("<br><br><br><br><br><br><br><br><br><br><br><br><br>")

	//I don't give a damn about you
	cb();
}

$(document).ready(function(){	
	if(!ANCHOR.page()){
		ANCHOR.route("#blog");
	}
})