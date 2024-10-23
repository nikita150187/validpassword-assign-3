function isValidPassword(password, username) {
    if (password.length < 8) {
        return false;
    }

    if (password.includes(" ")) {
        return false;
    }
    if (password.includes('username')) {
        return false;
    }

    return true;
}


console.log(isValidPassword("girlsrocks", "superwomen")); 
console.log(isValidPassword("short", "super")); 
console.log(isValidPassword("gir ls rocks", "super")); 
