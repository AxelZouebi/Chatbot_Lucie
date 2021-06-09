function chatbot_myanswer_write()
{
    $("#input").keypress(function (e) {
        if (e.which == 13)
        {
            var message = $("#input").val();
            if(message != '')
            {
                $("#chat").append("<div class='message bg-green-500 text-white p-2 self-end my-2 rounded-md shadow ml-3'>"+message+"</div>");
                $("#input").val('');
            }
        }
    });
    $("#send").on("click", function()
    {
        var message = $("#input").val();
        if(message != '')
        {
            $("#chat").append("<div class='message bg-green-500 text-white p-2 self-end my-2 rounded-md shadow ml-3'>"+message+"</div>");
            $("#input").val('');
        }
    })        
};
$(document).ready(function()
{
    chatbot_myanswer_write();
});
