
function setCookies(data){
    let userName = data.userName;
    let isLogged = data.isLogged;

    document.cookie = "userName="+userName+"; expires="+setExpDayvalue();
    document.cookie = "isLogged="+isLogged+"; expires="+setExpDayvalue();
    document.cookie = "path=/";
    
    return true;
}

function readCookies(){

    let cookie = document.cookie;
    let output = {};

    cookie.split(/\s*;\s*/).forEach(function(pair) {
    pair = pair.split(/\s*=\s*/);
    output[pair[0]] = pair.splice(1).join('=');
    });
    let result = output;

return result
}

function setExpDayvalue(){
    let newDate = new Date();
    console.log(newDate);
    let expDays = 1;
    let expiresIn = newDate.setTime(newDate.getTime() + (expDays * 24 * 60 * 60 * 1000));
        
    return expiresIn;
}



export { setCookies, readCookies, setExpDayvalue };