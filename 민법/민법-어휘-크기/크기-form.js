function 크기_form(){

    $(`.details`).each(function(){
        const d=$(this);
        
        const f      = window.location.pathname.split('/').pop();
        const f_     = decodeURIComponent(f);
        const f__    = f_.replace(`.html`,"");
        
        const f___   = f__.replaceAll(`-`,`🚥`);
        const f____  = `${f___}🚀`;
        const w      = f____;
        

        d.addClass(`details-wrap`);
        d.prepend(`<summary class="h6-0">${w}</summary>`);


    
    })

}
크기_form();