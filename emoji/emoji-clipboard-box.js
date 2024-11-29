$(`head`).append(`<link rel="stylesheet" href="emoji-clipboard-box.css">`)


$(`.code>li`).click(function(e){
    const h=$(this).html();
    const t=h.replace(/<span[\s\S]*span>/,"");
    navigator.clipboard.writeText(t)
    .then(()   => { 
            $(`.clipboard-box-emoji`).append(`${t}`);

        })
    .catch(err => { console.error("Failed to copy: ", err); });

})

$(`.clipboard-copy`).click(function(){
    const t=$(`.clipboard-box-emoji`).text();
    console.log(t);


    navigator.clipboard.writeText(t)
    .then(()   => { 

            $(`.clipboard-box-emoji`).parent().append(`<span class="copy" style="top:0; left:0;">
                ${t} Copy❣️
            </span>`)
            setTimeout(() => {$(`.copy`).addClass("fade-out");}, 100); 
            setTimeout(() => {$(`.copy`).remove();            }, 600);


        })
    .catch(err => { console.error("Failed to copy: ", err); });
})

$(`.clipboard-reset`).click(function(){
    $(`.clipboard-box-emoji`).html("");
})