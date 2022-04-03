const id=document.querySelector('#id'),
  name=document.querySelector('#name'),
  pswd=document.querySelector('#pswd'),
  pswd2=document.querySelector('#pswd2'),
  registerBtn=document.querySelector('button');

registerBtn.addEventListener('click', registerhandler);

document.querySelector('input').addEventListener('keypress',(e)=>{
  if(e.key==='Enter'){
    console.log('hi');
  }
})
function registerhandler(){
  if(pswd.value!==pswd2.value){
    return alert('비밀번호가 일치하지 않습니다.');
  }
  const req={
    id: id.value,
    name: name.value,
    pswd: pswd.value,
  }
  
  fetch("/register",{
    method:"POST",
    headers: {
      "Content-Type":"application/json"
    },
    body: JSON.stringify(req),
  }).then((res) => res.json())
  .then((res)=>{
    if(res.success){
      location.href="/login";
      alert(res.msg);
    }else {
      alert(res.msg);
    }
  }).catch((err)=>console.error("register error"));
}

module.exports=register;