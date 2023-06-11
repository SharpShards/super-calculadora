let termo = "";

function atualizarDisplay(carac){
    display = oper.value;

    // Apagar tudo
    if(carac == "c"){
        oper.value = "";
        termo = "";

        return;
    }

    // Limite de caracteres
    if(termo.length == 19 || // Número maior que 15 dígitos + 4 pontos
    display == 200){ // Caractere total no display
        return;
    } 

    // Verificar se é um 0 + Número
    if(carac > 0 && // Próximo caractere for um número
    termo[0] == 0 // Caractere antreior for 0
    ){
        console.log(oper.value[display.lastIndexOf(0)]);

        oper.value = display.replace(display[display.lastIndexOf(0)], "");
        termo = oper.value;
    }

    // Atualizar
    if(carac != "c"){
        oper.value += carac;
    }

    // Formatar
    if(display.length == 2 ||
    display.length == 6 ||
    display.length == 10 ||
    display.length == 14){    
        oper.value += ".";        
        termo += "."
    }
    
    // Identificar termos
    if(carac == "+" ||
    carac == "-" ||
    carac == "/" ||
    carac == "x" ||
    carac == "c"){
        termo = "";
    }else{
        termo += carac;
    }
}

const oper  = document.querySelector("#taOperacao");

const c = document.querySelector("main #sctBasica #sctButtons #dvBasico button:nth-child(4)");
    c.addEventListener("click", function apagarCarac(event){
        atualizarDisplay("c");
    })

const plus = document.querySelector("main #sctBasica #sctButtons #dvBasico button:nth-child(20)");
    plus.addEventListener("click", function adicionarPlus(event){
        last = oper.value[oper.value.length - 1];

        if(last == "+" ||
        last == "-" ||
        last == "x" ||
        last == "/" ||
        oper.value.length == 0){     
            event.preventDefault();
        }else{
            atualizarDisplay("+");
        }        
    })

const minus = document.querySelector("main #sctBasica #sctButtons #dvBasico button:nth-child(16)");
    minus.addEventListener("click", function adicionarMinus(event){
        last = oper.value[oper.value.length - 1];

        if(last == "-" ||
        last == "+" ||
        last == "x" ||
        last == "/" ||
        oper.value.length == 0){
            event.preventDefault();
        }else{            
            atualizarDisplay("-");
        }        
    })

const mult = document.querySelector("main #sctBasica #sctButtons #dvBasico button:nth-child(12)");
    mult.addEventListener("click", function adicionarMult(event){
        last = oper.value[oper.value.length - 1];

        if(last == "x" ||
        last == "+" ||
        last == "-" ||
        last == "/" ||
        oper.value.length == 0){
            event.preventDefault();
        }else{                    
            atualizarDisplay("x");
        }        
    })

const div = document.querySelector("main #sctBasica #sctButtons #dvBasico button:nth-child(8)");
    div.addEventListener("click", function adicionarDiv(event){
        last = oper.value[oper.value.length - 1];

        if(last == "/" ||
        last == "+" ||
        last == "-" ||
        last == "x" ||
        oper.value.length == 0){
            event.preventDefault();
        }else{            
            atualizarDisplay("/");
        }        
    })

const zero = document.querySelector("main #sctBasica #sctButtons #dvBasico button:nth-child(17)");
    zero.addEventListener("click", function adicionarZero(event){
        last = oper.value[oper.value.length - 2] + "" + "" + oper.value[oper.value.length - 1];

        if((oper.value.length == 1 && last == "undefined0") || // Só há um caractere e é 0
        last == "+0" ||
        last == "-0" ||
        last == "x0" ||
        last == "/0"){
            event.preventDefault();
        }else{            
            atualizarDisplay("0");
        }     
    })

const um = document.querySelector("#btnUm");
    um.addEventListener("click", function adicionarZero(event){
        atualizarDisplay("1");
    })

const vir = document.querySelector("main #sctBasica #sctButtons #dvBasico button:nth-child(18)");
    vir.addEventListener("click", function adicionarVirgula(event){
        last = oper.value[oper.value.length - 1];        

        if(last == "," ||
        last == "-" ||
        last == "x" ||
        last == "/" ||
        last == "+" ||
        termo.indexOf(',') > 0){ // Um mesmo número não pode ter mais de uma vírgula.
            event.preventDefault();
        }else if(oper.value.length == 0){
            oper.value = "0,";
        }else{            
            atualizarDisplay(",")
        }
    })

// Se colocar zero antes de um número, o número substitui o zero
// tirar ponto antes de sinal de operação
// pontos estão dando problemas
// 