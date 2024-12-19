(function(){
    $(`.details`).each(function(){
        const d=$(this);

        const f     = window.location.pathname.split('/').pop();
        const f_    = decodeURIComponent(f);
        const f__   = f_.replace(`.html`,"");

        const f___  = f__.replaceAll(`-`,`▶️`);
        const g     = f__.split(`-`);
        const w     = f___;

        d.addClass(`details-wrap`);
        d.prepend(`<summary class="h5-0">${w}</summary>`);

    })
})();
