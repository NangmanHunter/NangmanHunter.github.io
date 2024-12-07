function 대립_form(){

    $(`[class^='대립']`).each(function(){
        const d=$(this).children();
        const div=d.children(`div.div-13`);
        const u=div.children().eq(0);
        const l=u  .children();


        const c  =$(this).attr("class");
        const c_ =c.replace(/\s(.*)/,"");
        const c__=c_.replace(/^대립-*/,"");
        const c___=c__.replace(`-`,`🥊`);
        const w  =c___;


        d.addClass(`details-wrap`);
        d.prepend(`<summary class="h6-0">${w}</summary>`);

        u.after(`<ul></ul>`);
        const ul=u.next();
        for(let i=0; i<l.length; i++){
            ul.append(`<li>🥊</li>`);
        }
    
    })

}
대립_form();