const id=document.querySelector('#id'),
    pswd=document.querySelector('#pswd'),
    loginBtn=document.querySelector('button');

loginBtn.addEventListener('click', loginhandler);

document.querySelector('input').addEventListener('keypress',(e)=>{
    if(e.key==='Enter'){
        console.log('hi');
    }
})
function loginhandler(){
    const req={
        id: id.value,
        pswd: pswd.value,
    }
    
    fetch("/login",{
        method:"POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(req),
    }).then((res) => res.json())
    .then((res)=>{
        if(res.success){
            location.href=("/")
        }else {
            alert(res.msg);
        }
    }).catch((err)=>console.error("login error"));
}

module.exports=login;