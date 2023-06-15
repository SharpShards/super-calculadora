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
    if(termo.length == 20 || // Número maior que 15 dígitos + 4 pontos + 1 por algum motivo
    display == 200){ // Caractere total no display
        return;
    } 

    // Verificar se é um 0 + Número
    if(carac > 0 && // Próximo caractere for um número
    termo[0] == 0 // Caractere antreior for 0
    ){
        oper.value = display.replace(display[display.lastIndexOf(0)], "");
        termo = oper.value;
    }

    // Atualizar
    if(carac != "c"){
        oper.value += carac;
    }

    // Formatar
    if(display.length == 3){ // 0.000
        novo = oper.value[oper.value.length - 4] + '.';

        for(let loop = 1; loop <= 3; loop++){
            novo += oper.value[loop];
        }        

        oper.value = novo;
        termo = novo;
    }else if(display.length >= 5){
        novo = oper.value.replace(/[.]/g,"");
        oper.value = novo;

        if(novo.length == 5){ // 00.000
            novo = novo.substring(0,2) + "." +
                oper.value.substring(2,5);
        }else if(novo.length == 6){ // 000.000
            novo = novo.substring(0,3) + "." +
                oper.value.substring(3,6);  
        }else if(novo.length == 7){ // 0.000.000  
            novo = oper.value[0] + '.' +
                oper.value.substring(1,4) + "." +
                oper.value.substring(4,8);
        }else if(novo.length == 8){ // 00.000.000  
            novo = oper.value.substring(0,2) + "." +
                oper.value.substring(2,5) + "." +
                oper.value.substring(5,9);
        }else if(novo.length == 9){ // 000.000.000
            novo = oper.value.substring(0,3) + "." +
                oper.value.substring(3,6) + "." +
                oper.value.substring(6,10);
        }else if(novo.length == 10){ // 0.000.000.000
            novo = oper.value[0] + "." + 
                oper.value.substring(1,4) + "." +
                oper.value.substring(4,7) + "." +
                oper.value.substring(7,11);
        }else if(novo.length == 11){ // 00.000.000.000
            novo = oper.value.substring(0,2) + "." + 
                oper.value.substring(2,5) + "." +
                oper.value.substring(5,8) + "." +
                oper.value.substring(8,12);
        }else if(novo.length == 12){ // 000.000.000.000
            novo = oper.value.substring(0,3) + "." + 
                oper.value.substring(3,6) + "." +
                oper.value.substring(6,9) + "." +
                oper.value.substring(9,13);
        }else if(novo.length == 13){ // 0.000.000.000.000
            novo = oper.value[0] + "." + 
                oper.value.substring(1,4) + "." +
                oper.value.substring(4,7) + "." +
                oper.value.substring(7,10) + "." +
                oper.value.substring(10,15);
        }else if(novo.length == 14){ // 00.000.000.000.000
            novo = oper.value.substring(0,2) + "." + 
                oper.value.substring(2,5) + "." +
                oper.value.substring(5,8) + "." +
                oper.value.substring(8,11) + "." +
                oper.value.substring(11,16);
        }else if(novo.length == 15){ // 000.000.000.000.000
            novo = oper.value.substring(0,3) + "." + 
                oper.value.substring(3,6) + "." +
                oper.value.substring(6,9) + "." +
                oper.value.substring(9,12) + "." +
                oper.value.substring(12,17);
        }
        
        oper.value = novo;
        termo = novo;
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
    um.addEventListener("click", function adicionarUm(event){
        atualizarDisplay("1");
    })

const dois = document.querySelector("#btnDois");
    dois.addEventListener("click", function adicionarDois(event){
        atualizarDisplay("2");
    })

const tres = document.querySelector("#btnTres");
    tres.addEventListener("click", function adicionarTres(event){
        atualizarDisplay("3");
    })

const qua = document.querySelector("#btnQua");
    qua.addEventListener("click", function adicionarQua(event){
        atualizarDisplay("4");
    })

const cin = document.querySelector("#btnCin");
    cin.addEventListener("click", function adicionarCin(event){
        atualizarDisplay("5");
    })

const seis = document.querySelector("#btnSeis");
    seis.addEventListener("click", function adicionarSeis(event){
        atualizarDisplay("6");
    })

const sete = document.querySelector("#btnSete");
    sete.addEventListener("click", function adicionarSete(event){
        atualizarDisplay("7");
    })

const oito = document.querySelector("#btnOito");
    oito.addEventListener("click", function adicionarOito(event){
        atualizarDisplay("8");
    })

const nove = document.querySelector("#btnNove");
    nove.addEventListener("click", function adicionarNove(event){
        atualizarDisplay("9");
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