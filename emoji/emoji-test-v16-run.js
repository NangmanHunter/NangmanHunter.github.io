function load(){
    $(`body`).append(` 
        <script src="emoji-form.js"></script>
        <script src="emoji-test-v16-load.js"></script>
    `);
 
}


function js(){
    $(`body`).append(`
        <script src="emoji-clipboard.js"></script>
        <script src="emoji-clipboard-box.js"></script>
        
    `);
 
}




async function run() {

    load();

    await new Promise(resolve => setTimeout(resolve, 100)); 
    js();
    
  

    


}
run(); 