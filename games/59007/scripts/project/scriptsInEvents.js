


const scriptsInEvents = {

	async Game_level_es_Event13_Act3(runtime, localVars)
	{
		console.log("fixing blocks position");
	},

	async Game_level_es_Event34_Act3(runtime, localVars)
	{
		console.log("win!");
	},

	async Game_level_es_Event55_Act1(runtime, localVars)
	{
		console.log("level won and save done");
	},

	async Mainmenu_es_Event6_Act4(runtime, localVars)
	{
		console.log("looking for game score in local storage");
	},

	async Mainmenu_es_Event7_Act2(runtime, localVars)
	{
		console.log("item found");
	},

	async Mainmenu_es_Event8_Act2(runtime, localVars)
	{
		console.log("Item not found");
	},

	async Mainmenu_es_Event9_Act2(runtime, localVars)
	{
		console.log("setting item");
	},

	async Mainmenu_es_Event10_Act3(runtime, localVars)
	{
		console.log("got game score");
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

