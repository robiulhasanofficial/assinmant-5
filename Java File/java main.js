function payTiket(){
    removBgtexr('head')
    addtext('main')
    }
// active

  const allbtn=document.getElementsByClassName('add-btn');
  let num=0;
  let nume=40;
  
  for(const btn of allbtn){
    
   btn.addEventListener("click",function(e){
    const baget=document.getElementById('tot').innerText;
  const oonbartad=parseInt(baget);
    
  if(oonbartad<2200){
    addtext('activ')
    btn.classList.add('bg-[#1DD100]')
    btn.classList.remove('bg-[#F7F8F8]')
    num=num+1;
    nume=nume-1;
    addinnertext('set',num)
    addinnertext('min',nume)

  const name= e.target.innerText;
   
   const box=document.getElementById('box')
   const div=document.createElement('div')
   div.classList.add('flex')
   div.classList.add('my-4')
   div.classList.add('justify-between')
   const p1=document.createElement('p')
   p1.innerText=name
   p1.classList.add('text-xl')
   const p2=document.createElement('p')
   p2.innerText='Economoy'
   p2.classList.add('text-xl')
   p2.classList.add('ml-[90px]')
   const p3=document.createElement('p')
   p3.innerText='550'
   p3.classList.add('text-xl')
   div.appendChild(p1)
   div.appendChild(p2)
   div.appendChild(p3)
   box.appendChild(div)
   btn.setAttribute('disabled',true)
 
   const tolel=document.getElementById('tot').innerText
   const tolelnum=parseInt(tolel)
   document.getElementById('tot').innerText=tolelnum+550;
   const gatolel=document.getElementById('got').innerText
   const gtolelnum=parseInt(gatolel)
   document.getElementById('got').innerText=gtolelnum+550;
  }
  else{
    alert('You cannot buy more than four seats')
  }
  })
}
  function granttolo(){
    const tolel=document.getElementById('tot').innerText
   const tolelnum=parseInt(tolel)
   const tax=((tolelnum*15)/100)
   document.getElementById('got').innerText=tolelnum-tax;
  }
  function colp(){
    const tolel=document.getElementById('tot').innerText
    const tolelnum=parseInt(tolel)
    const tax=((tolelnum*20)/100)
    document.getElementById('got').innerText=tolelnum-tax;
  }
   document.getElementById('opi').addEventListener("keyup",function(even){
    const text=even.target.value ;
    const baget=document.getElementById('tot').innerText;
  const nlop=parseInt(baget);
    if(nlop>=2000 && text==='NEW15'||text==='Couple 20'){
      const but=document.getElementById('gop')
      but.removeAttribute('disabled')
      AddClass('gop','bg-[#1DD100]') 
    }
    else{
      const but=document.getElementById('gop');
      but.setAttribute('disabled',true)
      removeClass('gop','bg-[#1DD100]')
   }
  })
  document.getElementById('numder').addEventListener("keyup",function(even){
    const text=even.target.value ;
    const baget=document.getElementById('tot').innerText;
  const nlop=parseInt(baget);
   
  if(text>0 && nlop>100){
    const ftg= document.getElementById('next')
    ftg.removeAttribute('disabled')
  }
  else{
    const ftg= document.getElementById('next')
    ftg.setAttribute('disabled',true)

  }
  })
  document.getElementById('gop').addEventListener("click",function(){
    const input=document.getElementById('opi');
    const vbn=input.value;
    input.value=""
    if (vbn==='NEW15'){
       granttolo()
    }
    else if(vbn==='Couple 20'){
     colp()
    }
   }
  )
  function contino(){
    addtext('lam')
    removBgtexr('head')
    removBgtexr('main')
    removBgtexr('footer')
  }
  
  
  document.getElementById('next').addEventListener('click',function(){ 
    const baget=document.getElementById('tot').innerText;
    const nlop=parseInt(baget);
    const get=document.getElementById('numder')
    const lop=get.value;
   
    if( nlop>100 && lop>0){
      const gik=document.getElementById('next')
  contino()
  
    }
    
}
)
