$(`.html-module`).each(function(){
    const n=$(this).attr(`class`).replace(`html-module `, "");
    const t=`.details`;
    const f = window.location.pathname.split('/').pop();
    const f_  = decodeURIComponent(f);
    const f__  = f_.replace(`.html`,"");


    $(this).load(`${f__}-${n}.html ${t}`, function(){

        details_open();
        details_fontsize();


        div_level();
    });



    $(this).load(`${f__}${n}.html ${t}`, function(){

        details_open();
        details_fontsize();


        div_level();
    });





})



