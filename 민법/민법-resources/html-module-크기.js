
$(`[class^='크기']`).addClass(`inline-block`);
$(`[class^='크기']`).each(function(){
    const t=$(this).attr(`class`);
    const t_=t.replace(/\s(.*)/,"");
    const t__=t_.replace(/^크기-*/,"");

    $(this).load(`민법-어휘-크기/${t__}.html .details`);
})


