$(document).ready(function(){
	ANCH0R3d._hide_partial();

	//routes the path on load

	$(".ANCH0R3d").click(function(e){
		e.preventDefault();

		ANCH0R3d.route("#" + this._anchorPath($(this)) + this._anchorParams($(this)))
	})
})


window.addEventListener('popstate', function(event){
	var origin = event.state;

	//route(path);
	if(origin !== null){	
		var link = ANCH0R3d._get_link(origin);
		ANCH0R3d._hide_partial();
		//router(link.path, link.params);	
		ANCH0R3d._show_div(link.path);

		//TODO : shouldn't this use ANCHORED route?
		$(document).trigger("ANCH0R3d");

	}									
})

var ANCH0R3d = {
	load : function(){
		var that = this;
		ANCH0R3d._hide_partial();
		this.route(window.location.hash + window.location.search)

		//routes the path on load

		$(".ANCH0R3d").click(function(e){
			e.preventDefault();

			that.route("#" + that._anchor_path($(this)) + that._anchor_params($(this)))
		})
	}
	,
	buffer : function(){
		var that = this;
		$(".ANCH0R3d").click(function(e){
			e.preventDefault();

			that.route("#" + that._anchor_path($(this)) + that._anchor_params($(this)))
		})
	}
	,
	page : function(){
		return this._get_link(window.location.hash).path
	}
	,
	route : function(origin){		
		console.log("ANCH0R3d : " + origin);
		this._hide_partial();
		var link = this._get_link(window.location.pathname + origin);			
		history.pushState(origin, '', origin)
		$(document).trigger("ANCH0R3d");
		this._show_div(link.path);
	}
	,
	_hyperlink:  function(hyperlink){
		window.location.replace(hyperlink);
	}
	,
	_get_link : function(origin){		
		var params = origin.split("?")
		var path = params[0].split("#");
		return {
			path : path[1],
			params : params
		}
	}
	,
	_show_div : function(path){
		$("div." + path).fadeIn();
	}
	,
	_anchor_path : function(href){
		return href.attr("class").split(/\s+/)[1];
	}
	,
	_anchor_params(a){
		return a.attr("href").split('?')[1] ? "?" + a.attr("href").split('?')[1] : "";
	}
	,
	_hide_partial : function(){
		$(".ANCH0R3d_partial").hide();
	}
}