fetch(`https://economia.awesomeapi.com.br/json/last/USD-BRL`)
.then((response) => {
  return response.json();
})
.then((economia) => {
  console.log(economia);
 

  cotacao = economia.USDBRL.bid;

  
  //CONVERSÃO-5
  const num5 = document.getElementById("num5");
  const resultado5= document.getElementById("resultado5");

  num5.value = 55; 

  const valorNum5 = parseInt(num5.value);
  const conversao5 = valorNum5 * parseFloat(cotacao);
  resultado5.textContent = conversao5.toFixed(2);

    
  //CONVERSÃO-6
  const num6 = document.getElementById("num6");
  const resultado6= document.getElementById("resultado6");

  num6.value = 20; 

  const valorNum6 = parseInt(num6.value);
  const conversao6 = valorNum6 * parseFloat(cotacao);
  resultado6.textContent = conversao6.toFixed(2);

    //CONVERSÃO-7
    const num7 = document.getElementById("num7");
    const resultado7= document.getElementById("resultado7");
  
    num7.value = 20; 
  
    const valorNum7 = parseInt(num7.value);
    const conversao7 = valorNum7 * parseFloat(cotacao);
    resultado7.textContent = conversao7.toFixed(2);

      //CONVERSÃO-8
      const num8 = document.getElementById("num8");
      const resultado8= document.getElementById("resultado8");
    
      num8.value = 15; 
    
      const valorNum8 = parseInt(num8.value);
      const conversao8 = valorNum8 * parseFloat(cotacao);
      resultado8.textContent = conversao8.toFixed(2);

      //CONVERSÃO-9
      const num9 = document.getElementById("num9");
      const resultado9= document.getElementById("resultado9");
    
      num9.value = 15; 
    
      const valorNum9 = parseInt(num9.value);
      const conversao9 = valorNum9 * parseFloat(cotacao);
      resultado9.textContent = conversao9.toFixed(2);

  //CONVERSÃO-11
  const num11 = document.getElementById("num11");
  const resultado11 = document.getElementById("resultado11");

  num11.value = 50; 

  const valorNum11 = parseInt(num11.value);
  const conversao11 = valorNum11 * parseFloat(cotacao);
  resultado11.textContent = conversao11.toFixed(2);


   //CONVERSÃO-12
   const num12 = document.getElementById("num12");
   const resultado12 = document.getElementById("resultado12");
 
   num12.value = 55; 
 
   const valorNum12 = parseInt(num12.value);
   const conversao12 = valorNum12 * parseFloat(cotacao);
   resultado12.textContent = conversao12.toFixed(2);


   //CONVERSÃO-13
   const num13 = document.getElementById("num13");
   const resultado13 = document.getElementById("resultado13");
 
   num13.value = 15; 
 
   const valorNum13 = parseInt(num13.value);
   const conversao13 = valorNum13 * parseFloat(cotacao);
   resultado13.textContent = conversao13.toFixed(2);



   //CONVERSÃO-14
   const num14 = document.getElementById("num14");
   const resultado14 = document.getElementById("resultado14");
 
   num14.value = 10; 
 
   const valorNum14 = parseInt(num14.value);
   const conversao14 = valorNum14 * parseFloat(cotacao);
   resultado14.textContent = conversao14.toFixed(2);



   //CONVERSÃO-15
   const num15 = document.getElementById("num15");
   const resultado15 = document.getElementById("resultado15");
 
   num15.value = 60; 
 
   const valorNum15 = parseInt(num15.value);
   const conversao15 = valorNum15 * parseFloat(cotacao);
   resultado15.textContent = conversao15.toFixed(2);


   
   //CONVERSÃO-16
   const num16 = document.getElementById("num16");
   const resultado16 = document.getElementById("resultado16");
 
   num16.value = 35; 
 
   const valorNum16 = parseInt(num16.value);
   const conversao16 = valorNum16 * parseFloat(cotacao);
   resultado16.textContent = conversao16.toFixed(2);


   
   //CONVERSÃO-17
   const num17 = document.getElementById("num17");
   const resultado17 = document.getElementById("resultado17");
 
   num17.value = 45; 
 
   const valorNum17 = parseInt(num17.value);
   const conversao17 = valorNum17 * parseFloat(cotacao);
   resultado17.textContent = conversao17.toFixed(2);


   
   //CONVERSÃO-18
   const num18 = document.getElementById("num18");
   const resultado18 = document.getElementById("resultado18");
 
   num18.value = 20; 
 
   const valorNum18 = parseInt(num18.value);
   const conversao18 = valorNum18 * parseFloat(cotacao);
   resultado18.textContent = conversao18.toFixed(2);

   
   //CONVERSÃO-19
   const num19 = document.getElementById("num19");
   const resultado19 = document.getElementById("resultado19");
 
   num19.value = 40; 
 
   const valorNum19 = parseInt(num19.value);
   const conversao19 = valorNum19 * parseFloat(cotacao);
   resultado19.textContent = conversao19.toFixed(2);

   //CONVERSÃO-20
   const num20 = document.getElementById("num20");
   const resultado20 = document.getElementById("resultado20");
 
   num20.value = 30; 
 
   const valorNum20 = parseInt(num20.value);
   const conversao20 = valorNum20 * parseFloat(cotacao);
   resultado20.textContent = conversao20.toFixed(2);

   //CONVERSÃO-21
   const num21 = document.getElementById("num21");
   const resultado21 = document.getElementById("resultado21");
 
   num21.value = 30; 
 
   const valorNum21 = parseInt(num21.value);
   const conversao21 = valorNum21 * parseFloat(cotacao);
   resultado21.textContent = conversao21.toFixed(2);


   //CONVERSÃO-22
   const num22 = document.getElementById("num22");
   const resultado22 = document.getElementById("resultado22");
 
   num22.value = 30; 
 
   const valorNum22 = parseInt(num22.value);
   const conversao22 = valorNum22 * parseFloat(cotacao);
   resultado22.textContent = conversao22.toFixed(2);


   //CONVERSÃO-23
   const num23 = document.getElementById("num23");
   const resultado23 = document.getElementById("resultado23");
 
   num23.value = 30; 
 
   const valorNum23 = parseInt(num23.value);
   const conversao23 = valorNum23 * parseFloat(cotacao);
   resultado23.textContent = conversao23.toFixed(2);


   //CONVERSÃO-24
   const num24 = document.getElementById("num24");
   const resultado24 = document.getElementById("resultado24");
 
   num24.value = 30; 
 
   const valorNum24 = parseInt(num24.value);
   const conversao24 = valorNum24 * parseFloat(cotacao);
   resultado24.textContent = conversao24.toFixed(2);



   //CONVERSÃO-25
   const num25 = document.getElementById("num25");
   const resultado25 = document.getElementById("resultado25");
 
   num25.value = 30; 
 
   const valorNum25 = parseInt(num25.value);
   const conversao25 = valorNum25 * parseFloat(cotacao);
   resultado25.textContent = conversao25.toFixed(2);


  
});