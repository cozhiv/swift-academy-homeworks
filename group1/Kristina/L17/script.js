"use strict";

$(document).hover(function () {
    $('[data-toggle="tooltip"]').tooltip();
});


$('form').submit(function (event) {
    event.preventDefault();

    var form = event.target;

    try {
        fieldValidate(form, 'name');
        fieldValidate(form, 'email');
        fieldValidate(form, 'message');
        fieldValidate(form, 'pass');

        alert('all is fine!');
    } catch (error) {
        var field = error.target;
        field.addClass('error');
        field.focus();

        field.parent().append('<span class="error-span">' + error.message + '</span>');
        //        $(field).wrap('<span class="error-span">' + error.message + '</span>');
    }
});


function fieldValidate(form, fieldName) {
    var field = $(form).find('[name=' + fieldName + ']');
    var fieldValue = field.val();

    field.removeClass('error');
    field.parent().find('span').remove();

    if (fieldValue === "") {
        var error = new Error(fieldName + " is mendatory");
        error.target = field;
        throw error;
    }
    if (fieldName === "name" && usernameCheck(fieldValue) === false) {
        var error = new Error("name is invalid");
        error.target = field;
        throw error;
    }
    if (fieldName === "email" && emailCheck(fieldValue) === false) {
        var error = new Error("email is invalid");
        error.target = field;
        throw error;
    }
    if (fieldName === "pass") {
        if (passCheck(fieldValue) === false) {
            var error = new Error("pass is invalid");
            error.target = field;
            throw error;
        }
        var pass1 = $('[name="pass"]').val();
        var pass2 = $('[name="confirmPass"]').val();
        if (pass1 != pass2) {
            var error = new Error("passwords do not match");
            error.target = field;
            throw error;
        }
    }
}

function emailCheck(email) {
    var match = email.match(/^[a-zA-Z\.]+@\w+\.\w+$/);
    return match != null;
}

function usernameCheck(name) {
    var match = name.match(/^\w+$/);
    return match != null;
}

function passCheck(pass) {
    var match = pass.match(/^[0-9a-zA-Z]{8,}$/);
    return match != null;
}