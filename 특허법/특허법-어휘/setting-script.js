function load_fn(){

    $(`body`).append(` <script src="test-load.js"></script>`);
}


function general_fn(){
    
    $(`body`).append(` 
        
        <script src="민법-details-어휘.js"></script>
        <script src="../민법-resources/민법-details-font-size.js"></script>
        <script src="../민법-resources/민법-details-word.js"></script>
    `);
    $(`details`).prop(`open`, true);
}


async function run() {

    load_fn();
    await new Promise(resolve => setTimeout(resolve, 100)); 
    general_fn();


}
run(); 
