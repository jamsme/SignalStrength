$(document).ready(function () {

    $("#go").click(window.boom = function(){
        console.log("button is clicked")
        var i
        var limit = 5
        for (i = 0; i < limit; i++) {
            $.ajax({
                url: '/rssi',
                success: function(resp){
                    console.log(resp[1] + resp[2]);
                    $("#hold").html(JSON.stringify(resp[1] + resp[2]))
                }
            })
        };
    });
    
});