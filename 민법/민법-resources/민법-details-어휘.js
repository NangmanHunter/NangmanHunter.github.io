function 어휘_form(){

    $(`.details-어휘`).each(function(){
        $(this).addClass(`details-wrap`);

        const c=$(this).parent().attr("class");
        const c_=c.replace(/\s(.*)/,"");
        const c__=c_.replace(/^어휘-*/,"");
        const w  = c__;
    
    
        $(this).children(`summary`).text(`📌${w}`);
        const ul=$(this).children(`ul`).eq(0)
        ul.addClass(`ul-wrap`);
        ul.children(`li`).each(function(){
    
            $(this).text()==`${w}`? $(this).wrapInner(`<b class="word"></b>`) : "" ;
        })
    
    })

}
어휘_form();