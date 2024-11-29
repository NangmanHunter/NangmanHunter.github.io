function details_word(){

    $(`.details-word`).each(function(){
        $(this).addClass(`details-wrap`);
    
        const t=$(this).children(`summary`).text();
        const t_=t.replace("📌","");
        const w=t_;

        const ul=$(this).children(`ul`).eq(0)
        ul.addClass(`ul-wrap`);
        ul.children(`li`).each(function(){
            $(this).text()==`${w}`? $(this).wrapInner(`<b class="word"></b>`) : "" ;
        })
    
    })

}
details_word();