(function(){
    $(`.p-c`).each(function(){
        const h=$(this).html();
        const s=h.split("\n");
        s[1]=s[1].replace(/\d{2,}[가-힣]\d{2,}/, 
            a=>`<a class="a-c">${a}</a>`);;
        $(this).html(s.join(`\n`));
    })

})();
