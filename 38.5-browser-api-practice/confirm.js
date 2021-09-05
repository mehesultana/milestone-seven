const seehref = () => {
    const response = confirm('do you want to see the href ?');
    console.log(response);
    if (response === true) {
        console.log('https://www.youtube.com/');
    } else {
        console.log('na dekhle nai , amr ki ');
    }
};
