$(`head`).append(`<link rel="stylesheet" href="민법-resources/민법-details.css">`);

// $(`details:not(:has(summary:contains('🔤')))`).prop("open", true);
$(`details`).prop("open", true);



function details_fontsize(){
    $(`details>summary`).each(function(){
        $(this).text() =='🔤'||'🧊' ? $(this).parent().addClass(`detail-word`) : ``;
    })
}
details_fontsize();


