function addDateTime (message=" : This is the best moment to have a look at this website ! "){
    const dateTimeNow = new Date();

    return dateTimeNow.toLocaleDateString() + " " + dateTimeNow.toLocaleTimeString() + message; 
}
alert(addDateTime())