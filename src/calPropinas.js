function calcularPropina() {
    let totalBalance = parseFloat(document.getElementById("total").value);
    let tipPercentage = parseFloat(document.getElementById("percentage").value);

    let tip = (totalBalance * tipPercentage) / 100;

    let totalPay = totalBalance + tip;

    document.getElementById("tip").textContent = tip.toFixed(2) + " $";
    document.getElementById("totalPay").textContent = totalPay.toFixed(2) + " $";
}