function change_image(c) {
     var a = document.getElementById("image_map");
     a.style.backgroundImage = "url(../img/map/" + c + ".png)";
     console.log(c);
     return true;
 }

function hide_image() {
     var a = document.getElementById("image_map");
     a.style.backgroundImage = "none";
     return true;
}

$(document).ready(function (e) {
    $('img[usemap]').rwdImageMaps();
});
$(document).ready(function () {
    $(".item + .item").hide();
    $("Map area").click(function (event) {
        event.preventDefault();
        var art = $(this).attr("data");
        var artimage = $(this).attr("data-image");
       $('#communes option[value="'+artimage+'"]').prop('selected', true);
        
        $(".item").hide();
        $('#'+art).show();

    });
    $("#communes").change(function () {
        //var art = $(this).attr("data");
        var art = $(this).find(':selected').attr("data");
        $(".item").hide();
        $('#'+art).show();
    });
});

