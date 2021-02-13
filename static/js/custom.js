 // get input element
let filterProduct = document.getElementById('filterProduct');
// add event listener
filterProduct.addEventListener('keyup', filterNames);

function filterNames(){
    let filterValue = 
    document.getElementById('filterProduct').value.toUpperCase();
    
    //get productlist
    let list = document.getElementById('products');
    //get product items
    let item = list.querySelectorAll('div.product-item');


    //loop through prodoct-item list
    for (let i = 0; i < item.length;i++){
        let a = item[i].getElementsByTagName('a')[0];
        // if matched
        if(a.innerHTML.toUpperCase().indexOf(filterValue)>
         -1){
            
            item[i].style.display = '';
         }else{
            item[i].style.display = 'none'
            ;
         }
    }
}
