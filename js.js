var display = document.getElementById('display')

var primeiroValor    = false
var operador         = false
var segundoValor     = false
 
const valor = [];

for(var i = 1; i <= 10; i++){
    document.getElementById('b' + i).addEventListener('click', function() {
        display.value += this.value
        var num = parseInt(document.getElementById('display').value)
        console.log(num)
    
    });
}

document.getElementById('divide').addEventListener('click', function() {
        primeiroValor = display.value
        operador = this.id

        display.value = ''
});

document.getElementById('cross').addEventListener('click', function() {
    primeiroValor = display.value
    operador = this.id

    display.value = ''
});

document.getElementById('plus').addEventListener('click', function() {
    primeiroValor = display.value
    operador = this.id

    display.value = ''
});

document.getElementById('subtract').addEventListener('click', function() {
    primeiroValor = display.value
    operador = this.id

    display.value = ''
});

if (primeiroValor == Number){
    for(var i = 1; i <= 10; i++){
        document.getElementById('b' + i).addEventListener('click', function() {
            display.value += this.value
            var num = parseInt(document.getElementById('display').value)
            console.log(num)
        
        });
    }
}

document.getElementById('equal').addEventListener('click', function(){
    segundoValor = display.value
    
    if(operador == 'plus'){
        display.value = parseInt(primeiroValor) + parseInt(segundoValor)
    }else if(operador == 'divide'){
        display.value = parseInt(primeiroValor) / parseInt(segundoValor)
    }else if(operador == 'cross'){
        display.value = parseInt(primeiroValor) * parseInt(segundoValor)
    }else if(operador == 'subtract'){
        display.value = parseInt(primeiroValor) - parseInt(segundoValor)
    }

})