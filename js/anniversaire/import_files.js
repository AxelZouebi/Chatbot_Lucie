// The function imported should have been exported upstream.
// The script also need to be : type="module"

import {chatbot_open} from '../chatbot/open.js'

$(document).ready(function()
{
    chatbot_open();
})