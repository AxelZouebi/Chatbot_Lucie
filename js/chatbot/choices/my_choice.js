import {introduction} from "../data.js"
import { the_question } from "../questions/index.js";
import { style } from "../style.js";

export function my_choice(the_data)
{
    for(var i=1; i <= Object.keys(the_data.choices).length; i++)
    {
        $("#choice"+i).on("click", function()
        {
            const answer = $(this).text();
            const id = Object.keys(the_data.choices).find(key => the_data.choices[key] === answer);
            $("#chat").append("<div id='"+id+"' class='"+style.b_answer+"'>"+answer+"</div>");
            $("#choices").remove();
            const temp1 = answer.toLocaleLowerCase();
            const temp2 = temp1.replaceAll(" ", "_");
            const temp3 = temp2.replaceAll("é", "e");
            const temp4 = temp3.replaceAll("ê", "e");
            const the_new_data = temp4.replaceAll("è", "e");
            console.log(the_new_data, the_data[the_new_data]);
            the_question(the_data, the_data[the_new_data], id);
        })
    }
};
