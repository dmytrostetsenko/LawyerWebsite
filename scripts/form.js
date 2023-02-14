const pageLang = document.documentElement.lang;
(() => {
    if(pageLang === 'uk'){
        $('.form').validate({
            rules: {
                name: "required",
                phone: "required"
            },
            messages: {
                name: "Це поле обов'язкове",
                phone: "Це поле обов'язкове"
            }
        });
    }else{
        $('.form').validate({
            rules: {
                name: "required",
                phone: "required"
            },
            messages: {
                name: "Это поле обязательное",
                phone: "Это поле обязательное"
            }
        });
    }
    $('input[name=phone]').mask("+38 (999) 999-99-99")
    $('.form').submit(function(e){
        e.preventDefault();
        if(!$(this).valid()){
            return;
        }
        $(this).addClass('_sending')
        $.ajax({
            type: "POST",
            url: "/mailer/smart.php",
            data: $(this).serialize(),
            success: function(){
                $('.form').removeClass('_sending')
            }
        }).done(function(){
            $(this).find('input').val('');
            $('.form').trigger('reset')
        })
        return false;
    });
})();