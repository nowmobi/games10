

var idgamedumv = '485';
var intern_so_phut_dumv = 1;

var xem_qc_ok;
var xem_qc_no_ok;
var hienquangcao = function () {
if (typeof sdk !== 'undefined' && sdk.showBanner !== 'undefined') {
sdk.showBanner();
}
}
var bienfunction = function (e) {
hienquangcao();
        e(true);
    
}

var bienfunctionIN = function (e) {
hienquangcao();
    e();
}
window.alert = function () { }
    ;
window.open = function () { }
    ;
var methods = ["log", "debug", "warn", "info", "error"];
for (var i = 0; i < methods.length; i++) {
    console[methods[i]] = function () { }
        ;
}