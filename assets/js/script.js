const oper  = document.querySelector("#taOperacao");

const c = document.querySelector("main #sctBasica #sctButtons #dvBasico button:nth-child(4)");
    c.addEventListener("click", function apagarCarac(event){
        oper.value = "";
    })

const plus = document.querySelector("main #sctBasica #sctButtons #dvBasico button:nth-child(20)");
    plus.addEventListener("click", function adicionarPlus(event){
        last = oper.value[oper.value.length - 1];

        if(last == "+" ||
            last == "-" ||
            last == "x" ||
            last == "/"){ 
            event.preventDefault();
            console.log('Lucas');
        }else{
            oper.value += "+";
        }        
    })

const minus = document.querySelector("main #sctBasica #sctButtons #dvBasico button:nth-child(16)");
    minus.addEventListener("click", function adicionarMinus(event){
        last = oper.value[oper.value.length - 1];

        if(last == "-" ||
            last == "+" ||
            last == "x" ||
            last == "/"){
            event.preventDefault();
        }else{
            oper.value += "-";
        }        
    })

const mult = document.querySelector("main #sctBasica #sctButtons #dvBasico button:nth-child(12)");
    mult.addEventListener("click", function adicionarMult(event){
        last = oper.value[oper.value.length - 1];

        if(last == "x" ||
            last == "+" ||
            last == "-" ||
            last == "/"){
            event.preventDefault();
        }else{
            oper.value += "x";
        }        
    })

const div = document.querySelector("main #sctBasica #sctButtons #dvBasico button:nth-child(8)");
    div.addEventListener("click", function adicionarDiv(event){
        last = oper.value[oper.value.length - 1];

        if(last == "/" ||
            last == "+" ||
            last == "-" ||
            last == "x"){
            event.preventDefault();
        }else{
            oper.value += "/";
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
            oper.value += "0";
        }        
    })