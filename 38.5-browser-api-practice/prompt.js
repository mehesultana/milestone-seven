// incomplete
const askMoney = () => {
    const money = prompt('How much money do you have ?');
    if (money) {
        const result = parseFloat(money) + 200;
        console.log(result);
    }
};
