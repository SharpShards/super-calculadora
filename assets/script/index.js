// Funções
function atualizarDisplay(carac){
    // Zera os  resultados para começar uma nova conta
    result.value = "";

    // Apagar tudo
    if(carac == "c"){
        oper.value = "";
        display = "";
        termo = "";
        
        return;
    }

    // Apagar último caractere
    if(carac == "back"){
        let invOper = "";
        let invDisp = "";

        // Inverte String
        // // Pra substituir a última ocorrência
        invOper = oper.value.split('').reverse().join('');
        invDisp = display.split('').reverse().join('');

        // Remove último caractere
        invOper = invOper.replace(oper.value[oper.value.length - 1], "");
        invDisp = invDisp.replace(display[display.length - 1], "");

        // Volta a ordem normal
        oper.value = invOper.split('').reverse().join('');
        display = invDisp.split('').reverse().join('');
    }
    
    // Se for diferente de "c" e "back"
    if(carac != "c" && carac != "back"){
        // Atualiza display
        display += carac;
    }

    // Extrair expressão
    // // Separa os termos entre operadores e ignora índices vazios
    let termos = display.split(/[-+×÷ ]+/).filter(Boolean);

    // // Separa só os sinais
    let sinais = display.split(/[1234567890., ]+/).filter(Boolean);    

    // Formatação
    let form = formatarNum(termos);

    // Junta os termos e sinais para remontar a expressão
    display = ""

    elementoF = 0
    elementoS = 0

    for(let loop = 0; loop < (termos.length + sinais.length); loop++){
        if(loop % 2 == 0){
            display += form[elementoF]

            elementoF += 1
        }else{
            display += sinais[elementoS]

            elementoS += 1
        };
    }
    
    // Mostrar na tela
    oper.value = display;

    // Determina o último termo
    termo = form[form.length - 1];

    // Determinar último caractere
    last = carac;

    // Rolar para a parte mais recente do display
    oper.scrollTop = oper.scrollHeight; 
    result.scrollTop = oper.scrollHeight;
}

function formatarNum(t){
    let f = t.map(function(num){
        // Verifica se termina em vírgula
        const virg = num.endsWith(".")

        // Tira os pontos de todos os termos, caso tenha.
        // Precisa do /\./g para remover todos os pontos, senão dá problema 
        let f = num.replace(/[\.]/g, "");

        // Substitui a vírgula por ponto, para não afetar na hora da formatação.
        f = f.replace(",", ".");

        // Determina as casas decimais
        const posVirg = f.indexOf('.');
  
        let casas = 0;

        if (posVirg !== -1) {
            casas = f.length - posVirg - 1;
        }

        const param = {
            minimumFractionDigits: casas,
            maximumFractionDigits: casas
        }

        // Formata
        f = parseFloat(f).toLocaleString('pt-BR', param);
        
        // Devolve o número com vírgula no final
        if(virg){
            return `${f},`;
        }
        
        // Só devolve o número
        return f
    });

    return f;
}

function zerarCampos(){
    atualizarDisplay("c");
}

function apagarLast(){
    atualizarDisplay("back");
}

function adicionarZero(e){
    if((display.length == 1 && last == "0") || // Só há um caractere e é 0
        termo == "0"){ // Impede zeros à esquerda
        e.preventDefault();
    }else{            
        atualizarDisplay("0");
    }
}

function adicionarUm(){
    // REGRA: O termo não pode começar com zero se não for seguido de vírgula
    if(termo == "0"){
        oper.value = oper.value.slice(0, -1)

        atualizarDisplay("1");
    }else{
        atualizarDisplay("1");
    }    
}

function adicionarDois(){
    // REGRA: O termo não pode começar com zero se não for seguido de vírgula
    if(termo == "0"){
        oper.value = oper.value.slice(0, -1)

        atualizarDisplay("2");
    }else{
        atualizarDisplay("2");
    }  
}

