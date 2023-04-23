export function interceptorRequest(request) {
    const isLoggedIn = JSON.parse(localStorage.getItem("token"));
    if (isLoggedIn) {
        request.headers.common.token = `Bearer ${isLoggedIn.token}`;
    }

    return request;

}