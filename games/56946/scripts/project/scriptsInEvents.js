


const scriptsInEvents = {

	async Global_Event36_Act1(runtime, localVars)
	{
		trackEvent(localVars.Catagery,localVars.Click,localVars.Object_name);
		//console.log(localVars.Catagery,"-----",localVars.Click,"------",localVars.Object_name);
	},

	async Global_Event38_Act1(runtime, localVars)
	{
		trackEvent(localVars.Catagery,"  End",{ 'event_label': 'Level '+runtime.globalVars.C_lev+ ' Completed' });
		
		console.log(localVars.Catagery,"  End",{ 'event_label': 'Level '+runtime.globalVars.C_lev
		+ ' Completed'})
	},

	async ["Onstart-E_Event4_Act1"](runtime, localVars)
	{
		var gameName = 'spooky-halloween-jigsaw-puzzle';
		var domainName = document.referrer;
		if (domainName == "")
		{
		domainName = window.location.href;
		}
		var domain_parts = domainName.split("://");
		var domain_subparts = domain_parts[1].split("/");
		var hostNames = domain_subparts[0];
//		window.open("https://bestgamespot.com?utm_campaign=" + gameName + "&utm_source=" + hostNames + "&utm_medium=game_referral&utm_content=Loader", "_blank");
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

