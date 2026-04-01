


const scriptsInEvents = {

	async ["Onstart-E_Event6_Act1"](runtime, localVars)
	{
		var gameName = 'Guess-The-Flag';
		var domainName = document.referrer;
		if (domainName == "")
		{
		domainName = window.location.href;
		}
		var domain_parts = domainName.split("://");
		var domain_subparts = domain_parts[1].split("/");
		var hostNames = domain_subparts[0];
		window.open("https://bestgamespot.com?utm_campaign=" + gameName + "&utm_source=" + hostNames + "&utm_medium=game_referral&utm_content=moregames", "_blank");
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

