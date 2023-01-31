// Academic details

const hsc_name = document.getElementById('Hname');
const hsc_board = document.getElementById('Hboard');
const hsc_score = document.getElementById('Hscore');
const ssc_name = document.getElementById('Sname');
const ssc_board = document.getElementById('Sboard');
const ssc_score = document.getElementById('Sscore');
const pursuing = document.getElementById('cp');
const current_iname = document.getElementById('Iname');
const overall_percent = document.getElementById('op');

const form = document.getElementById('form');
    
const error = document.getElementById('error');
    

var goodColor = "#0C6";
var badColor = "#FF9B37";

form.addEventListener('submit', (e) => {
    let messages = [];

    if (hsc_name.value === '' || hsc_name.value == null) {
        messages.push('name field is required');
    }

    if (hsc_board.value != 'CBSE' && hsc_board.value != 'ICSE' && hsc_board.value != 'STATE') {
        messages.push('HSC board name is not valid');
    }

    if (hsc_score.value.length < 0) {
        messages.push('hsc score is not valid');
    }

    if (ssc_name.value === '' || ssc_name.value == null) {
        messages.push('name field is required');
    }

    if (ssc_board.value != 'CBSE' && ssc_board.value != 'ICSE' && ssc_board.value != 'STATE') {
        messages.push('SSC board name is not valid');
    }

    if (ssc_score.value.length < 0) {
        messages.push('ssc score is not valid');
    }

    if (pursuing.value === '' || pursuing.value == null) {
        messages.push('Currently pursuing field is required');
    }

    if (current_iname.value === '' || current_iname.value == null) {
        messages.push('Current institution field is required');
    }

    if (overall_percent.value.length < 0) {
        messages.push('Overall percent is not valid');
    }

    

    localStorage.setItem('HSCname', JSON.stringify(hsc_name.value));
    localStorage.setItem('HSCboard', JSON.stringify(hsc_board.value));
    localStorage.setItem('HSCscore', JSON.stringify(hsc_score.value));
    localStorage.setItem('SSCname', JSON.stringify(ssc_name.value));
    localStorage.setItem('SSCboard', JSON.stringify(ssc_board.value));
    localStorage.setItem('SSCsore', JSON.stringify(ssc_score.value));
    localStorage.setItem('currently pursuing', JSON.stringify(pursuing.value));
    localStorage.setItem('current_Iname', JSON.stringify(current_iname.value));
    localStorage.setItem('overall_percent', JSON.stringify(overall_percent.value));
   
    

    if(messages.length > 0) {
        e.preventDefault()
        error.innerText = messages.join(', ')
    }

})

   
