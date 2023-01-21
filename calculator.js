const calc = document.querySelector('.btns');
const screen = document.querySelector('.calc-screen');

calc.addEventListener('click', function(event){
    if(!event.target.classList.contains('btn'))return;

    const value = (event.target.innerText);
    
    switch(value){
        case 'AC':
            screen.innerText = '';
            break;
        case 'Del':
            if(screen.innerText.length <= 1){
                screen.innerText = '';
                return;
            }
            else if(screen.innerText.length > 1){
                screen.innerText = screen.innerText.slice(0,-1);
            }
        case '=':
            screen.innerText = eval(screen.innerText).toFixed(2);
            screen.innerText = eval(screen.innerText);
            if(screen.innerText == 'Infinity'){
                screen.innerText = 'Error'
            }
            break;
        default:
            screen.innerText += value;
    }
});

