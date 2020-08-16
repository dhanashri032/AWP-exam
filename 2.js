function submithere() {

    let a = document.querySelector("#input").value;

    let b = document.querySelector("#pass").value;

    let c = document.querySelector("#mail").value;

    let newElement = document.querySelector("#box").cloneNode(true);

    newElement.removeAttribute("id");

    newElement.style.visibility = "visible";

    if (a === "") {
        "please enter usename"
    } else {

        newElement.children[0].innerHTML = a;
    }

    if (b === "") {
        "please enter password"
    } else {
        newElement.children[1].innerHTML = b;

    }

    if (c === "") {
        "please enter email id"
    } else {
        newElement.children[2].innerHTML = c;
    }


    let d = document.querySelector("#main");

    d.insertBefore(newElement, d.firstChild);

    document.querySelector("#input").value = "";

    document.querySelector("#pass").value = "";

    document.querySelector("#mail").value = "";


}