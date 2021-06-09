import {introduction} from "../data.js"
import {my_choice} from "../choices/my_choice.js"
import { choices } from "./choices.js"

export function the_choices(the_data)
{
    console.log('the_choices_start')

    const last_div = $("#chat div").last()
    if(last_div.attr('id').includes('q_'))
    {
        const the_question = last_div.text()
        $("#chat").append("<div id='choices' class='self-end'></div>")
        choices(the_question, the_data);
        my_choice(the_data);
    }

    console.log('the_choices_end')
}