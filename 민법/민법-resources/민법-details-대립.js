function 대립_form(){

    $(`[class^='대립']`).each(function(){
        const d=$(this).children();
        const div=d.children(`div.div-13`);
        const u=div.children().eq(0);
        const u_=div.children().eq(1);
        const u__=div.children().eq(2);
        const l=u  .children();


        const c  =$(this).attr("class");
        const c_ =c.replace(/\s(.*)/,"");
        const c__=c_.replace(/^대립-*/,"");
        const c___=c__.replace(`-`,`🥊`);
        const w  =c___;


        d.addClass(`details-wrap`);
        d.prepend(`<summary class="h6-0">${w}</summary>`);

        u_.before(`<ul></ul>`);
        u__.before(`<ul></ul>`);

        const ul_=u_.prev();
        for(let i=0; i<l.length; i++){
            ul_.append(`<li>🥊</li>`);
        }
        const ul__=u__.prev();
        for(let i=0; i<l.length; i++){
            ul__.append(`<li>🥊</li>`);
        }
    
    })

}
대립_form();