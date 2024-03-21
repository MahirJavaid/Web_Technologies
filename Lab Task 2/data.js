function display() {
    $.ajax({
        url: "https://usmanlive.com/wp-json/api/stories",
        method: "GET",
        dataType: "json",
        success: function (data) {
            var storiesList = $("#storiesList");
            storiesList.empty();

            $.each(data, function (index, story) {
                storiesList.append(
                    `<div class="mb-3">
                        <h3>${story.title}</h3>
                        <div>${story.content}</div>
                        <div>
                            <button class="btn btn-info btn-sm mr-2 btn-edit" data-id="${story.id}">Edit</button>
                            <button class="btn btn-danger btn-sm mr-2 btn-del" data-id="${story.id}">Delete</button>
                        </div>
                    </div>
                    <hr />
                    `
                );
            });
        },
        error: function (error) {
            console.error("Error fetching stories:", error);
        },
    });
}

function deleteStory() {
  let storyId = $(this).attr("data-id");
  $.ajax({
    url: "https://usmanlive.com/wp-json/api/stories/" + storyId,
    method: "DELETE",
    success: function () {
      display();
    },
    error: function (error) {
      console.error("Error deleting story:", error);
    },
  });
}

function editBtnClicked(event) {
    event.preventDefault();
    let storyId = $(this).attr("data-id");
    $.ajax({
        url: "https://usmanlive.com/wp-json/api/stories/" + storyId,
        method: "GET",
        success: function (data) {
            console.log(data);
            //$("#clearBtn").show();
            $("#story").val(data.title);
            $("#description").val(data.content);
            $("#creation").html("Update");
            $("#creation").attr("data-id", data.id);
        },
        error: function (error) {
            console.error("Error deleting story:", error);
        },
    });
}

function handleSubmission(event) {
    console.log("joke");
    event.preventDefault();
    let storyId = $("#creation").attr("data-id");
    var title = $("#story").val();
    var content = $("#description").val();
    if (storyId != null) {
        console.log("hello")
        $.ajax({
            url: "https://usmanlive.com/wp-json/api/stories/" + storyId,
            method: "PUT",
      
            data: { title, content },
            success: function () {
                display();
            },
            error: function (error) {
                console.error("Error creating story:", error);
            },
        });
    } else {
        console.log("hi");
        $.ajax({
            url: "https://usmanlive.com/wp-json/api/stories",
            method: "POST",
            data: { title, content },
            success: function () {
                display();
            },
            error: function (error) {
                console.error("Error creating story:", error);
            },
        });
    }
}

$(document).ready(function () {
    display();
    $(document).on("click", ".btn-del", deleteStory);
    $(document).on("click", ".btn-edit", editBtnClicked);
    
    $("#createform").submit(handleSubmission);
});
