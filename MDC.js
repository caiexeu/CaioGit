function mdc(m,n){
    var candidato = 0;
    m = parseInt(m);
    n = parseInt(n);

    candidato = Math.min(m,n);

    while(m % candidado != 0 || n % candidato != 0){
        candidato--;
    }
    return candidato;
} 