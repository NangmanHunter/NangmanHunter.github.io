$(`.html-module .html-module`).each(function(){
    
    const f = window.location.pathname.split('/').pop();
    const f_  = decodeURIComponent(f);
    const f__  = f_.replace(`.html`,"");


    const n$=$(this).parents(`.html-module`).attr(`class`).replace(`html-module `, "");
    const n=$(this).attr(`class`).replace(`html-module `, "");

    
    const t=`.details`;




    $(`.${n}`).load(`${f__}-${n$}-${n}.html ${t}`, function(){

        details_open();
        details_fontsize();


        div_level();
    });

})



