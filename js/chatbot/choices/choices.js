import {style} from "../style.js"

export function choices(last_div, ref)
{
    if(last_div == ref.question)
    {
        for(var c=1; c <= Object.keys(ref.choices).length; c++)
        {
            $("#choices").append("<button id='choice"+c+"' class='"+style.b_choices+"'>"+ref.choices[c]+"</button>")
        }
    }
}