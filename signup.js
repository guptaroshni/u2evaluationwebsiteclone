let payload = JSON.parse(localStorage.getItem('userData')) || [] ;

let registerForm = document.getElementById('signupForm') ;

registerForm.addEventListener('submit',(event) => {
    event.preventDefault() ;
    const formData = new FormData(registerForm) ;
    let email = formData.get('email_input') ;
    let password = formData.get('pass_input') ;
    let conf_password = formData.get('confirm_pass_input') ;
    //console.log(password);
    //console.log(conf_password);
    if(password != conf_password){
        alert("Passwords Do Not Match") ;
    }
    else{
        let obj = {
            email,
            password
        } ;
        payload.push(obj) ;
        
    }
    localStorage.setItem("userData",JSON.stringify(payload)) ;
    window.location.href = 'signup.html'
})

let regdUsers = JSON.parse(localStorage.getItem('userData')) ;
let flag = false ;
let loginForm = document.getElementById('loginForm') ;
loginForm.addEventListener('submit',(event) => {
event.preventDefault() ;
const formData = new FormData(loginForm) ;
let email = formData.get('email_input') ;
let password = formData.get('pass_input') ;
regdUsers.forEach(el => {
    if(email===el.email && password===el.password){
        flag = true ;
        alert("Login Successful") ;
        window.location.href = "./index.html" ;
    }
});
if(flag===false){
    alert("Invalid Credentials")
}
})
