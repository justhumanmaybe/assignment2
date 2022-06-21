
//AKA -- anonymous self-executing function

(function()
{
    function Start()
    {
        console.log("App Started!...");

        $("a.delete").on("click", function(event)
        {   if(!confirm("Are you sure?"))
        {
            event.preventDefault();
            location.href = "./business_contact";

        }
        });

    }

    window.addEventListener("load", Start);
    

})();