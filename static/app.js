function getRespance()
{
    var rawText = $("#userinput").val();
    var userht = '<div class="bubble"><p class="chat userres"><span>'+ rawText + '<span></p></div>';
    $("#userinput").val();
    $("#chatwin").append(userht);
    document.getElementById('userinp').scrollIntoView({block:'start',behavior:'smooth'})
    $.get("/get",{msg:rawText}).done(function (data) {
        var bothtml = '<div class="bubble"><p class="chat bottext"><span>'+ data + '<span></p></div>';
        $("#chatwin").append(bothtml);
        document.getElementById('userinp').scrollIntoView({block:'start',behavior:'smooth'})
    })
}

$('#userinput').keypress(function (e) {
    if(e.which == 13)
    {
        getRespance()
    }
});

$('inputbtn').click(function () {
    getRespance()
})