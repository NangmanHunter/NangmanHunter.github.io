
$(`[class^='어휘']`).addClass(`inline-block`);
$(`[class^='어휘']`).each(function(){
    const t=$(this).attr(`class`);
    const t_=t.replace(/\s(.*)/,"");
    const t__=t_.replace(/^어휘-*/,"");

    $(this).load(`민법-어휘/어휘-${t__}.html .details`);



    



})


