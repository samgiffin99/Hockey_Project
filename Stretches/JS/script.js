let stretchList = {1:{"details":"lunges targets your hamstrings, calves and quads"},
            2:{"details":"sumo squats targets your hamstrings, inner thighs and quads"},
            3:{"details":"This stretch details"},
            4:{"details":"This stretch details"}
            }

let details = document.getElementById("details")

function stretchDetails(item){
details.innerHTML = stretchList[item].details
}


