
window.onload=function(){


//variables

var start
 var end
  var countParagraph= 1
   var text
    var loremIpsum ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in libero ut erat tempor sagittis at in ligula. Aliquam a dapibus dui. Pellentesque suscipit gravida pharetra. Donec commodo, augue in sollicitudin venenatis, magna sapien aliquam quam, vitae pulvinar arcu quam at nulla. Pellentesque pulvinar nunc eget nunc mattis, non mollis nunc ultrices. Suspendisse auctor turpis vel hendrerit volutpat. Vivamus nec mattis dolor. Vestibulum egestas feugiat urna eu rhoncus. Sed nec leo malesuada, eleifend elit ac, vestibulum tortor. Sed ante magna, dignissim ac gravida sit amet, vestibulum sit amet libero. Aenean vel ipsum ut nisi mattis congue. Pellentesque nec nisl iaculis, auctor diam in, egestas tellus. Donec laoreet neque eu mauris ultrices feugiat. Nulla blandit justo aliquet dolor posuere, vitae venenatis tellus facilisis."

    // arrays - a lot of strings
var vector3
 var vector2
  var vector1=[
    
    "Proin in libero ut erat tempor sagittis at in ligula. Aliquam a dapibus dui.",
    "Pellentesque suscipit gravida pharetra. Donec commodo,augue in sollicitudin venenatis, magna sapien aliquam quam, vitae pulvinar arcu quam at nulla.",
    "Pellentesque pulvinar nunc eget nunc mattis, non mollis nunc ultrices. Suspendisse auctor turpis vel hendrerit volutpat.",
    "Vivamus nec mattis dolor. Vestibulum egestas feugiat urna eu rhoncus. Sed nec leo malesuada, eleifend elit ac, vestibulum tortor. Proin sagittis rutrum sapien at aliquet. Sed volutpat imperdiet eros sed faucibus.",
    "Sed ante magna, dignissim ac gravida sit amet, vestibulum sit amet libero. Aenean vel ipsum ut nisi mattis congue. Pellentesque sit amet elit non risus vehicula posuere. Fusce cursus eleifend purus vel bibendum. Vestibulum commodo elementum semper.",
    "In cursus elementum elementum. Proin in mi ligula. Fusce elementum augue non ipsum euismod, id porta orci aliquet. In hac habitasse platea dictumst.",
    "Integer et molestie orci. Vivamus eget efficitur mi. Cras sollicitudin tempor nulla, maximus scelerisque erat tincidunt dignissim. Mauris laoreet tincidunt eros ac rhoncus.",
    "Donec et pretium justo. Nulla lobortis sem id orci accumsan tempor. Ut non tincidunt est, molestie pulvinar dolor. In fringilla sit amet ipsum et condimentum. Maecenas non consequat diam.",
    "Aenean sollicitudin sollicitudin metus non congue. Integer vel tincidunt metus, aliquam efficitur ligula. Sed euismod purus quis bibendum mattis. Suspendisse molestie venenatis convallis. Aliquam mattis ligula nisi. Proin et risus felis. Duis condimentum euismod tortor nec vehicula. Morbi porttitor ultrices leo non consequat."
    
    ]
    var vetor3
//end arrays

//button
var generate=document.querySelector("#gen")
 var reset=document.querySelector("#reset")
  var up=document.querySelector("#up")
   var down=document.querySelector("#down")


//end variables



function Paragraph() {

    start=Math.floor(Math.random()* vector1.length)
     vector2=vector1.slice(start)
      vector3=vector2.concat(vector3)
       vector3.unshift('<br><br>')
}

function construction(i){
i=countParagraph
    while(i > 1){
        Paragraph()
         i--
          text=vector3.join(" ")
}
}

function generateText(){
     construction()
      document.getElementById("text").innerHTML= loremIpsum + text
}

function resetText(){
    //RETIRAR A SEGUNDA LINHA DPS
    text=[]
     vector3=[]
      vector2=[]
       countParagraph=1
        document.getElementById("para").innerHTML=countParagraph
          document.getElementById("text").innerHTML=text
}

function downPara(){
    if(countParagraph == 1){
        countParagraph=1
         document.getElementById("para").innerHTML=countParagraph
    }
    else if(countParagraph > 1){
        countParagraph--
         document.getElementById("para").innerHTML=countParagraph
    }
}





generate.addEventListener("click", generateText)
 reset.addEventListener("click", resetText)
  up.addEventListener("click", function(){countParagraph++; document.getElementById("para").innerHTML=countParagraph;})
   down.addEventListener("click", downPara)

document.getElementById("para").innerHTML=countParagraph

}