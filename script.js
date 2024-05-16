
var input1 = document.getElementById("inputName")
var input2 = document.getElementById("inputAge")
var inputMale = document.getElementById("inputMale")
var inputFemale = document.getElementById("inputFemale")
var input4 = document.getElementById("inputCourse")
var input5 = document.getElementById("inputEmail")
var btnSave = document.getElementById("save")
var btnDel = document.getElementById("Del")
var tbody = document.getElementById("tbody")

btnSave.addEventListener("click", function () {
    var tr = document.createElement("tr")

    tbody.append(tr)
    var td1 = document.createElement("td")
    tr.append(td1)


    var td2 = document.createElement("td")
    tr.append(td2)

    var td3 = document.createElement("td")
    tr.append(td3)


    var td4 = document.createElement("td")
    tr.append(td4)


    var td5 = document.createElement("td")
    tr.append(td5)

    var td6 = document.createElement("td")
    tr.append(td6)

    td1.textContent = input1.value
    td2.textContent = input2.value
    if (inputMale.checked) {
        td3.textContent = inputMale.value
    }
    else if (inputFemale.checked) {
        td3.textContent = inputFemale.value
    }

    td4.textContent = input4.value
    td5.textContent = input5.value
    td6.innerHTML = "<button id="+'Del'+" onclick="+'del(event)'+">Delete</button>"
})

function del(event){
    event.target.parentElement.parentElement.remove()
}


