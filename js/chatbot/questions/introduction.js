import { anniversaire } from "../../anniversaire/data.js";
import { the_choices } from "../choices/index.js";
import {introduction} from "../data.js"
import { style } from "../style.js";

export function intro(last_div, old_ref, new_ref, id)
{   
    if(last_div.text() == 'Hey !')
    {
        const text = introduction.question;       
        $("#chat").append("<div id='q_int' class='"+style.b_bot+"'>"+text+"</div>")
        the_choices(introduction);
    }
    else if(last_div.text() == 'Fête des pères')
    {
        const text = fete_des_peres.question;       
        $("#chat").append("<div id='q_fdp' class='"+style.b_bot+"'>"+text+"</div>")
        the_choices(fete_des_peres);
    }
    else if(last_div.text() == 'Fête des mères')
    {
        const text = fete_des_meres.question;       
        $("#chat").append("<div id='q_fdm' class='"+style.b_bot+"'>"+text+"</div>")
        the_choices(fete_des_meres);
    }
    else if(last_div.text() == 'Anniversaire')
    {
        const text = anniversaire.question;       
        $("#chat").append("<div id='q_ann' class='"+style.b_bot+"'>"+text+"</div>")
        the_choices(anniversaire);
    }
    else if(last_div.text() == old_ref.choices[id])
    {
        if (typeof new_ref.comment !== 'undefined')
        {
            $("#chat").append("<div id='c_' class='"+style.b_comment+"'>"+new_ref.comment+"</div>")
        }   
        if (typeof new_ref.goal !== 'undefined')
        {
            $("#chat").append("<div id='goal' class='message bg-white text-gray-700 p-2 self-start my-2 rounded-md shadow mr-3 font-bold'>Notre liste :</div>")
            for(var c=1; c <= Object.keys(new_ref.goal).length; c++)
            {
                $("#goal").append("<div id='goal"+c+"' class='"+style.b_goal+"'>"+new_ref.goal[c]+"</div>")
            }
        }
        else
        {
            $("#chat").append("<div id='q_' class='"+style.b_bot+"'>"+new_ref.question+"</div>")
            the_choices(new_ref)
        }     
    }
    
};