import { the_choices } from "../choices/index.js"
import {style} from "../style.js"

export function question(last_div, old_ref, new_ref, id)
{
    if(last_div.text() == old_ref.choices[id])
    {
        const comment = new_ref.comment;
        if (typeof comment !== 'undefined')
        {
            $("#chat").append("<div id='c_' class='"+style.b_comment+"'>"+new_ref.comment+"</div>")
        }
        $("#chat").append("<div id='q_' class='"+style.b_bot+"'>"+new_ref.question+"</div>")
        the_choices(new_ref)
    }
}