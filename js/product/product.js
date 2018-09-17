$(function () {
    var stock = 66;
    $('.productNumberSetting').keyup(function () {
        var num = $(this).val();
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
        $(this).val(num);
    });
    $('.increaseNumber').click(function () {
        var num = $('.productNumberSetting').val();
        num = parseInt(num);
        num++;
        if (num > stock) {
            num = stock;
        }
        $('.productNumberSetting').val(num);
    });
    $('.decreaseNumber').click(function () {
        var num = $('.productNumberSetting').val();
        num = parseInt(num);
        num--;
        if (num <= 0) {
            num = 1;
        }
        $('.productNumberSetting').val(num);
    });
    $("img.smallImage").mouseenter(function () {
        var bigImageUrl = $(this).attr("bigImageURL");
        console.log(bigImageUrl);
        $('img.bigimg').attr("src", bigImageUrl);
    });
    $("img.bigimg").load(function () {
        $("img.smallImage").each(function () {
            var bigImageURL = $(this).attr("bigImageURL");
            img = new Image();
            img.src = bigImageURL;
            img.onload = function () {
                console.log(bigImageURL);
                $("div.img4load").append($(img));
            };
        });
    });
    $('.productPageDiv').hide();
    $('a.productDetailTopReviewLink').click(function () {
        $('.productDetailDiv').hide();
        $('.productPageDiv').show();
    });
    $('a.productReviewTopPartSelectedLink').click(function () {
        $('.productDetailDiv').show();
        $('.productPageDiv').hide();
    });
    $('homepageCategoryProducts a').click(function () {
        console.log(1);
        window.location.href = "product.html";
    });
});