let termo = "";
let display = "";
let novo = "";
let inter = "";

function atualizarDisplay(carac){
    display += carac;

    // Apagar tudo
    if(carac == "c"){
        oper.value = "";
        display = "";
        termo = "";
        inter = "";
        
        return;
    }        

    // Limite de caracteres
    if((termo.length == 15 || // Número tamanho máximo de 15 dígitos
    display == 200) && // Caractere total no display
    (carac != "+" &&
    carac != "-" &&
    carac != "/" &&
    carac != "x")){
        return;
    }

    // Atualizar
    if(carac != "c"){
        oper.value += carac;        
    }    

    // Identificar termos
    if(carac == "+" ||
    carac == "-" ||
    carac == "/" ||
    carac == "x" ||
    carac == "c"){
        termo = "";

        inter = oper.value; // Recebe o que ta no display, sem o termo atual

        return;
    }else{
        termo += carac;
    }

    // Formatar
    if(termo.length == 4 && // 0.000
        termo.indexOf(",") < 0){ // É decimal 
        novo = termo[0] + '.' + termo.substring(1,4);

        oper.value = inter + novo; // termos antigos + atual
    }else if(display.length >= 5 &&
            termo.indexOf(",") < 0){ // É decimal 
        novo = termo.replace(/[.]/g,"");

        if(novo.length == 5){ // 00.000
            novo = termo.substring(0,2) + "." +
                termo.substring(2,5);
        }else if(novo.length == 6){ // 000.000
            novo = termo.substring(0,3) + "." +
                termo.substring(3,6);  
        }else if(novo.length == 7){ // 0.000.000  
            novo = termo[0] + '.' +
                termo.substring(1,4) + "." +
                termo.substring(4,8);
        }else if(novo.length == 8){ // 00.000.000  
            novo = termo.substring(0,2) + "." +
                termo.substring(2,5) + "." +
                termo.substring(5,9);
        }else if(novo.length == 9){ // 000.000.000
            novo = termo.substring(0,3) + "." +
                termo.substring(3,6) + "." +
                termo.substring(6,10);
        }else if(novo.length == 10){ // 0.000.000.000
            novo = termo[0] + "." + 
                termo.substring(1,4) + "." +
                termo.substring(4,7) + "." +
                termo.substring(7,11);
        }else if(novo.length == 11){ // 00.000.000.000
            novo = termo.substring(0,2) + "." + 
                termo.substring(2,5) + "." +
                termo.substring(5,8) + "." +
                termo.substring(8,12);
        }else if(novo.length == 12){ // 000.000.000.000
            novo = termo.substring(0,3) + "." + 
                termo.substring(3,6) + "." +
                termo.substring(6,9) + "." +
                termo.substring(9,13);
        }else if(novo.length == 13){ // 0.000.000.000.000
            novo = termo[0] + "." + 
                termo.substring(1,4) + "." +
                termo.substring(4,7) + "." +
                termo.substring(7,10) + "." +
                termo.substring(10,15);
        }else if(novo.length == 14){ // 00.000.000.000.000
            novo = termo.substring(0,2) + "." + 
                termo.substring(2,5) + "." +
                termo.substring(5,8) + "." +
                termo.substring(8,11) + "." +
                termo.substring(11,16);
        }else if(novo.length == 15){ // 000.000.000.000.000
            novo = termo.substring(0,3) + "." + 
               termo.substring(3,6) + "." +
                termo.substring(6,9) + "." +
                termo.substring(9,12) + "." +
                termo.substring(12,17);
        }        
        
        oper.value = inter + novo // termos antigos + atual
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
        last == "/0" ||
        termo.length <= 0){ // Sem zeros à esquerda
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
        termo.indexOf(',') > 0){ // Um mesmo número não pode ter mais de uma vírgula.
            event.preventDefault();
        }else if(termo.length == 0){
            oper.value += "0,";
            termo = "0,";
        }else{            
            atualizarDisplay(",")
        }
    })