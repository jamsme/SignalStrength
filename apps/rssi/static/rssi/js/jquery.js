$(document).ready(function () {

    $("button.waves-effect.waves-dark.btn-small").click(function() {
        console.log("button is clicked")
        var i
        var limit = 5
        for (i = 0; i < limit; i++) {
            $.ajax({
                url: '/rssi',
                success: function(resp){
                    $("#hold").html(JSON.stringify(resp[1] + resp[2]))
                    console.log(resp[1] + resp[2]);
                }
            })
        };
    });

});