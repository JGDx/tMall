$(function () {
    $('a[orderstatus]').click(function () {
        var orderStatus = $(this).attr('orderstatus');
        if (orderStatus == 'all') {
            $('table[orderstatus]').show();
        } else {
            $('table[orderstatus]').hide();
            $('table[orderstatus=' + orderStatus + '').show();
        }
        $('div.orderType div').removeClass('selectedOrderType');
        $(this).parent('div').addClass('selectedOrderType');
    });
    $('.orderListItemConfirm').click(function () {
        window.location.href = 'confirmPay.html';
    });
    $('.orderListItemReview').click(function () {
        window.location.href = 'review.html';
    });
    $('.orderListItemPay').click(function () {
        window.location.href = 'payPage.html';
    })
});