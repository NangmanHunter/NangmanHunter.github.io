
$(`[class^='대립']`).addClass(`inline-block`);
$(`[class^='대립']`).each(function(){
    const t=$(this).attr(`class`);
    const t_=t.replace(/\s(.*)/,"");
    const t__=t_.replace(/^대립-*/,"");

    $(this).load(`민법-어휘-대립/${t__}.html .details`);
})


