$(function () {
    $("#comprar").click(function (event) {
        event.preventDefault();

        $('.precio').empty();
        
        $('.precio').append("<h3>Boleta:</h3>");

        var total_pagar = 0;
        var hamburguesa_lentejas = $("input:checkbox[name=hamburguesa-lentejas]:checked").val();
        var mayonesa_soya = $("input:checkbox[name=mayonesa-soya]:checked").val();
        var jamon = $("input:checkbox[name=jamon]:checked").val();
        var hamburguesa_soya = $("input:checkbox[name=hamburguesa-soya]:checked").val();
        var hamburguesa_seitan = $("input:checkbox[name=hamburguesa-seitan]:checked").val();
        var vienesas = $("input:checkbox[name=vienesas]:checked").val();
        var salchicha_iberica = $("input:checkbox[name=salchicha-iberica]:checked").val();
        var vegan_roll = $("input:checkbox[name=vegan-roll]:checked").val();
        var bife = $("input:checkbox[name=bife]:checked").val();

        if (hamburguesa_lentejas == "1200") {
            total_pagar = 1200 + total_pagar;
            var hamburguesa_lentejas = "HAMBURGUESA DE LENTEJAS: $1200";
            $('.precio').append("<p>" + hamburguesa_lentejas + "</p>")
        }
        if (mayonesa_soya == "3490") {
            total_pagar = 3490 + total_pagar;
            var mayonesa_soya = "MAYONESA DE SOYA: $3490";
            $('.precio').append("<p>" + mayonesa_soya + "</p>")
        }
        if (jamon == "3990") {
            total_pagar = 3990 + total_pagar;
            var jamon = "JAMON DORADO PACK 10 LAMINAS: $3990";
            $('.precio').append("<p>" + jamon + "</p>")
        }
        if (hamburguesa_soya == "4290") {
            total_pagar = 4290 + total_pagar;
            var hamburguesa_soya = "HAMBURGUESA DE SOYA CON MANÍ VEGANA: $4290";
            $('.precio').append("<p>" + hamburguesa_soya + "</p>")
        }
        if (hamburguesa_seitan == "3690") {
            total_pagar = 3690 + total_pagar;
            var hamburguesa_seitan = "HAMBURGUESA DE SEITÁN VEGANA: $3690";
            $('.precio').append("<p>" + hamburguesa_seitan + "</p>")
        }
        if (vienesas == "2290") {
            total_pagar = 2290 + total_pagar;
            var vienesas = "VIENESAS VEGANA PACK DE 6: $2990";
            $('.precio').append("<p>" + vienesas + "</p>")
        }
        if (salchicha_iberica == "3190") {
            total_pagar = 3190 + total_pagar;
            var salchicha_iberica = "SALCHICHA IBÉRICA VEGANA PACK DE 6: $3190";
            $('.precio').append("<p>" + salchicha_iberica + "</p>")
        }
        if (vegan_roll == "5990") {
            total_pagar = 5990 + total_pagar;
            var vegan_roll = "VEGAN ROLL: $5990";
            $('.precio').append("<p>" + vegan_roll + "</p>")
        }
        if (bife == "2000") {
            total_pagar = 2000 + total_pagar;
            var bife = "BIFE VEGANO: $2000";
            $('.precio').append("<p>" + bife + "</p>")
        }

        //function calcular_total_precio(hl, m, j, hso, hse,v, s, vr, b) {
        //    return hl + m + j + hso + hse + v + s + vr + b;
        //

        //var total_precio = calcular_total_precio(hamburguesa_lentejas, mayonesa_soya, jamon, hamburguesa_soya, hamburguesa_seitan, vienesas, salchicha_iberica, vegan_roll, bife);
        //var total_precio = hamburguesa_lentejas + mayonesa_soya + jamon + hamburguesa_soya + hamburguesa_seitan + vienesas + salchicha_iberica + vegan_roll + bife;

        $('.precio').append("<p> PRECIO TOTAL: $" + total_pagar + "</p>");
    });
});
