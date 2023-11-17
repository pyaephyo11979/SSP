let temeChangerBtn = document.querySelector("#dNBtn");
let display= document.querySelector("#pDisplay");
let catBtns=document.querySelectorAll(".cate");
let sinput=document.querySelector("#sInput");
let sBtn=document.querySelector("#sBtn")
temeChangerBtn.addEventListener("click", () => {
    document.querySelector("#tsb").classList.toggle("fa-toggle-off");
    document.querySelector("#tsb").classList.toggle("fa-toggle-on");
    if(document.querySelector("#tsb").classList.contains("fa-toggle-on")){
        document.querySelector("body").setAttribute("data-bs-theme", "dark");
    }else{
        document.querySelector("body").setAttribute("data-bs-theme", "light");
    }
});
fetch('https://fakestoreapi.com/products').then(res=>res.json())
.then(data=>{
    let products=data;
    products.forEach((product)=>{
        display.innerHTML+=`
        <div class="card p-2 m-1 item">
            <div class="card-body">
                <h5 class="card-title fw-bold pName">${product.title}</h5>
                <img src="${product.image}" class="card-img-top img-fluid" style="width:40%;" alt="...">
                <p class="p-dis">${product.description}</p>
                <p class="card-text"><small class="text-muted">${product.category}</small></p>
            </div>
            <div class="card-footer">
               <a type="button" class="btn btn-info">AddToCart</a>
            </div>
        </div>
        `
    })
    sinput.addEventListener('keyup',(e)=>{
        let text=e.target.value;
        let sitem=text.toLowerCase();
        let items=document.querySelectorAll('.pName');
        items.forEach((item)=>{
            let givenItem=item.innerHTML.toLowerCase();
            if(givenItem.includes(sitem)){
                item.parentElement.parentElement.style.display="block";
            }else{
                item.parentElement.parentElement.style.display="none";
            }
        })
    })
    //CategoryChoose
    catBtns.forEach((btn)=>{
        let cate=btn.innerHTML;
        let category=btn.innerHTML.toLowerCase();
        btn.addEventListener('click',()=>{
            if(cate==="AllCategories"){
        fetch('https://fakestoreapi.com/products').then(res=>res.json())
    .then(data=>{
        let pdts=data;
        pdts.forEach((pd)=>{
            display.innerHTML+=`
            <div class="card item m-1 p-2 " >
                <div class="card-body">
                    <h5 class="card-title pName fw-bold ">${pd.title}</h5>
                    <img src="${pd.image}" class="card-img-top img-fluid" style="width:40%;" alt="...">
                    <p class="p-dis">${pd.description}</p>
                    <p class="card-text"><small class="text-muted">${pd.category}</small></p>
                </div>
                <div class="card-footer">
                   <a type="button" class="btn btn-info">AddToCart</a>
                </div>
            </div>
            `
        })
    })
            }else{
                fetch(`https://fakestoreapi.com/products/category/${category}`).then(res=>res.json())
                .then(data=>{
                    let products=data;
                    products.forEach((product)=>{
                        display.innerHTML="";
                        display.innerHTML+=`
                        <div class="card item m-1 p-2 "  >
                            <div class="card-body">
                                <h5 class="card-title pName fw-bold ">${product.title}</h5>
                                <img src="${product.image}" class="card-img-top img-fluid" style="width:40%;" alt="...">
                                <p class="p-dis">${product.description}</p>
                                <p class="card-text"><small class="text-muted">${product.category}</small></p>
                            </div>
                            <div class="card-footer">
                               <a type="button" class="btn btn-info">AddToCart</a>
                            </div>
                        </div>
                        `
                    })
                })
            }
        })
    })

})
