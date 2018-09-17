$(function () {

    $('img.cartProductItemIfSelected').click(function () {
        console.log(1);
        var selectit = $(this).attr("selectit");
        if ("selectit" == selectit) {
            $(this).attr('src', 'img/site/cartNotSelected.png');
            $(this).attr("selectit", "false");
            $(this).parents('tr.cartProductItemTR').css('background-color', '#fff');
        } else {
            $(this).attr('src', 'img/site/cartSelected.png');
            $(this).attr("selectit", "selectit");
            $(this).parents('tr.cartProductItemTR').css('background-color', '#FFF8E1');
        }
        syncSelect();
        syncCreateOrderButton();
        calcCartSumPriceAndNumber();
    })
    $('img.selectAllItem').click(function () {
        var selectit = $(this).attr('selectit');
        if ('selectit' == selectit) {
            $('img.selectAllItem').attr('selectit', 'false');
            $('img.selectAllItem').attr('src', 'img/site/cartNotSelected.png');
            $('img.cartProductItemIfSelected').each(function () {
                console.log(1);
                $(this).attr('selectit', 'false');
                $(this).attr('src', 'img/site/cartNotSelected.png');
                $(this).parents('tr.cartProductItemTR').css('background-color', '#fff');
            })
        } else {
            $('img.selectAllItem').attr('selectit', 'selectit');
            $('img.selectAllItem').attr('src', 'img/site/cartSelected.png');
            $('img.cartProductItemIfSelected').each(function () {
                console.log(2);
                $(this).attr('selectit', 'selectit');
                $(this).attr('src', 'img/site/cartSelected.png');
                $(this).parents('tr.cartProductItemTR').css('background-color', '#FFF8E1');
            })
        }
        syncCreateOrderButton();
        calcCartSumPriceAndNumber();
    })
    $('.numberMinus').click(function () {
        var pid = $(this).attr('pid');
        var stock = $('span.orderItemStock[pid=' + pid + ']').text();
        var price = $('span.orderItemPromotePrice[pid=' + pid + ']').text();
        var num = $('.orderItemNumberSetting[pid=' + pid + ']').val();
        if (--num <= 0) {
            num = 1;
        }
        syncPrice(pid, num, price);
    })
    $('.numberPlus').click(function () {
        var pid = $(this).attr('pid');
        var stock = $('span.orderItemStock[pid=' + pid + ']').text();
        var price = $('span.orderItemPromotePrice[pid=' + pid + ']').text();
        var num = $('.orderItemNumberSetting[pid=' + pid + ']').val();
        num++;
        console.log('stoke:' + stock + '  num:' + num);
        if (num > stock) {
            num = stock;
        }
        syncPrice(pid, num, price);
    })
    $('input.orderItemNumberSetting').keyup(function () {
        var pid = $(this).attr('pid');
        var stock = $('span.orderItemStock[pid=' + pid + ']').text();
        var price = $('span.orderItemPromotePrice[pid=' + pid + ']').text();
        var num = $('.orderItemNumberSetting[pid=' + pid + ']').val();
        num = parseInt(num);
        if (isNaN(num)) {
            num = 1;
        }
        if (num <= 0) {
            num = 1;
        }
        if (num > stock) {
            num = stock;
        }
        syncPrice(pid, num, price);
    })
});
function formatMoney(num) {
    num = num.toString().replace(/\$|\,/g, '');
    if (isNaN(num))
        num = "0";
    sign = (num == (num = Math.abs(num)));
    num = Math.floor(num * 100 + 0.50000000001);
    cents = num % 100;
    num = Math.floor(num / 100).toString();
    if (cents < 10)
        cents = "0" + cents;
    for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++)
        num = num.substring(0, num.length - (4 * i + 3)) + ',' +
            num.substring(num.length - (4 * i + 3));
    return (((sign) ? '' : '-') + num + '.' + cents);
}
function syncCreateOrderButton() {
    var selectAny = false;
    $('.cartProductItemIfSelected').each(function () {
        if ('selectit' == $(this).attr('selectit')) {
            selectAny = true;
        }
    })
    if (selectAny) {
        $('button.createOrderButton').removeAttr("disabled");
        $('button.createOrderButton').css("background-color", "#C40000");
    } else {
        $('button.createOrderButton').attr("disabled", "true")
        $('button.createOrderButton').css("background-color", "#AAAAAA");
    }
}
function syncSelect() {
    var selectAll = true;
    $('.cartProductItemIfSelected').each(function () {
        if ("false" == $(this).attr('selectit')) {
            selectAll = false;
        }
    });
    if (selectAll) {
        $('img.selectAllItem').attr("src", "img/site/cartSelected.png");
        $('img.selectAllItem').attr('selectit', 'selectit');
    } else {
        $('img.selectAllItem').attr("src", "img/site/cartNotSelected.png");
        $('img.selectAllItem').attr('selectit', 'false');
    }
}
function calcCartSumPriceAndNumber() {
    var sum = 0;
    var totalNumber = 0;
    $("img.cartProductItemIfSelected[selectit='selectit'").each(function () {
        var oiid = $(this).attr("oiid");
        var price = $(".cartProductItemSmallSumPrice[oiid=" + oiid + "]").text();
        price = price.replace(/,/g, "");
        price = price.replace(/гд/g, "");
        sum += new Number(price);
        var num = $(".orderItemNumberSetting[oiid=" + oiid + "]").val();
        totalNumber += new Number(num);
    })
    $('span.cartSumPrice').html(formatMoney(sum));
    $('span.carTitlePrice').html(formatMoney(sum));
    $('span.cartSumNumber').html(totalNumber);
}
function syncPrice(pid, num, price) {
    $('.orderItemNumberSetting[pid=' + pid + ']').val(num);
    var cartProductItemSmallSumPrice = formatMoney(num * price);
    $('.cartProductItemSmallSumPrice[pid=' + pid + ']').html( cartProductItemSmallSumPrice);
    calcCartSumPriceAndNumber();
}