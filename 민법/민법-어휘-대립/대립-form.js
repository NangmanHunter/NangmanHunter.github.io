function 대립_form(){

    $(`.details`).each(function(){
        const d=$(this);
        const div=d  .children(`div.div-13`);
        const u  =div.children().eq(0);
        const u_ =div.children().eq(1);
        const u__=div.children().eq(2);
        const l  =u  .children();

        
        const f     = window.location.pathname.split('/').pop();
        const f_    = decodeURIComponent(f);
        const f__   = f_.replace(`.html`,"");

        const f___  = f__.replaceAll(`-`,`🥊`);
        const g     = f__.split(`-`);
        const w     = f___;


        d.addClass(`details-wrap`);
        d.prepend(`<summary class="h5-0">${w}</summary>`);

        u.prepend(`<li>${g[0]}</li>`);
        u_.prepend(`<li>${g[1]}</li>`);
        u__.prepend(`<li>${g[2]}</li>`);


        u_.before(`<ul></ul>`);
        u__.before(`<ul></ul>`);

        const ul_=u_.prev();
        for(let i=0; i<l.length+1; i++){
            ul_.append(`<li>🥊</li>`);
        }
        const ul__=u__.prev();
        for(let i=0; i<l.length+1; i++){
            ul__.append(`<li>🥊</li>`);
        }





    })



}
대립_form();