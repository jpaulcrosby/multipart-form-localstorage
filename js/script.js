$(document).ready(function() {
    var finalPage = window.location.href.substr(window.location.href.lastIndexOf('/'));
    $("#saveData")
        .click(function(e) {
            localStorage.setItem("localStorage", "notEmpty");
            var data = $("form").serializeArray();
            $.each(data, function(i, obj) {
                localStorage.setItem(obj.name, obj.value);
            });
        });
    if (localStorage.getItem("localStorage") == "notEmpty") {
        var data = $("form").serializeArray();
        $.each(data, function(i, obj) {
            $("[name='" + obj.name + "']").val(localStorage.getItem(obj.name));
        });
    }
    if (finalPage == "/serialized-data.html" && localStorage.getItem("localStorage") == "notEmpty") {
        for (var i = 0; i <= 16; i++) {
            if (window.localStorage.key(i).search("2") == -1 && window.localStorage.key(i) != "flag") {
                $("#person1").append("<tr><td>" + window.localStorage.key(i) + "</td><td>" + window.localStorage.getItem(localStorage.key(i)) + "</td></tr>");
            }
        }
        for (var i = 0; i <= 16; i++) {
            if (window.localStorage.key(i).search("2") != -1 && window.localStorage.key(i) != "flag") {
                $("#person2").append("<tr><td>" + window.localStorage.key(i) + "</td><td>" + window.localStorage.getItem(localStorage.key(i)) + "</td></tr>");
            }
        }

    };
});