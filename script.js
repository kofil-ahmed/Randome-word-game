const msg = document.querySelector(".msg");
const guess = document.querySelector("input");
const btn = document.querySelector(".btn");
let play = false;
let newWords = " ";
let randomWords = " ";
let sWords = [   
    'python','javascript','C++','php','java','c#','html','css','reactjs','angular','swift'
]
const createNewWords = () =>{
    let randomeNumber = Math.floor(Math.random()*sWords.length);
    let newTempsWords= sWords[randomeNumber];
    return newTempsWords;
}
const scrambleWords = (arr) =>{
    for(let i=arr.length-1; i>0; i--){
        let temp = arr[i];
        let j = Math.floor(Math.random()*(i+1));
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}
btn.addEventListener("click",function(){
    if(!play){
        play = true;
        btn.innerHTML= "Guess";
        guess.classList.toggle("hidden");
        newWords = createNewWords();
        randomWords = scrambleWords(newWords.split("")).join("");
        msg.innerHTML = `Guess the words ${randomWords}`;
    }
    else{
        let tempWord = guess.value;
        if(tempWord === newWords){
            play = false;
            msg.innerHTML = `Awesome It's Correct . It is ${newWords}`;
            btn.innerHTML = 'Start Again';
            guess.classList.toggle("hidden");
            guess.value = "";

        }else{
            msg.innerHTML = `Sorry Boss It's Not Correct . It is ${randomWords}`;
        }
    }
})