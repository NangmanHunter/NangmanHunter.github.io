
$(`.btn-box`).append(`
        <button class="btn detail-fold-spread" >●</button>
        <button class="btn horizontal-vertical">+</button>
        <button class="btn diagonal-top-bottom">╲</button>
        <button class="btn expand-shrink">◆</button>
`)

$(document).scroll(function(){
    if (scrollY > 100) {
        $(`.btn-box .btn`).addClass(`scroll-low`)
    } else {
        $(`.btn-box .btn`).removeClass(`scroll-low`)
    }
})





$(document).on('click', '.horizontal', function() {
        
    $(this).style(`filter: invert(1);`);
    $('li:has(ul)').addClass(`pointer`);
    $(`ul li`).off(`click`);


    $(document).on('click.waitForSecond', 'ul li', function(e) {
       
        $(this).ff();
        $(this).children(`ul`).addClass(`hor-ul`);
        e.stopPropagation();

        $(document).off('click.waitForSecond'); 
        
        $('.horizontal').removeAttr("style");
        $('li:has(ul)').removeClass(`pointer`);
        toggleEvent();
        
    });

});


$(document).on('click', '.vertical', function() {
    
    $(this).style(`filter: invert(1);`);
    $('li:has(ul)').addClass(`pointer`);
    $(`ul li`).off(`click`);

    $(document).on('click.waitForSecond', 'ul li', function(e) {
       
        $(this).ff();
        $(this).children(`ul`).removeClass(`hor-ul`);
        e.stopPropagation();

        $(document).off('click.waitForSecond'); 
        
        $('.vertical').removeAttr("style");
        $('li:has(ul)').removeClass(`pointer`);
        toggleEvent();
        
    });

});

$(`.top-toggle`).click(function() { $(this).toggleText(`↓`, `→`); $(`.top`).toggleClass(`hor-ul`); })

$(`.spread`).click(function (e) { $(`ul li`).children(`ul`).slideDown(); });
$(`.fold`)  .click(function (e) { $(`ul li`).children(`ul`).slideUp();   });
$(`.reset`) .click(function (e) { $(`ul`)   .removeClass(`hor-ul`);      });

$(`.detail`).click(function() { $(this).toggleText(`▲`, `▼`); $(`.detail-divide`).toggle(); })



let count_fs=0;
$(`.detail-fold-spread`).click(function(){
    $(this).toggleText(`★`, `●`);
    count_fs++;
    count_fs%2==1
    ? $(`details`).prop(`open`, false) 
    : ($(`details`).prop(`open`, true) , count_fs=0)
})




$(document).keyup( function(e){ 
    if(e.ctrlKey && e.shiftKey && (e.key=='F' || e.key=='f')){ 
        $(`.detail-fold-spread`).click()
    }
})

$(`.list-title`).click(function(){
    $(this).toggleText(`▶`, `◀`);
    $(`.ul ul:not(:has(ul))`).toggle();
})





$(`.horizontal-vertical`).click(function(){
    $(`.horizontal-toggle`).click();
    $(`.horizontal-toggle-ul`).click();
    $(`.horizontal-toggle-parent`).click();
})

$(`.diagonal-top-bottom`).click(function(){
    $(`.diagonal-toggle`).click();
})

$(`.expand-shrink`).click(function(){
    $(`.expand-toggle`).click();
})



$(document).keyup( function(e){ 
    if(e.ctrlKey && e.altKey && (e.key=='Q' || e.key=='q')){ 
       $(`.detail-fold-spread`).click()
    }

    if(e.ctrlKey && e.altKey && (e.key=='W' || e.key=='w')){ 
        $(`.horizontal-vertical`).click();
    }

    if(e.ctrlKey && e.altKey && (e.key=='E' || e.key=='e')){ 
        $(`.diagonal-top-bottom`).click();
    }

    if(e.ctrlKey && e.altKey && (e.key=='R' || e.key=='r')){ 
        $(`.expand-shrink`).click();
    }
})