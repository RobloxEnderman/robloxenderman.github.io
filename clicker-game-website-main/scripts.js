let balance = 0;
let multiplier = 0.5;

function Click(){
    balance += (1*multiplier);
    updateCount();
    document.getElementById('collectmoney').hidden = true;
    document.getElementById('collectmoney').hidden = false;
}

function Upgrade() {
    if (balance >= (10*multiplier)){
        var multiplierCostMultiplier = 1;
        multiplier += 0.5 * multiplierCostMultiplier;
        balance -= (10*multiplier);
        multiplierCost = (10*multiplier);
        multiplierCostMultiplier += 1;
        
        updateCount()
        document.getElementById('Multiplier').innerText = 'Upgrade Multiplier ($'+(multiplierCost)+ ')'
    }
}

function updateCount() {
    document.getElementById('Text').innerText = '$' + balance;
    //console.log(balance) (for debug purposes)
}