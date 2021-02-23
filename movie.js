$("form").on("submit", function (e) {
    e.preventDefault();

    let title = $("#movie-title").val();
    let rating = $("#rating").val();

    $("ol").append($("<li>").html(`${title} - ${rating} <button id="delete-btn">X</button>`));
    
});

$("ol").on("click", "button", function (e) {
    e.target.parentElement.remove();
});