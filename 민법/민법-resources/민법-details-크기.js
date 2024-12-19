function 크기_form(){

    $(`[class^='크기']`).each(function(){
        const d=$(this).children();

        const c      =$(this).attr("class");
        const c_     =c.replace(/\s(.*)/,"");
        const c__    =c_.replace(/^크기-*/,"");
        const c___   =c__.replaceAll(`-`,`🚥`);
        const c____  =`${c___}🚀`;
        const w      =c____;


        d.addClass(`details-wrap`);
        d.prepend(`<summary class="h5-0">${w}</summary>`);

    
    })

}
크기_form();