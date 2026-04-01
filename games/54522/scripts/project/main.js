
// Import any other script files here, e.g.:
// import * as myModule from "./mymodule.js";

runOnStartup(async runtime =>
{
	// Code to run on the loading screen.
	// Note layouts, objects etc. are not yet available.
	
//	const Loading = document.getElementsByClassName("Loading");
//    Loading[0].style.display="none";
    
    
    
// Google Analytics
const Analytics = document.createElement('script');
     Analytics.setAttribute("async", "");
    Analytics.src = 'https://www.googletagmanager.com/gtag/js?id=G-F52QBK293J';
    document.getElementsByTagName('head')[0].appendChild(Analytics);
    
const Analytics_script = document.createElement('script');
    
    Analytics_script.innerHTML = `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-F52QBK293J');`;
          document.getElementsByTagName('head')[0].appendChild(Analytics_script);
          console.log('%c Analytics Added  ' , 'background: #000000; color: #bada55');
// Arrow_Key_Lock
const Arrow_Key_Lock = document.createElement('script');
Arrow_Key_Lock.innerHTML = `window.addEventListener("keydown", function(e) {
 if([32, 37, 38, 39, 40, 65, 87,83, 68].indexOf(e.keyCode) > -1) {
 e.preventDefault();
 }
}, false);`;
 document.getElementsByTagName('head')[0].appendChild(Arrow_Key_Lock)  
    
	runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStart(runtime));
});

async function OnBeforeProjectStart(runtime)
{
	// Code to run just before 'On start of layout' on
	// the first layout. Loading has finished and initial
	// instances are created and available to use here.
	
	runtime.addEventListener("tick", () => Tick(runtime));
}

function Tick(runtime)
{
	// Code to run every tick
}


