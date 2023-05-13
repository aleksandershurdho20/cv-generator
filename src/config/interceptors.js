export function interceptorRequest(request) {
    const isLoggedIn = localStorage.getItem("token")
    if (typeof isLoggedIn !== undefined ) {
        request.headers = { 
                'Authorization': `${isLoggedIn}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              }
            
            console.log(isLoggedIn)
        // request.headers.common.token = `Bearer ${isLoggedIn.token}`;
    }

    return request;

}