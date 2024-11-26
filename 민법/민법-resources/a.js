$(`head`).append(`<link rel="stylesheet" href="민법-resources/a.css">`)

$(`.a-casenote`).each(function(){
    const a=$(this).text();
    $(this).attr('href', `https://casenote.kr/대법원/${a}`)
            .attr(`target`, `_blank`)
    ;
})


$(`.a-c`).each(function(){
    const a=$(this).text();
    $(this).attr('href', `https://casenote.kr/대법원/${a}`)
            .attr(`target`, `_blank`)
    ;
})