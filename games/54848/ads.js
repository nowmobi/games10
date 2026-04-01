
var adstimer = Date.now();
let ADSTIME = 0;

async function showAds() {
    const now = Date.now();
    if (now - adstimer > ADSTIME) {
        ADSTIME = 20000;
        adstimer = now;
        try {
            await sdk.showBanner();
            return true;
        } catch (e) {

        }
    }
    return false;
}