const blue = document.getElementById('blue');
const red = document.getElementById('red');
const yellow = document.getElementById('yellow');
const green = document.getElementById('green');
const pontuacao = document.getElementById('pontuacao');
const iniciar = document.getElementById('iniciar');

let order = [], score = 0, color = [ blue, yellow, red, green], clicked = [];
let pontos = 0;

pontuacao.value = 0;
pontuacao.disabled = true;
time = 0;

// cores blue, yellow, red, green

iniciar.addEventListener('click', ()=>{
    
    iniciar.value = 'Reiniciar';
    for( let i = 0; i < 4; i++){
        let clr = Math.floor(Math.random() * 4);
        order[i] = color[clr];
    }
    
    console.log('tempo :'+(2000 - time));

    let cnt = 0;

    setInterval( ()=> {
        if( cnt < 4){
            let color = order[cnt];
            color.style.opacity = 0.5;
            setTimeout(()=>{
                color.style.opacity = 1;
            }, 1000 - (time/2));
            console.log(order[cnt].id);
            cnt++;
        }else{
            return;
        }
    }, 2000 - time);
})
    

function clickedColor(id){
    id.style.opacity = 0.5;
    clicked.push(id);
    pontos += 100;
    pontuacao.value = pontos;
    console.log(clicked.length)
    if( order[clicked.length - 1] != clicked[clicked.length - 1]){
        alert('Errou/n Total: '+ pontuacao.value);
        location.reload();
    }else if( clicked.length == 4){
        alert('Venceu!!!\n Se quiser, comece o próximo jogo!');
        iniciar.value = 'Próximo nível';
        clicked = [];
        if( (2000 - time) > 200){
            time +=200;
        }
    }
    setTimeout(()=>{
        id.style.opacity = 1;
    }, 100);
}

blue.onclick = ()=>{
    clickedColor(blue);
}

yellow.onclick = ()=>{
    clickedColor(yellow);
}

red.onclick = ()=>{
    clickedColor(red);
}

green.onclick = ()=>{
    clickedColor(green);
}