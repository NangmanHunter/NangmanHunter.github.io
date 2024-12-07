function details_fontsize(){
    $(`details>summary`).each(function(){
        const t=$(this).text();
        const d=$(this).parent();
        const c=$(this).children();
        (t.includes('🔤') 
        || t.includes('🧊') 
        || t.includes('📌') 
        || t.includes('🥊') 
        || t.includes('➡️') 
        || t.includes('🚥') 
        || c.is(`ul`)
        )
        ? d.addClass(`details-word-12`) : d.addClass(`details-font`);
    })
}
details_fontsize();


