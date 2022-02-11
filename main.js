
let bigAlpha = ['A', 'B','C',' D',' E', 'F',' G',' H', 'I','J','K','L','M' ,'N','O','P', 'Q' ,'R' ,'S', 'T', 'U' ,'V', 'W', 'X', 'Y', 'Z'  ];
let smallAlpha = ['a', 'b',' c' ,'d',' e',  'f',' g',' h',' i', 'j',' k',' l',' m',' n',' o',' p',' q',' r',' s',' t',' u',' v',' w',' x',' y',' z'];
let chars=['!','.','_','#','@','%','$','&','-'];
let passBox = document.querySelectorAll('.pass');

function generate(){
       let keyword;
       passBox.forEach(each=>{  
       let i=0;
       while(i<3){
       let randomNum = Math.floor(Math.random()*bigAlpha.length);
       let numbers = String(Math.floor(Math.random()*11));
       let randomBig = bigAlpha[randomNum];
       let randomSmall = smallAlpha[randomNum];
       let randChars = chars[Math.floor(Math.random()*chars.length)];
       let attributes= [numbers,randomBig,randomSmall,randChars];
       keyword= attributes.toString().replaceAll(',','').replaceAll(' ','');
       each.value+=keyword;
       i++;  
}

});
}

