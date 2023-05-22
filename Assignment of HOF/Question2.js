//2. Random Number Generator with Delay and Progress Indication:


const delay = 3;
console.log(`Genrating a random number after a delay ${delay} of  seconds ......`);

let countDown = 3;
const intervalId = setInterval(()=>{
    countDown --;
    console.log(`${countDown} seconds is remaining`);
    if ( countDown === 0){
        clearInterval(intervalId);
    const randomNumber = Math.floor(Math.random()*100)+1
    console.log(`Random number Generated : ${randomNumber}`);
    }
},1000)