function adicionarTres(){
    // REGRA: O termo não pode começar com zero se não for seguido de vírgula
    if(termo == "0"){
        oper.value = oper.value.slice(0, -1)

        atualizarDisplay("3");
    }else{
        atualizarDisplay("3");
    }  
}

function adicionarQua(){
    // REGRA: O termo não pode começar com zero se não for seguido de vírgula
    if(termo == "0"){
        oper.value = oper.value.slice(0, -1)

        atualizarDisplay("4");
    }else{
        atualizarDisplay("4");
    }  
}

function adicionarCin(){
    // REGRA: O termo não pode começar com zero se não for seguido de vírgula
    if(termo == "0"){
        oper.value = oper.value.slice(0, -1)

        atualizarDisplay("5");
    }else{
        atualizarDisplay("5");
    }  
}

function adicionarSeis(){
    // REGRA: O termo não pode começar com zero se não for seguido de vírgula
    if(termo == "0"){
        oper.value = oper.value.slice(0, -1)

        atualizarDisplay("6");
    }else{
        atualizarDisplay("6");
    }  
}

function adicionarSete(){
    // REGRA: O termo não pode começar com zero se não for seguido de vírgula
    if(termo == "0"){
        oper.value = oper.value.slice(0, -1)

        atualizarDisplay("7");
    }else{
        atualizarDisplay("7");
    }  
}

function adicionarOito(){
    // REGRA: O termo não pode começar com zero se não for seguido de vírgula
    if(termo == "0"){
        oper.value = oper.value.slice(0, -1)

        atualizarDisplay("8");
    }else{
        atualizarDisplay("8");
    }  
}

function adicionarNove(){
    // REGRA: O termo não pode começar com zero se não for seguido de vírgula
    if(termo == "0"){
        oper.value = oper.value.slice(0, -1)

        atualizarDisplay("9");
    }else{
        atualizarDisplay("9");
    }  
}

function adicionarPlus(event){
    // REGRA: Não podem ter dois + seguidos
    // REGRA: Não pode ter um + no começo da expressão
    if(last == "+" ||
       oper.value.length == 0){     
        event.preventDefault();
    // REGRA: Não podem ter dois operadores seguidos
    // Ele substitui
    }else if(last == "-" ||
             last == "×" ||
             last == "÷"){
        oper.value = oper.value.slice(0, -1);
        display = display.slice(0, -1);

        atualizarDisplay("+");
    // Apenas adiciona o +
    }else{
        atualizarDisplay("+");
    }      
}

function adicionarMinus(event){
    // REGRA: Não podem ter dois - seguidos
    // REGRA: Não pode ter um - antes de algum número
    if(last == "-" ||
        oper.value.length == 0){     
         event.preventDefault();
     // REGRA: Não podem ter dois operadores seguidos
     // Ele substitui
     }else if(last == "+" ||
              last == "×" ||
              last == "÷"){
         oper.value = oper.value.slice(0, -1);
         display = display.slice(0, -1);
 
         atualizarDisplay("-");
     // Apenas adiciona o -
     }else{
         atualizarDisplay("-");
     }         
}

function adicionarMult(event){
    // REGRA: Não podem ter dois × seguidos
    // REGRA: Não pode ter um × antes de algum número
    if(last == "×" ||
        oper.value.length == 0){     
         event.preventDefault();
     // REGRA: Não podem ter dois operadores seguidos
     // Ele substitui
     }else if(last == "+" ||
              last == "-" ||
              last == "÷"){
         oper.value = oper.value.slice(0, -1);
         display = display.slice(0, -1);
 
         atualizarDisplay("×");
     // Apenas adiciona o ×
     }else{
        atualizarDisplay("×");
     }        
}

