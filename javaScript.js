 const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu');

menu.addEventListener('click', () =>{
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
})


        fetch(`https://economia.awesomeapi.com.br/json/last/USD-BRL`)
          .then((response) => {
            return response.json();
          })
          .then((economia) => {
            console.log(economia);
           
      
            cotacao = economia.USDBRL.bid;

            //CONVERSÃO-1
            const num1 = document.getElementById("num1");
            const resultado = document.getElementById("resultado");

            num1.value = 10; 
 
            const valorNum1 = parseInt(num1.value);
            const conversao = valorNum1 * parseFloat(cotacao);
            resultado.textContent = conversao.toFixed(2);


            //CONVERSÃO-2
            const num2 = document.getElementById("num2");
            const resultado2 = document.getElementById("resultado2");

            num2.value = 15; 
 

            const valorNum2 = parseInt(num2.value);
            const conversao2 = valorNum2 * parseFloat(cotacao);
            resultado2.textContent = conversao2.toFixed(2);



            //CONVERSÃO-3
            const num3 = document.getElementById("num3");
            const resultado3 = document.getElementById("resultado3");

            num3.value = 20; 
 

            const valorNum3 = parseInt(num3.value);
            const conversao3 = valorNum3 * parseFloat(cotacao);
            resultado3.textContent = conversao3.toFixed(2);



             //CONVERSÃO-4
             const num4 = document.getElementById("num4");
             const resultado4 = document.getElementById("resultado4");
 
             num4.value = 20; 
  
 
             const valorNum4 = parseInt(num4.value);
             const conversao4 = valorNum4 * parseFloat(cotacao);
             resultado4.textContent = conversao4.toFixed(2);

             
             //CONVERSÃO-5
             const num5 = document.getElementById("num5");
             const resultado5 = document.getElementById("resultado5");
 
             num5.value = 15; 
  
 
             const valorNum5 = parseInt(num5.value);
             const conversao5 = valorNum5 * parseFloat(cotacao);
             resultado5.textContent = conversao5.toFixed(2);


             
             //CONVERSÃO-6
             const num6 = document.getElementById("num6");
             const resultado6 = document.getElementById("resultado6");
 
             num6.value = 30; 
  
 
             const valorNum6 = parseInt(num6.value);
             const conversao6 = valorNum6 * parseFloat(cotacao);
             resultado6.textContent = conversao6.toFixed(2);


             
             //CONVERSÃO-7
             const num7 = document.getElementById("num7");
             const resultado7 = document.getElementById("resultado7");
 
             num7.value = 45; 
  
 
             const valorNum7 = parseInt(num7.value);
             const conversao7 = valorNum7 * parseFloat(cotacao);
             resultado7.textContent = conversao7.toFixed(2);

             
             //CONVERSÃO-8
             const num8 = document.getElementById("num8");
             const resultado8 = document.getElementById("resultado8");
 
             num8.value = 30; 
  
 
             const valorNum8 = parseInt(num8.value);
             const conversao8 = valorNum8 * parseFloat(cotacao);
             resultado8.textContent = conversao8.toFixed(2);


             //CONVERSÃO-9
             const num9 = document.getElementById("num9");
             const resultado9 = document.getElementById("resultado9");
 
             num9.value = 25; 
  
 
             const valorNum9 = parseInt(num9.value);
             const conversao9 = valorNum9 * parseFloat(cotacao);
             resultado9.textContent = conversao9.toFixed(2);


              //CONVERSÃO-10
              const num10 = document.getElementById("num10");
              const resultado10 = document.getElementById("resultado10");
  
              num10.value = 20; 
   
  
              const valorNum10 = parseInt(num10.value);
              const conversao10 = valorNum10 * parseFloat(cotacao);
              resultado10.textContent = conversao10.toFixed(2);


              //CONVERSÃO-11
              const num11 = document.getElementById("num11");
              const resultado11 = document.getElementById("resultado11");
  
              num11.value = 10; 
   
  
              const valorNum11 = parseInt(num11.value);
              const conversao11 = valorNum11 * parseFloat(cotacao);
              resultado11.textContent = conversao11.toFixed(2);



              //CONVERSÃO-12
              const num12 = document.getElementById("num12");
              const resultado12 = document.getElementById("resultado12");
  
              num12.value = 380; 
   
  
              const valorNum12 = parseInt(num12.value);
              const conversao12 = valorNum12 * parseFloat(cotacao);
              resultado12.textContent = conversao10.toFixed(2);



              //CONVERSÃO-13
              const num13 = document.getElementById("num13");
              const resultado13 = document.getElementById("resultado13");
  
              num13.value = 10; 
   
  
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
  
              num15.value = 12; 
   
  
              const valorNum15 = parseInt(num15.value);
              const conversao15 = valorNum15 * parseFloat(cotacao);
              resultado15.textContent = conversao15.toFixed(2);



              //CONVERSÃO-16
              const num16 = document.getElementById("num16");
              const resultado16 = document.getElementById("resultado16");
  
              num16.value = 20; 
   
  
              const valorNum16 = parseInt(num16.value);
              const conversao16 = valorNum16 * parseFloat(cotacao);
              resultado16.textContent = conversao16.toFixed(2);


               //CONVERSÃO-17
               const num17 = document.getElementById("num17");
               const resultado17 = document.getElementById("resultado17");
   
               num17.value = 15; 
    
   
               const valorNum17 = parseInt(num17.value);
               const conversao17 = valorNum17 * parseFloat(cotacao);
               resultado17.textContent = conversao17.toFixed(2);


                //CONVERSÃO-18
              const num18 = document.getElementById("num18");
              const resultado18 = document.getElementById("resultado18");
  
              num18.value = 12; 
   
  
              const valorNum18 = parseInt(num18.value);
              const conversao18 = valorNum18 * parseFloat(cotacao);
              resultado18.textContent = conversao18.toFixed(2);


               //CONVERSÃO-19
               const num19 = document.getElementById("num19");
               const resultado19 = document.getElementById("resultado19");
   
               num19.value = 30; 
    
   
               const valorNum19 = parseInt(num19.value);
               const conversao19 = valorNum19 * parseFloat(cotacao);
               resultado19.textContent = conversao19.toFixed(2);


               
               //CONVERSÃO-20
               const num20 = document.getElementById("num20");
               const resultado20 = document.getElementById("resultado20");
   
               num20.value = 40; 
    
   
               const valorNum20 = parseInt(num20.value);
               const conversao20 = valorNum20 * parseFloat(cotacao);
               resultado20.textContent = conversao20.toFixed(2);

           });
         

          
      

