getCookieDisclaimer = () => {
    return document.getElementById("cookie-disclaimer")
}

checkCookies = () => {
    let cookie = document.cookie.includes('cookie_disclaimer');
    if (!cookie)
        getCookieDisclaimer().style.display = "block";
}

setCookie = () => {
    document.cookie = "cookie_disclaimer=true";
    getCookieDisclaimer().style.display = "none";
}