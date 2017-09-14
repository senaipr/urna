﻿$(function () {
    rebindAllFunctions();
});

function inputValor(digito) {
    if ($.trim($("#digito1").val()) == "") {
        $("#digito1").val(digito);
    } else if ($.trim($("#digito2").val()) == "") {
        $("#digito2").val(digito);
    }

    if ($.trim($("#digito1").val()) != "" && $.trim($("#digito2").val()) != "") {
        $.ajax({
            url: "https://urna.tgnandrade.com.br/WebMethods.asmx/MeuVoto",
            type: "POST",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({ digito1: $.trim($("#digito1").val()), digito2: $.trim($("#digito2").val()) }),
            dataType: "json",
            success: function (result) {
                var obj = eval("(" + result.d + ")");
                if (obj != null && obj != undefined) {
                    $("#lblNome").text("NOME: " + obj.Nome);
                    $("#lblPartido").text("PARTIDO: " + obj.Partido);
                    $("#imgFoto").attr("src", "Images/Fotos/" + obj.Foto);
                }
            },
            error: function (result) {
                console.log("Erro...");
                console.log(result);
            }
        });
    }
}

function confirmarVoto() {
    if ($.trim($("#digito1").val()) != "" && $.trim($("#digito2").val()) != "") {
        $.ajax({
            url: "https://urna.tgnandrade.com.br/WebMethods.asmx/Salvar",
            type: "POST",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({ digito1: $.trim($("#digito1").val()), digito2: $.trim($("#digito2").val()) }),
            dataType: "json",
            success: function (result) {
                var obj = eval("(" + result.d + ")");
                if (obj != null && obj != undefined) {
                    $("audio").get(0).play();
                    limparVoto();
                    concluirVoto();
                }
            },
            error: function (result) {
                console.log("Erro...");
                console.log(result);
            }
        });
    }
}

function limparVoto() {
    $("#digito1").val("");
    $("#digito1").removeAttr("placeholder");
    $("#digito2").val("");
    $("#digito2").removeAttr("placeholder");
    $("#lblNome").html("&nbsp;");
    $("#lblPartido").html("&nbsp;");
    $("#imgFoto").removeAttr("src");
}

function concluirVoto() {
    $("#inicioVoto").hide();
    $("#fimVoto").show();
    setTimeout(function () {
        $("#inicioVoto").show();
        $("#fimVoto").hide();
    }, 3000);
}

function rebindAllFunctions() {
    $("#btnAnular").click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        $.ajax({
            url: "https://urna.tgnandrade.com.br/WebMethods.asmx/Salvar",
            type: "POST",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({ digito1: "", digito2: "" }),
            dataType: "json",
            success: function (result) {
                var obj = eval("(" + result.d + ")");
                if (obj != null && obj != undefined) {
                    $("audio").get(0).play();
                    limparVoto();
                    concluirVoto();
                }
            },
            error: function (result) {
                console.log("Erro...");
                console.log(result);
            }
        });
    });

    $("#btnCorrigir").click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        limparVoto();
    });

    $("#btnConfirmar").click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        confirmarVoto();
    });

    $("#btnNumero1").click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        inputValor("1");
    });

    $("#btnNumero2").click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        inputValor("2");
    });

    $("#btnNumero3").click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        inputValor("3");
    });

    $("#btnNumero4").click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        inputValor("4");
    });

    $("#btnNumero5").click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        inputValor("5");
    });

    $("#btnNumero6").click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        inputValor("6");
    });

    $("#btnNumero7").click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        inputValor("7");
    });

    $("#btnNumero8").click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        inputValor("8");
    });

    $("#btnNumero9").click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        inputValor("9");
    });

    $("#btnNumero0").click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        inputValor("0");
    });
}