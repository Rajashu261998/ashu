var data=JSON.parse(localStorage.getItem("products"))

data.map(function(el,index){
    var box=document.createElement("div")

    var img=document.createElement("img")
    img.src=el.image

    var type=document.createElement("p")
    type.innerText=el.type

    var desc=document.createElement("p")
    desc.innerText=el.desc

    var price=document.createElement("p")
    price.innerText=el.price

    var butn=document.createElement("button")
    butn.innerText="Remove"
    
    butn.addEventListener("click",function()
    {
        removed(el,index)
    })
    box.append(img,type,price,butn)
    document.getElementById("all_products").append(box)


    function removed(el,index)
    {
        data.splice(index,1)

        localStorage.setItem("products",JSON.stringify(data));
        window.location.reload()
    }
})
