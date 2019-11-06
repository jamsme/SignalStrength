$(document).ready(function () {

    $("button.waves-effect.waves-dark.btn-small").click(function() {
        console.log("button is clicked")
        var limit = 5
        for (var i = 0; i < limit; i++) {
            $.ajax({
                url: '/rssi',
                success: function(resp) {
                    $("#hold").html(JSON.stringify( resp + " dBm"))
                    if (resp <= -69 && resp >= -67) {
                        console.log("greater than 67 less than 69", resp)
                        $(".card-panel").css('background-color', '#fcdd0f')
                    }
                    else if (resp <= -60 && resp >= -66) {
                        console.log("greater than 60 less than 66", resp)
                        $(".card-panel").css('background-color', '#f2ee1c')
                    }
                    else if (resp <= -50 && resp >= -59) {
                        console.log("greater than 50 less than 59", resp)
                        $(".card-panel").css('background-color', '#cce110')
                    }
                    else if (resp <= -0 && resp >= -49) {
                        console.log("best", resp)
                        $(".card-panel").css('background-color', '#7eca26')
                    }
                }
            })
        };
    });

});