const ipAmtRegex = /^[0-9]{1,}$/

const ipAmt = document.getElementById("ipAmt");
const ipProd = document.getElementById("ipProd");
const inEx = document.getElementById("inEx");
const btn = document.getElementById("btn");
const inDiv = document.getElementById("inDiv");
const exDiv = document.getElementById("exDiv");
const h4Tag = document.querySelector("h4");
const bIn = document.getElementById("bIn");
const bEx = document.getElementById("bEx");
const bSavings = document.getElementById("bSavings");
const maxIn = document.getElementById("maxIn");
const maxEx = document.getElementById("maxEx");

let inCount = 0;
let exCount = 0;
let inValue = 0;
let exValue = 0;
let totalSavings = 0;
let maxIncome = 0;
let maxExpense = 0;

btn.addEventListener("click", function () {

    h4Tag.innerText = "";
    ipProd.classList.remove("ip-error");
    ipAmt.classList.remove("ip-error");

    let ipAmtInt = parseInt(ipAmt.value);

    checkInput();

    if (ipProd.value != "" && ipAmt.value != "" && ipAmtRegex.test(ipAmtInt)) {
        if (inEx.value == "a") {
            inValue = inValue + +ipAmt.value;
            bIn.innerText = inValue;

            if (+ipAmt.value > maxIncome) {
                maxIncome = ipAmt.value;
                maxIn.innerText = ipAmt.value;
            }

            inCount++;

            let pTag = document.createElement("p");
            pTag.innerHTML = `<span>${inCount}</span><span>${ipProd.value}</span><span>${ipAmt.value}</span>`;
            inDiv.appendChild(pTag);

            ipProd.value = "";
            ipAmt.value = "";
        }
        else if (inEx.value == "b") {
            if (ipAmt.value <= totalSavings) {
                if (+ipAmt.value > maxExpense) {
                    maxExpense = ipAmt.value;
                    maxEx.innerText = ipAmt.value;
                }

                exCount++;

                let pTag = document.createElement("p");
                pTag.innerHTML = `<span>${exCount}</span><span>${ipProd.value}</span><span>${ipAmt.value}</span>`;
                exDiv.appendChild(pTag);

                exValue = exValue + +ipAmt.value;
                bEx.innerText = exValue;

                ipProd.value = "";
                ipAmt.value = "";
            }
            else {
                h4Tag.innerText = "Sorry not enough income!";
            }
        }

        checkSavings();
    }
});

function checkInput() {
    let ipAmtInt = parseInt(ipAmt.value);

    if (ipProd.value == "" && ipAmt.value == "") {
        h4Tag.innerText = "Please enter amount and product";
        ipProd.classList.add("ip-error");
        ipAmt.classList.add("ip-error");
    }

    else if (ipAmt.value == "") {
        h4Tag.innerText = "Please enter amount";
        ipAmt.classList.add("ip-error");
    }

    else if (ipProd.value == "") {
        h4Tag.innerText = "Please enter product";
        ipProd.classList.add("ip-error");
    }

    else if (!ipAmtRegex.test(ipAmtInt)) {
        h4Tag.innerText = "Please enter valid amount";
        ipAmt.classList.add("ip-error");
    }
}

function checkSavings() {
    if (inValue >= exValue) {
        totalSavings = inValue - exValue;
        if (totalSavings >= 300) {
            bSavings.innerText = `Total savings : ${totalSavings} , looks good`;
            bSavings.style.backgroundColor = "#47ff00";
        }
        else {
            bSavings.innerText = `Total savings : ${totalSavings} , start saving!`;
            bSavings.style.backgroundColor = "#ff4343";
        }
    }
}
