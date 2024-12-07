(function(){
    const s=`../`;

    $(`[class^='어휘']`).addClass(`inline-block`);
    $(`[class^='어휘']`).each(function(){
        const t=$(this).attr(`class`);
        const t_=t.replace(/\s(.*)/,"");
        const t__=t_.replace(/^어휘-*/,"");

        $(this).load(`${s}민법-어휘/어휘-${t__}.html .details`);


    })





    $(`[class^='대립']`).addClass(`inline-block`);
    $(`[class^='대립']`).each(function(){
        const t=$(this).attr(`class`);
        const t_=t.replace(/\s(.*)/,"");
        const t__=t_.replace(/^대립-*/,"");

        $(this).load(`${s}민법-어휘-대립/${t__}.html .details`);
    })





    $(`[class^='크기']`).addClass(`inline-block`);
    $(`[class^='크기']`).each(function(){
        const t=$(this).attr(`class`);
        const t_=t.replace(/\s(.*)/,"");
        const t__=t_.replace(/^크기-*/,"");

        $(this).load(`${s}민법-어휘-크기/${t__}.html .details`);
    })





    $(`[class^='포함']`).addClass(`inline-block`);
    $(`[class^='포함']`).each(function(){
        const t=$(this).attr(`class`);
        const t_=t.replace(/\s(.*)/,"");
        const t__=t_.replace(/^포함-*/,"");

        $(this).load(`${s}민법-어휘-포함/${t__}.html .details`);
    })


})();


