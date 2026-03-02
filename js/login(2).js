document.getElementById('loginForm').addEventListener('submit', function(e) {
e.preventDefault();

let usuario = document.getElementById('usuario').value.trim();
let password = document.getElementById('password').value.trim();

if(usuario === '' || password === ''){
Swal.fire('Error','Complete todos los campos','warning');
return;
}

if(usuario === 'cenfo' && password === '123'){
Swal.fire({
icon:'success',
title:'Acceso correcto',
timer:1500,
showConfirmButton:false
}).then(()=>{
window.location.href='landing.html';
});
}else{
Swal.fire('Error','Datos incorrectos','error');
}
});