// pergunta.innerHTML= listaPerg[contadorP];
var listaPerg= [["1- Você considera sua imaginação fértil?"],["2- Você se considera uma pessoa que atrai sorte?"], ["3- Se um amigo seu está com problemas, você tentaria diversas coisas para poder ajuda-lo?"], ["4- Você tenta ser positivo mediante as dificuldades?"], ["5- Sua família é caótica?"]];
var contadorP=0;

var listaResp=[];
var listaGabarito= [' ', 'A', 'B', 'A','A', 'A'];
var acerto=0;


function proximo(){

    if(contadorP< listaPerg.length){
    pergunta.innerHTML= listaPerg[contadorP];
    oi.innerHTML= ' ';
    clique.innerHTML=' ';


}
contadorP++;

// if(contadorP==6){
//     window.location.assign("../Public/homepage.html");
// }

}



    // if(listaResp[1] == listaGabarito[1]){
    //     acerto= 1;
    // }

    // if(listaResp[2] == listaGabarito[2]){
    //     acerto+1;
    // }


    // if(listaResp[3] == listaGabarito[3]){
    //     acerto+=1;
        
    // }

    // if(listaResp[4] == listaGabarito[4]){
    //     acerto+=1;
    // }

    // if(listaResp[5] == listaGabarito[5]){
    //     acerto+=1;
    // }

