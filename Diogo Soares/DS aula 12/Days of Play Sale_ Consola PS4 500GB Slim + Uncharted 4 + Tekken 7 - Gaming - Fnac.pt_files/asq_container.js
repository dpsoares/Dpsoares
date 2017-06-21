var asq_container = {
	asq_script: null,
	asq_dom: null,
	asq_querystring: null,
	asq_currentActiveIframe: null,
	asq_click: false,
	asq_debug: false,
	asq_debug_text: '',
	asqLog: function(texte, mode = false) {
		if (asq_container.asq_debug || mode)
			console.log(texte);
		asq_container.asq_debug_text += texte+"\n";
	},
	monitorIframes: function() {
		var elem = document.activeElement;
		if(elem && elem.tagName && elem.tagName.toLowerCase() === 'iframe'){
			//console.log('iframe');
			if (elem != asq_container.asq_currentActiveIframe){ // New iframe, consider a click
				asq_container.asqLog('monitorIframes found active iframe', true);
				asq_container.asq_currentActiveIframe = elem;
				asq_container.searchForPlacement(elem);
			}
		}
		else 
			asq_container.asq_currentActiveIframe = null; // Not an iframe
		if (!asq_container.asq_click)
			setTimeout(asq_container.monitorIframes, 1000);
	},
	monitorClicks: function() {
		document.addEventListener("click", function() {
			asq_container.asqLog('monitorClicks click event triggered', true);
			asq_container.searchForPlacement(document.activeElement);
		});
	},
	searchForPlacement: function(elem) {
		var founded = false;
		asq_container.asqLog('searchForPlacement', true);
		var adid = null;
		currentWindow = window;
		while (adid == null && elem.parentElement !== null) {
			if (currentWindow.frameElement && currentWindow.frameElement.id.match(/post_asq_/)) {
				asq_container.asqLog('found post_asq iframe '+currentWindow.frameElement.id, true);
				asq_container.addTag('img', '//burger.audiencesquare.com/click.gif?auction='+asq_container.asq_querystring.n+'&rnd='+ Math.floor(Math.random()*9999999999));
				document.activeElement.blur();
				asq_container.asq_currentActiveIframe = null;
				asq_container.asq_click=true;
				founded = true;
				break;
			}
			asq_container.asqLog(elem);
			asq_container.asqLog(elem.tagName);
			if (elem === elem.previousElementSibling) 
				break;
			if (elem.previousElementSibling != null)
				elem = elem.previousElementSibling;
			else 
				elem = elem.parentElement;
			if (elem.hasAttribute('id') && elem.id.match(/asq_tag/)) {
				asq_container.asqLog('found asq_tag div '+elem.id, true);
				asq_container.addTag('img', '//burger.audiencesquare.com/click.gif?auction='+asq_container.asq_querystring.n+'&rnd='+ Math.floor(Math.random()*9999999999));
				asq_container.asq_click=true;
				founded = true;
				break;
			}
			if (elem.tagName.toLowerCase() == 'body' && currentWindow.frameElement) {
				elem=currentWindow.frameElement;
				currentWindow=window.parent;
			}
		}
		return founded;
	},
	// get the parameters sent to a script
	getUrlVars: function (script) {
		var vars = [];
		var hash;
		try {
			var hashes = script.src.slice(script.src.indexOf('#') + 1).split('&');
			for (var i = 0; i < hashes.length; i++) {
				hash = hashes[i].split('=');
				vars.push(hash[0]);
				vars[hash[0]] = hashes[i].slice(hashes[i].indexOf('=') + 1);
			}
		} catch (e) {}
		return vars;
	},
	// search for initiating script based on its supposed name
	getScript: function() {
		var SCRIPT_NAME = 'asq_container.js';
		var scripts = document.getElementsByTagName("script");
		var script_array = [];
		var script = null;
		var tmp;
		var i = scripts.length-1;
		while (i >= 0) {
			if (scripts[i].src.search(SCRIPT_NAME) >= 0) {
				script_array.push(scripts[i]);
			}
			i--;
		}
		if (script_array.length > 0)
			for (i=0; i < script_array.length; i++) {
				script=script_array[i];
				tmp = asq_container.getUrlVars(script);
				if (typeof tmp.seat != "undefined" && tmp.seat==1608)
					break;
			}
		asq_container.asq_script=script;
	},
	// add a tracking
	addTag: function (tag, src) {
		var tag = document.createElement(tag);
		tag.setAttribute("src", src);
		tag.setAttribute("width", "1");
		tag.setAttribute("height", "1");
		asq_container.asq_script.parentNode.appendChild(tag);
	},
	// resize parent iframes
	resizeIframe: function (iframew) {
		var i = 0,
			current = iframew;
		try {
			while (i < 10 && iframew != top) {
				if (iframew.frameElement) {
					asq_container.asqLog(iframew);
					iframew.frameElement.style.width = asq_container.asq_querystring.width+'px';
					iframew.frameElement.style.height = asq_container.asq_querystring.height+'px';
					iframew.frameElement.width = asq_container.asq_querystring.width;
					iframew.frameElement.height = asq_container.asq_querystring.height;
					iframew=iframew.parent;
				}
				else break;
				i++;
			}
		}
		catch (e) {}
	},
	// main function
	init: function() {
		asq_container.getScript();
		if (asq_container.asq_script) {
			asq_container.asq_querystring = asq_container.getUrlVars(asq_container.asq_script);
			// nugg.ad pixel
			try {
				if(typeof window.top.nuggad_on === "undefined" && typeof asq_container.asq_querystring.w != "undefined")
					asq_container.addTag('script', '//'+decodeURIComponent(asq_container.asq_querystring.w)+'&nuggrid=' + encodeURIComponent(top.location.href), asq_container.asq_script);
			}
			catch(e) {}
			// resize iframe if any
			if(typeof asq_container.asq_querystring.width != "undefined" && typeof asq_container.asq_querystring.height != "undefined" && window.frameElement) {
				if (typeof(asq_resize) == 'undefined' || (typeof(asq_resize) == 'object' && typeof(asq_resize[asq_container.asq_querystring.a]) == 'undefined')) {
					asq_container.asqLog("asq "+asq_container.asq_querystring.a+" resized to "+asq_container.asq_querystring.width+" x "+asq_container.asq_querystring.height, true);
					asq_container.resizeIframe(window, asq_container.asq_querystring);
					if (typeof window.top.apntag !== 'undefined') {
						var i = window.apntag_targetId || window.parent.apntag_targetId;
						typeof i !== 'undefined' && window.top.apntag.resizeAd(i, [getAsasq_container.asq_querystringizes().width, getAsasq_container.asq_querystringizes().height])
						asq_container.asqLog("asq "+asq_container.asq_querystring.a+" resized by apntag.resizeAd ", true);
					}
				}
				else
					asq_container.asqLog("asq "+asq_container.asq_querystring.a+" won't resize because of asq_resize variable", true);
			}
			// add segment if needed
			if(typeof asq_container.asq_querystring.segments!='undefined') {
				var segments = asq_container.asq_querystring.segments.split(',');
				for (i=0;i<segments.length;i++)
					asq_container.addTag('img', (window.location.protocol == 'http:' ? 'http://ib': 'https://secure')+'.adnxs.com/seg?add='+segments[i]+'&t=2', asq_container.asq_script);
			}
			// monitor focus on iframes
			asq_container.monitorIframes();
			// monitor clicks
			asq_container.monitorClicks();
		}
		else
			asq_container.asqLog('asq_container could not find script.');
	}
}
var obj_container = asq_container.init();

function getAsqSizes() {
	return {'width': obj_container.asq_querystring.width, 'height': obj_container.asq_querystring.height};
}
if (window.frameElement && window.frameElement.hasAttribute('width') && window.frameElement.getAttribute('width') == "1800")
	parent.getAsqSizes=getAsqSizes;

