$(function () {
    $('div.rightMenu span').mouseenter(function () {
        var left = $(this).position().left;
        var top = $(this).position().top + 163;
        var width = $(this).css("width");
        var destLeft = parseInt(left) + parseInt(width) / 2;
        console.log("left:" + left + ",top:" + top + ",width:" + width + ",destLeft" + destLeft);
        $('img#catear').css('left', destLeft);
        $('img#catear').css('top', top + 32);
        $('img#catear').fadeIn(500);
    });
    $('div.rightMenu span').mouseleave(function () {
        $('img#catear').hide();
    });
    function showProductsAsideCategorys(cid) {
        $("div.eachCategory[cid=" + cid + "]").css("background-color", "white");
        $("div.eachCategory[cid=" + cid + "] a").css("color", "#87CEFA");
        $("div.productsAsideCategorys[cid=" + cid + "]").show();
    }
    function hideProductsAsideCategorys(cid) {
        $("div.eachCategory[cid=" + cid + "]").css("background-color", "#e2e2e3");
        $("div.eachCategory[cid=" + cid + "] a").css("color", "#000");
        $("div.productsAsideCategorys[cid=" + cid + "]").hide();
    }
    $('div.eachCategory').mouseenter(function () {
        var cid = $(this).attr("cid");
        showProductsAsideCategorys(cid);
    });
    $('div.eachCategory').mouseleave(function () {
        var cid = $(this).attr("cid");
        hideProductsAsideCategorys(cid);
    });
    $('div.productsAsideCategorys').mouseenter(function () {
        var cid = $(this).attr("cid");
        showProductsAsideCategorys(cid);
    });
    $('div.productsAsideCategorys').mouseleave(function () {
        var cid = $(this).attr("cid");
        hideProductsAsideCategorys(cid);
    });
    $(".productItem img").mouseover(function () {
        //$(".productItem img").animate({ opacity: "0.7", filter: "alpha(opacity = 70)" }, 500);
        $(this).animate({ opacity: "0.7", filter: "alpha(opacity = 70)" }, 200);
    });
    $(".productItem img").mouseout(function () {
        //$(".productItem img").animate({ opacity: "0.7", filter: "alpha(opacity = 70)" }, 500);
        $(this).animate({ opacity: "1", filter: "alpha(opacity = 100)" }, 300);
    });
    $('.homepageDiv a').click(function () {
        window.location.href = "sort.html";
    });
    $('.homepageCategoryProducts a').click(function () {
        console.log(1);
        window.location.href = "product.html";
    });
});