function adicionarDiv(event){
    // REGRA: Não podem ter dois ÷ seguidos
    // REGRA: Não pode ter um ÷ antes de algum número
    if(last == "÷" ||
        oper.value.length == 0){     
         event.preventDefault();
     // REGRA: Não podem ter dois operadores seguidos
     // Ele substitui
     }else if(last == "+" ||
              last == "-" ||
              last == "×"){
         oper.value = oper.value.slice(0, -1);
         display = display.slice(0, -1);    
 
         atualizarDisplay("÷");
     // Apenas adiciona o ÷
     }else{
         atualizarDisplay("÷");
     }       
}

function adicionarVirg(event){
    if(last == "," ||
    termo.indexOf(',') > 0 || // Um mesmo número não pode ter mais de uma vírgula.
    termo.length == 0){  // A expressão não pode começar com vírgula
        event.preventDefault();
    }else{          
        atualizarDisplay(".");
    }
}

function retornarResultado(){
    if(last == "+" || // Termina com um sinal de operação
    last == "-" ||
    last == "×" ||
    last == "÷" ||
    !(display.indexOf("+") > 0 || // Não possui uma operação
    display.indexOf("-") > 0 ||
    display.indexOf("×") > 0 ||
    display.indexOf("÷") > 0)){
        return;
    }

    // Tirar pontos
    expre = display.replace(/["."]/g, "");

    // Substitui as vírgulas por pontos para ele entender que é decimal
    expre = expre.replace(/[","]/g, ".");

    // Substituir × pelo operador de multiplicação
    expre = expre.replace(/["×"]/g, "*");

    // Substituir ÷ pelo operador de divisão
    expre = expre.replace(/["÷"]/g, "/");

    // Resolvendo conta
    res = eval(expre);

    // Volta com as vírgulas antes da formatação
    res = String(res).replace(/["."]/g, ",");

    // Formatar resultado
    // // Transformo em array antes pra não precisar mudar a função de formatação
    // // Que já está criada para receber um array
    let ar = [""]

    ar[0] = String(res);

    res = formatarNum(ar);

    // Retornando resultado
    result.value = res;
    oper.value = "";
    termo = "";
    display = "";
    last = "";
}

// Elementos
const oper  = document.querySelector("#taOperacao")
const result = document.querySelector("#taResultado")

const c = document.querySelector("#btnZerar");
    c.addEventListener("click", zerarCampos)
const back = document.querySelector("#btnBackspace");
    back.addEventListener("click", apagarLast)

const zero = document.querySelector("#btnZero")
    zero.addEventListener("click", adicionarZero)
const um = document.querySelector("#btnUm");
    um.addEventListener("click", adicionarUm)
const dois = document.querySelector("#btnDois");
    dois.addEventListener("click", adicionarDois)
const tres = document.querySelector("#btnTres");
    tres.addEventListener("click", adicionarTres)
const qua = document.querySelector("#btnQua");
    qua.addEventListener("click", adicionarQua)
const cin = document.querySelector("#btnCin");
    cin.addEventListener("click", adicionarCin)
const seis = document.querySelector("#btnSeis");
    seis.addEventListener("click", adicionarSeis)
const sete = document.querySelector("#btnSete");
    sete.addEventListener("click", adicionarSete)
const oito = document.querySelector("#btnOito");
    oito.addEventListener("click", adicionarOito)
const nove = document.querySelector("#btnNove");
    nove.addEventListener("click", adicionarNove)

const plus = document.querySelector("#btnPlus");
    plus.addEventListener("click", adicionarPlus)
const minus = document.querySelector("#btnMinus");
    minus.addEventListener("click", adicionarMinus)
const mult = document.querySelector("#btnMult");
    mult.addEventListener("click", adicionarMult)
const div = document.querySelector("#btnDiv");
    div.addEventListener("click", adicionarDiv)

const virg = document.querySelector("#btnVirgula");
    virg.addEventListener("click", adicionarVirg);

const equal = document.querySelector("#btnIgual");
    equal.addEventListener("click", retornarResultado);

// Declarações
let display = ""; // Toda a expressão
let termo = ""; // Número atual
let last = ""; // Último caractere

let expre = "";
let res = "";
