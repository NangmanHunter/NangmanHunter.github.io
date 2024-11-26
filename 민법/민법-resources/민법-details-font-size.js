function details_fontsize(){
    $(`details>summary`).each(function(){
        const t=$(this).text();
        const d=$(this).parent();
        (t.includes('🔤') 
        || t.includes('🧊') 
        || t.includes('📌') 
        || t.includes('🥊') 
        || t.includes('🚥') 
        )
        ? d.addClass(`details-word-12`) : d.addClass(`details-word`);
    })
}
details_fontsize();


