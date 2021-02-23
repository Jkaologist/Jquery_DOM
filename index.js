//console.log("Let’s get ready to party with jQuery!");

$("article img").addClass('image-center');

$("article p").last().remove();

$("h1").css("font-size", Math.random() * 100);

$("ol").append("<li>cats are cool</li>");

$("aside").empty().html('<p>I apologize for being a list, it was an honest mistake.</p>');

$('input').on("keypress", function() {
    let red = parseInt($("input").first().val());
    let green = parseInt($("input").eq(1).val());
    let blue = parseInt($("input").last().val());

    $('body').css("background-color", `rgb(${red}, ${green}, ${blue})`);
});

$('img').on("click", function(e) {
    e.target.remove();
});