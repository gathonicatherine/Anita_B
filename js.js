function add (a=100,b=2){
    console.log(a+b);
    }
    (a,b)=>returna+100;
    (a,b)=>a+100;
    let sum = (a,b)=>a+b;
    

    let sum = (a,b)=>a+b
    console.log(sum(5,2));
    const sum1 = (a,b,c)=>a+b+c;
    console.log(sum1(5,7,8));

    ((a,b)=>a+b+100)
    console.log(3,4);
    ((x,y)=>{
          console.log(x+y+100);
    })(1,2);                    
    
   let Car={
         color:"blue",
         make:"Subaru",
         origin:"Japan",
         price:1200000,
         other: function(country){    
               console.log("these cars are exported to" + country)

         }
   };
   Car.other ("Kenya")        

// let item={
//       item1:"Orange",
//       item2:"Mango",
//       item3:"Avocado",
//       item4:"Peach",
//       cost:function(orangePrice,mangoPrice,avocadoPrice,peachPrice){
//             return`I am buying 3 ${item.item1} at ${orangePrice*2},6 ${item.item2} at ${mangoPrice*6} ,2 ${this.item4} at ${peachPrice*2} and ${item.item3} at ${avocadoPrice}`
//       },

// console.log(item.cost(20,35,120,50));


// function favNumber(x, callback){
//       console.log( x + 'is my favourite number');   
//       console.log(`${x} is my favourite number`);  
//      callback();
// }
function otherNumber(){
    console.log(456);

}
favNumber (3,otherNumber);


  function findLargest(e,f,g,h,i,j){
        let number=[f,g,h,i,j];
        let largest=0;
        for (let num of number){
              if(num>largest){
                    num=0;
              }
        }
        console.log(largest);
  }
  findLargest(2,5,67,89,09,87)