async function run() {

    $(`body`).append(` <script src="민법-resources/html-module.js"></script>`);
    await new Promise(resolve => setTimeout(resolve, 100)); 
    $(`body`).append(` <script src="민법-resources/html-module-2.js"></script>`);
    await new Promise(resolve => setTimeout(resolve, 100)); 
    $(`body`).append(`<script src="민법-resources/html-module-어휘.js"></script>`);
    $(`body`).append(`<script src="민법-resources/a.js"></script>`);

    // await new Promise(resolve => setTimeout(resolve, 100)); 


}
run(); 
