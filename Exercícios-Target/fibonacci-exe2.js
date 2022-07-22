function fibonacci(i){
	let n1=0;
	let n2=1;
	let n3=0;
	while(i>n3){
	  n3=n1+n2;
	  n1=n2
	  n2=n3
	}
	if(i=0){
	  console.log("O número 0 está na sequência fibonacci.")
	}else if(i=n3){
	  console.log("O número "+i+" está na sequência fibonacci.")
	}else{
	  console.log("Esse número não faz parte da sequência Fibonacci.")
	}
      }
      fibonacci(13)