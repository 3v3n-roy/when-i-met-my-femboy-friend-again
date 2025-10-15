let num = 0

document.getElementById("next").onclick = function (){
  num = num + 1 
  if(num === 1){
    document.getElementById("img").src = "bg.png"
    document.getElementById("text").innerHTML = "It’s been years since someone called my name like that."
  }
  if(num === 2){
    document.getElementById("img").src = "bg.png"
    document.getElementById("text").innerHTML = "The door creaks open... and there he is."
  }
  if(num === 3){
    document.getElementById("img").src = "bg.png"
    document.getElementById("text").innerHTML = "Ren"
  }
  if(num === 4){
    document.getElementById("img").src = "stop.png"
    document.getElementById("text").innerHTML = "Ren: Hey… you remember me?  "
    document.getElementById("next").innerHTML = "You: Hard to forget. You used to live with us, right?  "
  }
  if(num === 5){
    document.getElementById("img").src = "stop.png"
    document.getElementById("text").innerHTML = "Ren: Just for a few months. But… I never forgot you."
    document.getElementById("next").innerHTML = "next"
  }
  if(num === 6){
    document.getElementById("img").src = "smile.png"
    document.getElementById("text").innerHTML = "Ren: You look different. Taller, quieter… colder.   "
    document.getElementById("next").innerHTML = "You haven’t changed at all."
  }
  if(num === 7){
    document.getElementById("img").src = "smile.png"
    document.getElementById("text").innerHTML = "Ren: Guess I’m still your loud, annoying Ren, huh?"
    document.getElementById("next").innerHTML = "next"
  }
  if(num === 8){
    document.getElementById("img").src = "bg.png"
    document.getElementById("text").innerHTML = "He laughs softly.  "
    document.getElementById("next").innerHTML = "next"
  }
  if(num === 9){
    document.getElementById("img").src = "bg.png"
    document.getElementById("text").innerHTML = "Same voice. Same warmth I thought I’d never hear again. "
    document.getElementById("next").innerHTML = "next"
  }
  if(num === 10){
    document.getElementById("img").src = "smile.png"
    document.getElementById("text").innerHTML = "Ren: You always looked so serious. Are you still like that? "
    document.getElementById("next").innerHTML = "You: Maybe. Depends on who I’m talking to.  "
  }
  if(num === 11){
    document.getElementById("img").src = "smile.png"
    document.getElementById("text").innerHTML = "Ren: Then I’ll make sure you talk to me more."
    document.getElementById("next").innerHTML = "You: You’re still confident. "
  }
  if(num === 12){
    document.getElementById("img").src = "talk.png"
    document.getElementById("text").innerHTML = "Ren: No… just happy you didn’t forget me."
    document.getElementById("next").innerHTML = "next"
  }
  if(num === 13){
    document.getElementById("img").src = "smile.png"
    document.getElementById("text").innerHTML = "His smile lingers, gentle and familiar.  "
    document.getElementById("next").innerHTML = "next"
  }
  if(num === 14){
    document.getElementById("img").src = "smile.png"
    document.getElementById("text").innerHTML = "The room feels smaller, but warmer somehow."
    document.getElementById("next").innerHTML = "next"
  }
  if(num === 15){
    document.getElementById("img").src = "talk.png"
    document.getElementById("text").innerHTML = "Ren: Want to grab breakfast? My treat.  "
    document.getElementById("next").innerHTML = "You: Only if you promise not to tease me this time"
  }
  if(num === 16){
    document.getElementById("img").src = "smile.png"
    document.getElementById("text").innerHTML = "Ren: No promises, but I’ll try."
    document.getElementById("next").innerHTML = "next"
  }
  if(num === 17){
    document.getElementById("img").src = "bg.png"
    document.getElementById("text").innerHTML = "Some people disappear for years…  "
    document.getElementById("next").innerHTML = "next"
  }
  if(num === 18){
    document.getElementById("img").src = "bg.png"
    document.getElementById("text").innerHTML = "and still feel like home when they return"
    document.getElementById("next").innerHTML = "THE END"
  }
}