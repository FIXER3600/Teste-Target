import dados from './../dados'

const menorFaturamento = () => {
	const valores = dados
	  .filter((dados) => {
	    return dados.valor > 0;
	  })
	  .map((dado) => {
	    return dado.valor;
	  });
	const mediaMensal = (valores) => {
	  let total = 0;
	  for (const valor of valores) {
	    total += valor;
	  }
	  return total / valores.length;
	};
	const media = mediaMensal(valores);
	
      
	const dias = dados
	  .filter((dados) => {
	    return dados.valor > media;
	  })
	  .map((dado) => {
	    return dado.dia;
	 
	  });
	
	const maior = Math.max(...valores);
	const menor = Math.min(...valores);
	const numDias=dias.length
	return "O menor: " + menor + "O maior: " + maior+" Número de Dias: "+numDias;
      };
console.log(menorFaturamento())