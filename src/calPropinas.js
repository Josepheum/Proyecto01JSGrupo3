function calcularPropina() {
    var totalBalance = parseFloat(document.getElementById("total").value);
    var tipPercentage = parseFloat(document.getElementById("percentage").value);

    var tip = (totalBalance * tipPercentage) / 100;

    var totalPay = totalBalance + tip;

    document.getElementById("tip").textContent = tip.toFixed(2) + " USD";
    document.getElementById("totalPay").textContent = totalPay.toFixed(2) + " USD";
}