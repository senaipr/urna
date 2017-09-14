﻿$(document).ready(function () {
    $.ajax({
        url: "https://urna.tgnandrade.com.br/WebMethods.asmx/Grafico",
        type: "POST",
		crossDomain: true,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (result) {
            $("#result").html(result.d);
        },
        error: function (result) {
            console.log("Erro...");
            console.log(result);
        }
    });
});

$(function () {
    //30 segundos
    setInterval(function () {
        $.ajax({
            url: "https://urna.tgnandrade.com.br/WebMethods.asmx/Grafico",
            type: "POST",
			crossDomain: true,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (result) {
                $("#result").html(result.d);
            },
            error: function (result) {
                console.log("Erro...");
                console.log(result);
            }
        });
    }, 30000);
});