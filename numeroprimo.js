P = 0;
 N = 0;
 Exit = false;
  do {
   N = 501
   if(N == 0)
    console.log('Entre com um número diferente de 0!.');
   }

  while(N == 0);
  if(Exit == false) {
   for(var i=2;i<N;i++) {
    if(N % i == 0) {    
     P = 1;
     console.log('O número ' + N + ' não é primo, pois ' + N + ' / ' + i + ' = 0.');    
     // O uso de break; é opcional
    }  
   }
   if(N == 2) {
     P = 1;
     console.log('O número ' + N + ' não é primo, pois ' + N + ' / ' + i + ' = 0.');    
   }
   if(P == 0 || N == 1)
   console.log('O número ' + N + ' é primo!');    
  } 
