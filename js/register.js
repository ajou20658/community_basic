const id=document.querySelector('#id'),
    pswd=document.querySelector('#pswd'),
    pswd2=document.querySelector('#pswd2'),
    loginBtn=document.querySelector('button');

loginBtn.addEventListener('click', loginhandler);

function loginhandler(){
    const req={
        id: id.value,
        pswd: pswd.value,
        pswd2:pswd2.value
    }
    console.log(req);
}