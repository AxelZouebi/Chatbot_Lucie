import {intro} from './introduction.js'
import {question} from '../questions/question.js';

export function the_question(old_ref, new_ref, id)
{
    console.log('the_question_start')
    const last_div = $("#chat div").last()
    
    // --- INTRODUCTION --- //
    intro(last_div, old_ref, new_ref, id);

    // --- THEN --- //
    console.log('the_question_end')
}