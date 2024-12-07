function 대립_form(){

    $(`.details`).each(function(){
        const d=$(this);
        const div=d.children(`div.div-13`);
        const u=div.children().eq(0);
        const l=u  .children();

        
        const f     = window.location.pathname.split('/').pop();
        const f_    = decodeURIComponent(f);
        const f__   = f_.replace(`.html`,"");

        const f___  = f__.replace(`-`,`🥊`);
        const w     = f___;
        

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