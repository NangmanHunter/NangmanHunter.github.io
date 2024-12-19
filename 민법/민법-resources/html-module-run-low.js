(function(){
    const s  =`../`
    const s_ =`${s}민법-resources`;
    const s__=`${s}..`;
    
    function load_1(){
        $(`head`).append(`
            <link rel="stylesheet" href="${s__}/resources/uds.css">
    
            
            <link rel="stylesheet" href="${s_}/a.css"> 
            <link rel="stylesheet" href="${s_}/btn-box.css" >
    
            <link rel="stylesheet" href="${s_}/ul-toggle.css">
            <link rel="stylesheet" href="${s_}/ul.css">
            <link rel="stylesheet" href="${s_}/ul-level.css">
            <link rel="stylesheet" href="${s_}/ul-disc.css">
    
            <link rel="stylesheet" href="${s_}/민법-common.css">
            <link rel="stylesheet" href="${s_}/민법-details.css">
            <link rel="stylesheet" href="${s_}/민법-details-color.css">
    
            <link rel="stylesheet" href="${s_}/div.css">
            <link rel="stylesheet" href="${s_}/div-flex.css">
            <link rel="stylesheet" href="${s_}/div-flex-focus.css">
            <link rel="stylesheet" href="${s_}/div-inline-flex.css">
            <link rel="stylesheet" href="${s_}/div-level.css">
            
            <link rel="stylesheet" href="${s_}/민법-provision.css">
            <link rel="stylesheet" href="${s_}/민법-color.css">
            <link rel="stylesheet" href="${s_}/민법-어휘ㆍ기출.css">
    
            <link rel="stylesheet" href="${s_}/pre.css">
            <link rel="stylesheet" href="${s_}/summary.css">
    
        `);
    
    
    
    
        $(`body`).append(` 
            <script src="${s__}/resources/udf.js"></script>
            <script src="${s__}/resources/udc.js"></script>
    
            <script src="${s_}/btn-box.js"></script>
            <script src="${s_}/div.js"></script>
            <script src="${s_}/ul-toggle.js"></script>
            <script src="${s_}/민법-common.js"></script>
            <script src="${s_}/html-module.js"></script>
    
    
        `);
     
    }
    function load_2(){
        $(`body`).append(` <script src="${s_}/html-module-2.js"></script>`);
    }
    
    
    function general_1(){
        $(`body`).append(`
            <script src="${s_}/html-module-어휘-low.js"></script>
           
            
            <script src="${s_}/p.js"></script>
            
        `);
     
    }
    function general_2(){
        $(`body`).append(`
    
            <script src="${s_}/민법-details-어휘.js"></script>
            <script src="${s_}/민법-details-대립.js"></script>
            <script src="${s_}/민법-details-크기.js"></script>
            <script src="${s_}/민법-details-포함.js"></script>
            
            <script src="${s_}/민법-details-open.js"></script>
            <script src="${s_}/민법-details-font-size.js"></script>
            <script src="${s_}/민법-details-toggle.js"></script>
            <script src="${s_}/민법-details-word.js"></script>
    
    
            
            <script src="${s_}/a.js"></script>
            <script src="${s_}/ul.js"></script>
        `);
     
    }
    
    
    
    async function run() {
    
        load_1();
    
        await new Promise(resolve => setTimeout(resolve, 100)); 
        load_2();
    
        await new Promise(resolve => setTimeout(resolve, 100)); 
        general_1();
        
        await new Promise(resolve => setTimeout(resolve, 100)); 
        general_2();
    
    
    }
    run(); 
    
})();

