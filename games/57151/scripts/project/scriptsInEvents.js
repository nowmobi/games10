


const scriptsInEvents = {

	async Global_Event111_Act1(runtime, localVars)
	{
		trackEvent(localVars.Catagery,localVars.Click,localVars.Object_name);
		//console.log(localVars.Catagery,"-----",localVars.Click,"------",localVars.Object_name);
	},

	async Global_Event113_Act1(runtime, localVars)
	{
		trackEvent(localVars.Catagery,"  End",{ 'event_label': 'Level '+runtime.globalVars.c_lev+ ' Completed' });
		
		console.log(localVars.Catagery,"  End",{ 'event_label': 'Level '+runtime.globalVars.c_lev
		+ ' Completed'})
	},

	async ["Onstart-E_Event4_Act1"](runtime, localVars)
	{
		var gameName = 'cute-cat-jigsaw-puzzle-2023';
		var domainName = document.referrer;
		if (domainName == "")
		{
		domainName = window.location.href;
		}
		var domain_parts = domainName.split("://");
		var domain_subparts = domain_parts[1].split("/");
		var hostNames = domain_subparts[0];
		window.open("https://bestgamespot.com?utm_campaign=" + gameName + "&utm_source=" + hostNames + "&utm_medium=game_referral&utm_content=Loader", "_blank");
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

