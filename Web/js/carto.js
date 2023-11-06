function change_image(c) {
    var a = document.getElementById("image_map");
    a.style.backgroundImage = "url(img/mapZone/" + c + ".png)";
    return true;
}

function hide_image() {
    var a = document.getElementById("image_map");
    a.style.backgroundImage = "none";
    return true;
}

//Quand on clique, sa change la description
$(document).ready(function () {
    // Pour la map
    $(".item + .item").hide();
    $("Map area").click(function (event) {
        event.preventDefault();
        var art = $(this).attr("data");
        var artimage = $(this).attr("data-image");
        $('#choix-agglo option[value="' + artimage + '"]').prop('selected', true);

        if ($('#choix-agglo').val() !== "commune") {
            $("#presentation").hide();
        }

        $(".item").hide();
        $('#' + art).show();
    });

    // Pour le select
    $("#choix-agglo").change(function () {
        var selectedValue = $(this).val();
        if (selectedValue === "commune") {
            $("#presentation").show();
        } else {
            $("#presentation").hide();
        }

        var art = $(this).find(':selected').attr("data");
        $(".item").hide();
        $('#' + art).show();
    });
});
