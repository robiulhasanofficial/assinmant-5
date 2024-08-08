function removBgtexr(pop){
    const item=document.getElementById(pop)
    item.classList.add('hidden')

    
}
function addtext(even){
    const item=document.getElementById(even);
   item.classList.remove('hidden')
}
function AddClass(idName,addClassName){
    const item=document.getElementById(idName);
    item.classList.add(addClassName)
}
function removeClass(idName,addClassName){
    const item=document.getElementById(idName);
    item.classList.remove(addClassName)
}
function addinnertext(id,valu){
    const item=document.getElementById(id);
    item.innerText=valu;
}