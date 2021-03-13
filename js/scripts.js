//function for carousel

$(function () {
    $(".carousel").carousel({
        // Left the interval at 3000, 2000 felt too fast to me
        interval: 3000,
        pause: "false"
    });
    $("#carouselButton").click(function () 

    {
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause");
        }

    });

});

// function for reserveModal

$(function () {
    $('#reserveButton').click(function () {
        $('#reserveModal').modal('show');
    });
    
});

// function for reserveModal

$(function () {
    $('#loginButton').click(function ()  {
        $('#loginModal').modal('show');
    });
    
});