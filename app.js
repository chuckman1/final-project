$("#button").on("click", function() {
    let display = document.getElementById("displayName")
    let comText = document.getElementById("commentInput")
    $("#commentsSection").prepend(`<div class='comment'>
                                        <img src='userIcon.jpg'>
                                        <div class="postText">
                                            <h4>${display.value}</h4>
                                            <h3>${comText.value}</h3>
                                            <div class="editBox toggle">
                                                <input type="text" class="editText">
                                                <input type="submit" class="editSubmit">
                                            </div>
                                        </div>
                                        <div class="edits">
                                            <input type="button" class="edit" value="edit">
                                            <input type="button" class="delete" value="delete">
                                        </div>
                                    </div>`)
    display.value = ""
    comText.value = ""
});

$("#commentsSection").on("click", ".edit", function(event){
    let target = event.target
    let parent = $(target).parents(".comment")
    let post = $(parent).children()[1]
    let editbox = $(post).children()[2]
    if ($(editbox).hasClass("toggle")) {
        $(editbox).removeClass("toggle")
    }
});

$("#commentsSection").on("click", ".editSubmit", function(event){
    let target = event.target
    let parent = $(target).parents(".comment")
    let post = $(parent).children()[1]

    let editform = $(post).children()[2]
    let editbox = $(editform).children()[0]
    let edittext = $(editbox).val()

    let comtextbox = $(post).children()[1]
    $(comtextbox).text(edittext)
    $(editform).addClass("toggle")    
});

$("#commentsSection").on("click", ".delete", function(event){
    let target = $(event.target)
    target.parents(".comment").remove()
});