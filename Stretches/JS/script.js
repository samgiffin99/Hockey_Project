let stretchList = {"Lunges":{"details":"lunges targets your hamstrings, calves and quads"},
            "Sumo squats":{"details":"sumo squats targets your hamstrings, inner thighs and quads"},
            "High knees":{"details":"This stretch details"},
            "Shoo the chickens":{"details":"This stretch details"},
            "item":{"details":"Itme details clicked"}
            }

let main =  document.getElementById('main')
let list =  document.getElementById('list')
let details =  document.getElementById('details')
let item =  document.getElementById('item')

for (let stretch in stretchList) {
    let copiedItem = item.cloneNode(true)
    copiedItem.innerHTML = `<p>Stretch: ${stretch}</p>`;
    copiedItem.id = `${stretch}`
    list.appendChild(copiedItem)
}
function detailsClick(item){
    details.innerHTML= `<p>Stretch: ${stretchList[item].details}</p>`;
}