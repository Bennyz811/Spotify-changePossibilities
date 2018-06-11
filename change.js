const changePossibilities = (totalAmount, coins) => {
    if (totalAmount < 0 || coins.length === 0)
        return 0;
    else if (totalAmount === 0)
        return 1;
    else
        return changePossibilities(totalAmount - coins[0], coins) + changePossibilities(totalAmount, coins.slice(1));
};

changePossibilities(4, [1,2,3]);

