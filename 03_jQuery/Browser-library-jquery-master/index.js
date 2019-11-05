$(document).ready(function () {

    console.log('document is ready...');

    $('.teapot').click(function () {
        // console.log('move teapot...');
        $(this).toggleClass("teapot-rotate");
    });

    $('.submit2').click(function () {
        // console.log('submitting infos ...');
        // let val= $('input').val();
        // console.log('value=>' + val);
        // console.log($('.modal'))
        $('.modal').show();

    });

    $('.modal-close').click(function() {
        $('.modal').hide();   
    });

    let arrtext = ["Great tea for a cold night", "Rich in flavours","Soothing and tasty"]

    $('.selection__image').hover(function(){
        let randomVal = Math.floor(Math.random() * 3)
        $(this).siblings('p').text(arrtext[randomVal]);
        console.log("blaaaa");
    },function(){
        $(this).siblings('p').text("Tea Option");
        console.log("yeah");
    });
});