export const getUser = () =>{
    const userstr=sessionStorage.getItem("user");
    if (userstr) return JSON.parse(userstr);
    else return null;

}
export const getToken = () =>{
    return sessionStorage.getItem("token")|| null;
    
    
}



export const setUserSession = (token,user) =>{
    setUserSession.setItem("token",token);
   setUserSession.setItem("user",JSON.stringify(user));
    
}

export const removeUserSession = () =>{
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
    
    
}