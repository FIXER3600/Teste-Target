const totalFaturamentos = (arrayFaturamentos) => {
	let total = 0;
	for (let i = 0; i < arrayFaturamentos.length; i++) {
	  total += arrayFaturamentos[i];
	}
	return total;
      };
      const percentual = (arrayFaturamentos) => {
	const total = totalFaturamentos(arrayFaturamentos);
	let result = 0;
	for (let faturamento of arrayFaturamentos) {
	  result = (faturamento / total) * 100;
	  console.log(Math.floor(result)+'%');
	}
	
      };
      
      percentual([67836.43, 36678.66, 29229.88, 27165.48, 19849.53]);