$(function () {
    $("input.sortBarPrice").keyup(function () {
        var num = $(this).val();
        //if (num.length == 0) {
        //    $('div.productUnit').show();
        //    return;
        //}
        num = parseInt(num);
        if (num <= 0) {
            num = 1;
        }
        //$(this).val(num);

        var begin = $('input.beginPrice').val();
        var end = $('input.endPrice').val();
        if (!isNaN(begin) && !isNaN(end)) {
            $('div.productUnit').hide();
            $('div.productUnit').each(function () {
                var price = $(this).attr('price');
                price = new Number(price);
                if (begin != '' && end == '') {
                    console.log(1);
                    if (price >= begin) {
                        $(this).show();
                    }
                } else if (begin != '' && end != '') {

                    if (price <= end && price >= begin) {
                        $(this).show();
                    }
                } else if (begin == '' && end != '') {
                    if (price <= end) {
                        $(this).show();
                    }
                } else if (begin == '' && end == '') {
                    $('div.productUnit').show();
                }
                //if (price <= end && price >= begin) {
                //        $(this).show();
                //}
            });
        }
    });
    $('.categoryProducts a').click(function () {
        window.location.href = "product.html";
    })
});