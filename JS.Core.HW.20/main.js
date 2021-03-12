let addButton = document.querySelector(".add");
let login = document.querySelector(".login");
let password = document.querySelector(".password");
let email = document.querySelector(".email");
let mainUser = document.querySelector(".main-user");
let massText = [];
let countText = 0;

let mainIndex = 0;
let editInput = document.querySelector(".edit-user");
let countIndex = 0;


addButton.addEventListener("click", function () {




    let innerLogin = document.createElement("div");
    let innerPassword = document.createElement("div");
    let innerEmail = document.createElement("div");
    let numberCounter = document.createElement("div");

    let containerDiv = document.createElement("div");

    let editButton = document.createElement("input");
    let deleteButton = document.createElement("input");

    let objText = {
        l: login.value,
        p: password.value,
        e: email.value
    }
    massText.push(objText);



    if (login.validity.valid && password.validity.valid && email.validity.valid) {
        mainUser.appendChild(containerDiv);
        containerDiv.className = "container";
        containerDiv.classList.add(countIndex);

        containerDiv.appendChild(numberCounter);
        numberCounter.className = "number";
        numberCounter.textContent = countText + 1;

        containerDiv.appendChild(innerLogin);
        innerLogin.className = "inner-login";
        innerLogin.textContent = massText[countText].l;

        containerDiv.appendChild(innerPassword);
        innerPassword.className = "inner-password";
        innerPassword.textContent = massText[countText].p;

        containerDiv.appendChild(innerEmail);
        innerEmail.className = "inner-email";
        innerEmail.textContent = massText[countText].e;

        containerDiv.appendChild(editButton);
        editButton.className = "innerLogin";
        editButton.value = "Edit";
        editButton.type = "button";
        editButton.className = "edit";


        containerDiv.appendChild(deleteButton);
        deleteButton.className = "innerLogin";
        deleteButton.value = "Delete";
        deleteButton.type = "button";
        deleteButton.className = "delete";

        addButton.style.display = "none";
        editInput.style.display = "block";


        login.value = "";
        password.value = "";
        email.value = "";
        countText++;
        countIndex++;

    } else {
        alert("Not ok");
    }


    editButton.style.display = "block";

});

mainUser.addEventListener("click", function (e) {
    let nameTarget = e.target.value;
    let target = e.target.parentNode.className;
    let numberIndex = Number(target.split(" ")[1]);
    if (nameTarget == "Edit") {
        login.value = massText[numberIndex].l;
        password.value = massText[numberIndex].p;
        email.value = massText[numberIndex].e;

        mainIndex = numberIndex;

        alert(numberIndex);
    } else if (nameTarget == "Delete") {
        let mainContainer = document.querySelectorAll(".container")[numberIndex];
        console.log(mainContainer);
        mainUser.removeChild(mainContainer);
    }
});




editInput.addEventListener("click", function () {
    let newLogin = document.querySelectorAll(".inner-login");
    let newPassword = document.querySelectorAll(".inner-password");
    let newEmail = document.querySelectorAll(".inner-email");

    massText[mainIndex].l = login.value;
    massText[mainIndex].p = password.value;
    massText[mainIndex].e = email.value;
    newLogin[mainIndex].textContent = massText[mainIndex].l;
    newPassword[mainIndex].textContent = massText[mainIndex].p;
    newEmail[mainIndex].textContent = massText[mainIndex].e;

    editInput.style.display = "none";
    addButton.style.display = "block";

    login.value = "";
    password.value = "";
    email.value = "";

});




