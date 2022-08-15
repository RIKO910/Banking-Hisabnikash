
document.getElementById('login-btn').addEventListener('click',function(){
    //get user email
    const emailField = document.getElementById('user-email');
    const UserEmail = emailField.value 
    //get user password
    const passwordField = document.getElementById('user-password');
    const UserPassword =passwordField.value
    //another page
    if(UserEmail == 'tarikulislamriko910@gmail.com' && UserPassword == 'riko' )
    {
        window.location.href = 'banking.html'
    }
    else{
         alert("vul geche baap!!");
    }
})

