


$(document).on(`click`, `.horizontal-toggle`, function(){
    $(this).toggleText(`↕`,`↔`);
    $(this).parent(`li`).children(`ul`).toggleClass(`ul-flex`);
})
$(document).on(`click`, `.horizontal-toggle-ul`, function(){
    $(this).toggleText(`↕`,`↔`);
    $(this).parent('ul').toggleClass(`ul-flex`);
})
$(document).on(`click`, `.hor-toggle-ul`, function(){
    $(this).toggleText(`↕`,`↔`);
    $(this).parents('ul').toggleClass(`ul-flex`);
})
$(document).on(`click`, `.horizontal-toggle-parent`, function(){
    $(this).toggleText(`↕`,`↔`);
    $(this).parent().toggleClass(`ul-flex`);
})

$(document).on(`click`, `.diagonal-toggle`, function(){
    $(this).toggleText(`↖`,`↘`);
    $(this).parent(`li`)
        .children(`ul`)
        .children(`li`)
        .children(`ul`).toggle();
})
$(document).on(`click`, `.diagonal-toggle-ul`, function(){
    $(this).toggleText(`↖`,`↘`);
    $(this).parent(`li`)
        .parent(`ul`)
        .children(`li`)
        .children(`ul`).toggle();
})

$(document).on(`click`, `.expand-toggle`, function(){
    $(this).toggleText(`◀`,`▶`);
    $(this).parents(`ul`).find(`.expand`).toggle();
})
$(document).on(`click`, `.expand-o-toggle`, function(){
    $(this).toggleText(`ㆍ`,`o`);
    $(this).parents(`ul`).find(`.expand-o`).toggle();
})









$(`.ul-layer`).each(function(){
    let ly=$(this);
    const ly_t=$(this).children('li').length-1;
    for(let i=0; i<ly_t; i++){
        
        const h=ly.html();
        const h_=h.replace(/[\w\s<=">/가-힣\W]*?<li>[\w\s<=">/가-힣]*?<\/li>/,``);

        const f=ly.children('li').first();
        f.append(`<ul>${h_}</ul>`);
    
        const o=ly.children('li').not(`:first`);
        o.remove();
        
        ly=f.children('ul');
    }
})
$(document).on(`click`, `.layer-margin-toggle`, function(){
    $(this).toggleText(`👈`,`👉`);
    $(this).parents(`ul`).toggleClass(`ul-layer-margin`);
})



$(document).on(`click`, `.rb-toggle`, function(){
    $(this).toggleText(`○`,`●`);
    $(this).parents(`ul`).find(`.r-toggle`).toggleClass(`r`);
    $(this).parents(`ul`).find(`.b-toggle`).toggleClass(`b`);
})

$(document).on(`click`, `.disc-toggle`, function(){
    $(this).toggleText(`1`,`●`);
    $(this).parents(`.ul-layer-margin`).toggleClass(`disc`);
    $(this).parents(`ul`).find(`.ul-layer-margin`).toggleClass(`disc`);
})



function div_level(){
    $(`.div-level-reverse`).each(function(){
        $(this).children('ul').eq(0).addClass(`ul-level`);
        $(this).children('ul').eq(1).addClass(`ul-level-reverse`);
    })

    $(`.div-level`).each(function(){
        $(this).children('ul:nth-child(2n-1)').addClass(`ul-level`);
        $(this).children('ul:nth-child(2n)').addClass(`ul-level-reverse`);
    })
}
div_level();


