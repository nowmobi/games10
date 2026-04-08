var ads = false;
var personalizedAds = false;

var adsLoaded = false;

async function loadAds() {
}

async function createInterstitial() {

}

var adstimer = Date.now();
let ADSTIME = 0;

async function showAds() {
    if (typeof sdk !== 'undefined' && sdk.showBanner !== 'undefined') {
        try {
            await sdk.showBanner();
            return true;
        } catch (e) {

        }
    }
    return false;
}