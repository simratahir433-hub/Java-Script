const buyitem = (itemcode, money) => {
    const pricechocolate = 100;
    const pricecrisps = 50;
    const pricesoda = 70;

    if (itemcode === "A1") {
        console.log("You are buying Chocolate.");
        if (money < pricechocolate) {
            console.log(`Please add more money. You need ${pricechocolate - money} more.`);
        } else if (money > pricechocolate) {
            console.log(`You gave extra money. Your return is: ${money - pricechocolate}`);
        } else {
            console.log("THANKS FOR BUYING!");
        }
    }

    else if (itemcode === "A2") {
        console.log("You are buying Crisps.");
        if (money < pricecrisps) {
            console.log(`Please add more money. You need ${pricecrisps - money} more.`);
        } else if (money > pricecrisps) {
            console.log(`You gave extra money. Your return is: ${money - pricecrisps}`);
        } else {
            console.log("THANKS FOR BUYING!");
        }
    }

    else if (itemcode === "A3") {
        console.log("You are buying Soda.");
        if (money < pricesoda) {
            console.log(`Please add more money. You need ${pricesoda - money} more.`);
        } else if (money > pricesoda) {
            console.log(`You gave extra money. Your return is: ${money - pricesoda}`);
        } else {
            console.log("THANKS FOR BUYING!");
        }
    }

    else {
        console.log("Invalid item code!");
    }
};

// Testing the function with multiple inputs
buyitem("A1", 80);   // Less than required
buyitem("A1", 100);  // Exact amount
buyitem("A1", 150);  // More than required

buyitem("A2", 30);   // Less
buyitem("A2", 50);   // Exact
buyitem("A2", 70);   // More

buyitem("A3", 70);   // Exact
buyitem("A3", 100);  // More
buyitem("B1", 100);  // Invalid code
