
listaPerg=[];
var listaPerg= ["2- Você se considera uma pessoa que atrai sorte?", "3- Se um amigo seu está com problemas, você tentaria diversas coisas para poder ajuda-lo?", "4- Você tenta ser positivo mediante as dificuldades?", "5- Sua família é caótica?"];
pergunta.innerHTML= listaPerg[listaPerg[0]];

function proximo(){
    pergunta.innerHTML= ' ';
    contador+=1


    if(contador==1){
        pergunta.innerHTML= listaPerg[listaPerg[0+1]];

}  

else if (contador==2) {
    pergunta.innerHTML= listaPerg[0 + contador]
   
} 

else{
    pergunta.innerHTML= listaPerg[0 + contador]
}

}