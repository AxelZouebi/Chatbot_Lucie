import { style } from "../chatbot/style.js";
import { anniversaire } from "./data.js";


function message()
{
    const text = anniversaire.question;
    $("#chat").append(
        "<div id='q_km' class='"+style.b_white+"'>"+text+"</div>"
    )
    the_choices(anniversaire);
}