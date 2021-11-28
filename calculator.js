let x = document.getElementById('textbox');
buttons = document.querySelectorAll('button');
let y = '';
for(item of buttons){
    item.addEventListener('click',(e) => {
        buttonText = e.target.innerText;
        if (buttonText == 'X') {
            buttonText = '*';
            y += buttonText;
            textbox.value =  y;
        }
        else if (buttonText == 'C') {
            y = "";
            textbox.value = y;
        }
        else if (buttonText == '=') {
            textbox.value = eval( y);
        }
        else {
            y += buttonText;
            textbox.value = y;
        }
    })
}
