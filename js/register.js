const id=document.querySelector('#id'),
    pswd=document.querySelector('#pswd'),
    pswd2=document.querySelector('#pswd2'),
    signupBtn=document.querySelector('button');

signupBtn.addEventListener('click', signuphandler);

function signuphandler(){
    const req={
        id: id.value,
        pswd: pswd.value,
        pswd2:pswd2.value
    }
    console.log(req);
}