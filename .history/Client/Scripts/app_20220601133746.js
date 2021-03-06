"use strict";
(function () {
    function Start() {
        console.log("App Started!...");
        let XHR = new XMLHttpRequest();
        XHR.open("GET", "./data/data.json");
        XHR.send();
        XHR.addEventListener("readystatechange", function (event) {
            if (XHR.readyState == 4 && XHR.status == 200) {
                console.log("JSON Data:");
                console.log(XHR.responseText);
            }
        });
    }
    window.addEventListener("load", Start);
})();
//# sourceMappingURL=app.js.map