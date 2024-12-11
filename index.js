const newpass=document.getElementById('newpass')
const range=document.getElementById('range')
const rangeval=document.getElementById('rangeval')
const btn=document.getElementById('genpass')
const caplet=document.getElementById('cap')
const smalet=document.getElementById('sma')
const charlet=document.getElementById('char')
const numlet=document.getElementById('num')
const copybtn=document.getElementById('copy')
rangeval.innerText=range.value


range.addEventListener('input',(e)=>{
  rangeval.innerText=range.value
  
  
})

btn.addEventListener('click',(e)=>{

  const cap='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const num='1234567890'
  const sma='abcdefghijklmnopqrstuvwxyz'
  const char='!@#%$%^&*_+?><'

  let finstr='';
  if(caplet.checked){
    finstr+=cap
  
    }
    


  if(smalet.checked){
    finstr+=sma
  }
  
  if(charlet.checked){
    finstr+=char
  }
  
  if(numlet.checked){
    finstr+=num
  }
  

  
 let  latepass=''
for(let i=0;i<range.value;i++){
  let randum=Math.floor(Math.random()*finstr.length)
  latepass+=finstr[randum]

  
}

  newpass.innerText=`${latepass}`
})


copybtn.addEventListener('click',()=>{
  console.log('copied');
  
 window.navigator.clipboard.writeText(newpass.innerText)
  
})

        
        
