//OOP (Nesne Tabanlı Programlama)
//object -(key-value)
//javaScript OOP nedir ?


// let soru ={
//     soruMetni :"Hangisi JavaScript paket yönetim uyglumasıdır?",
//     cevaplar :{
//         a:"Node.js",
//         b:"TypeScript",
//         c:"Npm"
//     },
//     doğruCevap :"c",
//     cevabiKontrolEt: function(cevap){
//         return cevap ===this.doğruCevap
//     }
// }
// let soru2 ={
//     soruMetni :"Hangisi .net paket yönetim uyglumasıdır?",
//     cevaplar :{
//         a:"Node.js",
//         b:"nuget",
//         c:"Npm"
//     },
//     doğruCevap :"b",

    // cevabiKontrolEt: function(cevap){
    //    return cevap ===this.doğruCevap
    // }



// console.log(soru.soruMetni);

//sınıf(ES6),constructor(ES5)--------


//constructor dan soru türetme


//quiz constructor 


const quiz=new Quiz(sorular);
const ui= new UI();
//next button
ui.btn_next.addEventListener("click",function(){
    if(quiz.sorular.length !=quiz.soruIndex+1){
        quiz.soruIndex +=1;
        clearInterval(counter);
        clearInterval(counterLine);
        startTimer(10);
        startTimerLine();
        ui.soruGöster(quiz.soruGetir());
        ui.soruSayısıGoster(quiz.soruIndex+1,quiz.sorular.length);
        ui.btn_next.classList.remove("show");
        
       }else{
        clearInterval(counter);
        clearInterval(counterLine);
        ui.quiz_box.classList.remove("active");
        ui.score_box.classList.add("active");
        ui.skorıGoster(quiz.sorular.length,quiz.dogruCevapSayisi);
        

       }
})
//Start Button
ui.btn_start.addEventListener("click",function(){
    ui.quiz_box.classList.add("active");
    startTimer(10);
    startTimerLine();
    ui.soruGöster(quiz.soruGetir());
    ui.soruSayısıGoster(quiz.soruIndex+1,quiz.sorular.length);
    ui.btn_next.classList.remove("show");
});
// const option_list=document.querySelector(".option_list")
// const correctIcon='<div class="icon"><i class="fas fa-check"></i></div>'
// const incorrectIcon='<div class="icon"><i class="fas fa-times"></i></div>'

//Quit button 
ui.btn_quit.addEventListener("click",function(){
    window.location.reload();//windows sayfasını yenile
});
//Replay Button
ui.btn_replay.addEventListener("click",function(){
    quiz.soruIndex = 0,
    quiz.dogruCevapSayisi = 0;
    ui.btn_start.click();
    ui.score_box.classList.remove("active");
});


function optionSelected(option){
    clearInterval(counter);
    clearInterval(counterLine);
    let cevap=option.querySelector("span b").textContent;
    let soru =quiz.soruGetir();

    if(soru.cevabiKontrolEt(cevap)){
        quiz.dogruCevapSayisi=+1;
        option.classList.add("correct");
        option.insertAdjacentHTML("beforeend",ui.correctIcon);
    }else{
        option.classList.add("incorrect")
        option.insertAdjacentHTML("beforeend",ui.incorrectIcon);
    }
    for(let i = 0;i<ui.option_list.children.length;i++){
        ui.option_list.children[i].classList.add ("disabled");
    }
    ui.btn_next.classList.add("show");
};
let counter;
//Timer function
function startTimer(time){
     counter=setInterval(timer,1000)

    function timer(){
        ui.time_second.textContent =time;
        time --;
        if(time<0){
            clearInterval(counter);
            ui.time_text.textContent="Süre Bitti";
            
            let cevap =quiz.soruGetir().doğruCevap;

            for(let option of ui.option_list.children){
                if(option.querySelector("span b").textContent == cevap){
                    option.classList.add("correct");
                    option.insertAdjacentHTML("beforeend",ui.correctIcon);
                }
                option.classList.add("disabled")
            }
            ui.btn_next.classList.add("show");
        }
    }

}

//Timer line 
let counterLine;
function startTimerLine(){
    let line_width=0;

    counterLine= setInterval(timer, 20);

    function timer(){
        line_width +=1;
        ui.time_line.style.width = line_width + "px";
        if(line_width > 549){
            clearInterval(counterLine)
        }
         
    }
}
