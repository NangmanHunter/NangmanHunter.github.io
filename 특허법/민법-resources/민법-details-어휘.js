function 어휘_form(){

    $(`[class^='어휘']`).each(function(){
        const d=$(this).children();
        const s=d.children(`summary`);
        const u=d.children(`ul`).eq(0);

        const c  =$(this).attr("class");
        const c_ =c.replace(/\s(.*)/,"");
        const c__=c_.replace(/^어휘-*/,"");
        const w  =c__;

        d.addClass(`details-wrap`);
        u.addClass(`ul-wrap`);
        d.prepend(`<summary class="h5-0">📌${w}</summary>`);


        u.children(`li`).each(function(){
    
            $(this).text()==`${w}`? $(this).wrapInner(`<b class="word"></b>`) : "" ;
        })
    
    })

}
어휘_form();