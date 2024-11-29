function 어휘_form(){

    $(`.details-어휘`).each(function(){
        $(this).addClass(`details-wrap`);
    
        const f = window.location.pathname.split('/').pop();
        const f_  = decodeURIComponent(f);
        const f__  = f_.replace(`.html`,"");
        const f___  = f__.replace(`어휘-`,"");
        const w  = f___;
    
    
        $(this).children(`summary`).text(`📌${w}`);
        const ul=$(this).children(`ul`).eq(0)
        ul.addClass(`ul-wrap`);
        ul.children(`li`).each(function(){
    
            $(this).text()==`${w}`? $(this).wrapInner(`<b class="word"></b>`) : "" ;
        })
    
    })

}
어휘_form();