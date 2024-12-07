function 어휘_form(){

    $(`.details`).each(function(){
        const d=$(this);
        const u=$(this).children(`ul`).eq(0);
        
        
        const f     = window.location.pathname.split('/').pop();
        const f_    = decodeURIComponent(f);
        const f__   = f_.replace(`.html`,"");
        const f___  = f__.replace(`어휘-`,"");
        const w     = f___;
        

        d.addClass(`details-wrap`);
        u.addClass(`ul-wrap`);
        d.prepend(`<summary class="h5-0">📌${w}</summary>`);
    

        u.children(`li`).each(function(){
    
            $(this).text()==`${w}`? $(this).wrapInner(`<b class="word"></b>`) : "" ;
        })
    
    })

}
어휘_form();