import {discussion} from "../chatbot/data.js"
import {the_question} from "../chatbot/questions/index.js"

function chatbot_myanswer_choice()
{
    for(var i=1; i <= Object.keys(discussion[1].choices).length; i++)
    { 
        $("#choice"+i).on("click", function()
        {
            var answer = $(this).text();
            $("#chat").append("<div class='message bg-green-500 text-white p-2 self-end my-2 rounded-md shadow ml-3'>"+answer+"</div>");
            $("#choices").remove();
            the_question();
        })
    }
};
$(document).ready(function()
{
    chatbot_myanswer_choice();
});