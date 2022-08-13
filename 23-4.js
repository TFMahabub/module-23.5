
gadgets = [
    {name: "iphone", price: 38000},
    {name: "xiami", price: 23000},
    {name: "macbook air", price: 119000},
    {name: "one plus phone", price: 30000},
    {name: "one plusvz Phone", price: 30000},
    {name: "one pluszxf Phone", price: 30000}
];

function matchItems(gadgets, search){
    let matchgadgets = [];
    for(gadget of gadgets){
        if(gadget.name.toLowerCase().includes(search.toLowerCase())){
            matchgadgets.push(gadget);
        }
    }
    return matchgadgets;
}
result = matchItems(gadgets, "phone");
console.log(result);




