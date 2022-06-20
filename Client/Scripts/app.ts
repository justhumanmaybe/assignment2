
//AKA -- anonymous self-executing function

(function()
{
    function Start()
    {
        console.log("App Started!...");
        //use AJAX to read JSON file
        //step1: create XHR object
        let XHR = new XMLHttpRequest();
        //step2: create the request
        XHR.open("GET", "./data/data.json");
        //step3: send the request
        XHR.send();
        //step4: create an event listener/handler
        XHR.addEventListener("readystatechange", function(event)
        {
            if(XHR.readyState == 4 && XHR.status == 200)
            {
                console.log("JSON Data:")
                console.log(XHR.responseText);
            }
        })

    }

    window.addEventListener("load", Start);
    

})();