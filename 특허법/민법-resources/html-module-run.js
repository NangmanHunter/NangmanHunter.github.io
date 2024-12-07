function load_1(){
    $(`body`).append(` <script src="민법-resources/html-module.js"></script>`);
 
}
function load_2(){
    $(`body`).append(` <script src="민법-resources/html-module-2.js"></script>`);
}


function general_1(){
    $(`body`).append(`
        <script src="민법-resources/html-module-어휘.js"></script>
        <script src="민법-resources/html-module-대립.js"></script>
        <script src="민법-resources/html-module-크기.js"></script>
        <script src="민법-resources/html-module-포함.js"></script>
        
        <script src="민법-resources/a.js"></script>
        
    `);
 
}
function general_2(){
    $(`body`).append(`
        <script src="민법-resources/민법-details.js"></script>
        

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


/* 
html -> 어휘 -> 어휘대립
html -> 어휘 -> 대립
*/
