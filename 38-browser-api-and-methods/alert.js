// 38-2 Browser alert, confirm, prompt with examples

//alert('I am hereee');

const meheHere = () => {
    alert('Mehe is angry noww!');
};

const askPicnic = () => {
    const response = confirm('Are you going to picnic ?');
    console.log(response);
    if (response === true) {
        alert('amake fee ta bKash kore de');
    } else {
        console.log('DGM !!! Duur e giya mor!!!');
    }
};

const askName = () => {
    const name = prompt('What is your name?');
    if (name) {
        console.log(name);
    }
};
