var new_host = "http://google.com/"

chrome.webRequest.onBeforeRequest.addListener(
	function(details) {
		return {redirectUrl: new_host};
	},
	{
		urls: [
			"*://reddit.com/*",
			"*://www.reddit.com/*"
		],
		types:["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
	},
	["blocking"]
);