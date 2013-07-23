setTimeout(function(){
    // Show our element, then call our callback
    $(".play").show(function(){
        // Find the iframes within our newly-visible element
        $(this).find("iframe").prop("src", function(){
            // Set their src attribute to the value of data-src
            return $(this).data("src");
        });
    });
    $("p").remove();
}, 1000);