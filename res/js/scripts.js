
    $(document).ready(function(){
        var boxWidth = $(".button-8").width();
        $(".slide-left").click(function(){
            $(".button-8").animate({
                width: 0
            });
        });
        $(".slide-right").click(function(){
            $(".button-8").animate({
                width: boxWidth
            });
        });
    });
