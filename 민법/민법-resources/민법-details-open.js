

// $(`details:not(:has(summary:contains('🔤')))`).prop("open", true);
function details_open(){
    $(`details:not(:has(>summary>ul, >summary:contains('📌') , >summary:contains('🥊')  , >summary:contains('▶️') )    , :has(>summary>div)     )`).prop("open", true);
}
details_open();





