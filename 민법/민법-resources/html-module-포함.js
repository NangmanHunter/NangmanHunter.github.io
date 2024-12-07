
$(`[class^='포함']`).addClass(`inline-block`);
$(`[class^='포함']`).each(function(){
    const t=$(this).attr(`class`);
    const t_=t.replace(/\s(.*)/,"");
    const t__=t_.replace(/^포함-*/,"");

    $(this).load(`민법-어휘-포함/${t__}.html .details`);
})


