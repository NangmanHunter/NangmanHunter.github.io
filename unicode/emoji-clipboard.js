$(`head`).append(`<link rel="stylesheet" href="emoji-clipboard.css">`)

$(`.code>li`).click(function(e){
    const t=$(this).text();
    navigator.clipboard.writeText(t)
    .then(()   => { 

            $(this).append(`<span class="copy" style="top:0; left:0;">
                ${t} Copy❣️
            </span>`)
            setTimeout(() => {$(`.copy`).addClass("fade-out");}, 100); 
            setTimeout(() => {$(`.copy`).remove();            }, 600);

        })
    .catch(err => { console.error("Failed to copy: ", err); });

})