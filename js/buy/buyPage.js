$(function () {
    $('img.leaveMessageImg').click(function () {
        $(this).hide();
        $('span.leaveMessageTextareaSpan').show();
        $('div.orderItemSumDiv').css('height', '100px');
    })
    $('.leaveMessageTextarea').keyup(function () {
        var length = $(this).val().length;
        if (length <= 200) {
            $('.EnterNum').html(200 - length);
        } else {
            $('.EnterNum').html(0);
            var Enter = $(this).val();
            Enter = Enter.substring(0, 200);
            $(this).val(Enter);
        }
    })
})