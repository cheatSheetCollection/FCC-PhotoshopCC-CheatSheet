$(document).foundation()


// jQuery methods go here...
$(document).ready(function () {    
    // Declare CSS Variables ////////////////////////////
    $main = $('main');
    $menu = $('.menu');
    $section = $('#main-section');
    
    // Declare JS Variables /////////////////////////////
    var articleTitle = [
        "All Shortcuts",
        "Create Action Key",
        "Cycle Blend Modes"
    ]
    
    // Setup ////////////////////////////////////////////
    
    function getText(title) {
        switch (title) {
            case "All Shortcuts":
                text = "<kbd>[</kbd> / <kbd>]</kbd>: Decrease or increase brush size";
            return text;
        }
    }
    
    for (i = 0; i < articleTitle.length; i++) {
        titleNoSpace = articleTitle[i].replace(/\s/g, '_');
        // Populate side menu
        $menuList = $('<li>');
        $menuAnchor = $('<a>');
        $menu.append($menuList);
        $menuAnchor
        .addClass('nav-link')
        .appendTo($menuList)
        .attr('href', '#' + titleNoSpace)
        .text(articleTitle[i]);
        
        // Populate sections
        $articleContainer = $('<section id="main-section" class="card main-section">')
        $articleHeader = $('<header>');
        $articleContent = $('<div class="content">');
        $articleImage = $('<img>');
        $articleText = $('<p>');
        $articleContainer
        .appendTo($main)
        .append($articleHeader)
        .append($articleContent)
        .attr({
            id: titleNoSpace,
            'data-magellan-target': titleNoSpace
        });
        $articleHeader.text(articleTitle[i]);
        if (articleTitle[i] != "All Shortcuts") {
            $articleImage
            .appendTo($articleContent)
            .attr('src', '../images/' + titleNoSpace +  '.png');
        }
        $articleText.appendTo($articleContent).append(getText(articleTitle[i]));
    }


    $('.menu li').hover(function () {
        $(this).toggleClass('is-active');
    });
}); 