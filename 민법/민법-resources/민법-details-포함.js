function 대립_form(){

    $(`[class^='포함']`).each(function(){
        const d=$(this).children();
        const div=d.children(`div.div-13`);
        const u=div.children().eq(0);
        const u_=div.children().eq(1);
        const u__=div.children().eq(2);
        const l=u  .children();


        const c  =$(this).attr("class");
        const c_ =c.replace(/\s(.*)/,"");
        const c__=c_.replace(/^포함-*/,"");
        const c___=c__.replace(`-`,`▶️`);
        const w  =c___;


        d.addClass(`details-wrap`);
        d.prepend(`<summary class="h5-0">${w}</summary>`);


    
    })

}
대립_form();