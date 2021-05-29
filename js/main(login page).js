let id = $('#id');
let password = $('#password');
let btn = $('#btn');

$(btn).on('click', function() {
    if($(id).val() == "") {
        $(id).next('label').addClass('warning');
        setTimeout(function() {
            $('label').removeClass('warning');
        },1500);
    }
    else if($(password).val() == "") {
        $(password).next('label').addClass('warning');
        setTimeout(function() {
            $('label').removeClass('warning');
        },1500);
    }
});

$(btn).on('click', function () {
    if ($(id).val() == "" | $(password).val() == "") {
        alert("로그인을 할 수 없습니다.");
    }
    else {
        location.href = "index(book page).html"
    }
});