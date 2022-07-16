// get dom elements
const form = document.getElementById(`calculateData`);
// translate umbers
var finalEnlishToBanglaNumber = {
    0: "০",
    1: "১",
    2: "২",
    3: "৩",
    4: "৪",
    5: "৫",
    6: "৬",
    7: "৭",
    8: "৮",
    9: "৯",
};

String.prototype.getDigitBanglaFromEnglish = function() {
    let returnString = this;
    for (var x in finalEnlishToBanglaNumber) {
        returnString = returnString.replace(
            new RegExp(x, "g"),
            finalEnlishToBanglaNumber[x]
        );
    }
    return returnString;
};

function getBanglaFixed(num) {
    let fixed = num.toFixed(2);
    let convertedString = fixed.toString();
    let convertInBanglaNumber = convertedString.getDigitBanglaFromEnglish();

    return convertInBanglaNumber;
}

function handelData(e) {
    e.preventDefault();
    const weight = parseInt(document.getElementById(`meatWeaight`).value);

    const person = document.getElementById(`person`).value;
    const eachPerson = document.getElementById(`quantityPerPerson`);
    const eachPersonOneThird = document.getElementById(`oneThirdPerPerson`);
    // let temp = weight / person;
    // let fixd = temp.toFixed(2);
    eachPerson.innerHTML = getBanglaFixed(weight / person);
    let fix = weight / person / 3;

    eachPersonOneThird.innerHTML = getBanglaFixed(fix);
    const res = document.getElementById(`result`);
    res.classList.remove(`hide`);
    document.body.scrollIntoView({ behavior: "smooth" });
}
const input = document.getElementById(`meatWeaight`);
input.addEventListener(`click`, () => {
    const infoPanel = document.getElementById(`infoPanel`);
    infoPanel.classList.add(`show`);
    infoPanel.classList.remove(`animated`);
});

form.addEventListener(`submit`, handelData);