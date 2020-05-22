let checkStorage = function()
{   

    if(localStorage.firstName != null && localStorage.lastName != null && localStorage.username != null && localStorage.phoneNum != null && localStorage.city != null && localStorage.email != null && localStorage.bankRoll != null)
    {
        location.href ="game.html";
        
    }
}

window.addEventListener('load', checkStorage);