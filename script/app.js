// get dom elements
const form = document.getElementById(`calculateData`);

function handelData(e) {
    e.preventDefault();
    const weight = parseInt(document.getElementById(`meatWeaight`).value);

    const person = document.getElementById(`person`).value;
    const eachPerson = document.getElementById(`quantityPerPerson`);
    const eachPersonOneThird = document.getElementById(`oneThirdPerPerson`);
    let temp = weight / person;
    let fixd = temp.toFixed(2);
    eachPerson.innerHTML = fixd;
    let fix = fixd / 3;
    eachPersonOneThird.innerHTML = fix.toFixed(2);
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