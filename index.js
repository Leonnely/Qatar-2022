const d = document;

function countdown(id,limitDate,finalMessage){
    const $countdown = d.getElementById(id)
    const countdownDate = new Date(limitDate).getTime();
    
    
     let countdownTempo = setInterval(() => {
        let now = new Date().getTime();

        let limitTime = (countdownDate - now)/1000
        let days = Math.floor(limitTime / 86400)
        let hours = ("0" + Math.floor((limitTime /(3600))%24)).slice(-2)
        let minutes = ("0" + Math.floor((limitTime / 60)% 60)).slice(-2)
        
        let seconds =("0"+ Math.floor(limitTime % 60)).slice(-2)
    
    $countdown.innerHTML = `<h3>${days} D ${hours} HS ${minutes} M ${seconds} S</h3>`;

    if (limitTime < 0) {
      clearInterval(countdownTempo);
      $countdown.innerHTML = finalMessage;
    }
  }, 1000);
}

d.addEventListener("DOMContentLoaded",e=>{
    countdown(
        "countdown",
        "Nov 21,2022 00:00:00",
        "Argentina Qatar 2022")
})
