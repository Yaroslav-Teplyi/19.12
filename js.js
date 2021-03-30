'use strict'

let checkboxState = false,
    checkbox = document.getElementById('checkbox'),
    passwordState = false,
    closedEye = document.getElementById('closed-eye'),
    openedEye = document.getElementById('opened-eye');

alert('На хрестик нажмеш - смерт, на око - таємницю розкажеш, будь обережний!!!')

function closeForm() {
    document.querySelector('.action').hidden = true;
    alert('ТА за шо??!!')
}


function onClickCheckbox() {
    if(checkboxState == false) {
        checkboxState = true
        checkbox.classList.add('active')
        return
    }
    checkbox.classList.remove('active')
    checkboxState = false
}

function passwordVisibility() {
    if(passwordState == false) {
        passwordState = true
        closedEye.classList.add('invisible')
        openedEye.classList.remove('invisible')
        document.getElementById('password').type = 'text';
        return
    }
    passwordState = false
    closedEye.classList.remove('invisible')
    openedEye.classList.add('invisible')
    document.getElementById('password').type = 'password';
    return
}