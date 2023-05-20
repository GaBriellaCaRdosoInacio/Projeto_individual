function validar() {
    
    var select = opcoes.value;
    listaResp.push(select);

    for(var posicao=1; posicao<listaResp.lenght; posicao++){
        if(listaResp[posicao] == listaGabarito[posicao]){
            acerto+=1;
        }
    } 
}