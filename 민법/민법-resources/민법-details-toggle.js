$(`.html-module-toggle`).click(function(){

    const details=$(this).parent().siblings(`.html-module`).children(`details`);
    const open=details.prop(`open`);
    details.prop(`open`,!open);

})