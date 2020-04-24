

var palList = document.getElementById("list1")






function isPalindrome(form) {
    let reversed = [];
    var formInput = form.inputbox.value;

    for (let i = formInput.length; i>0; i--) {
        reversed.push(formInput[i-1]);
    }
    if (formInput === reversed.join('')) {
        console.log('true')
        let yesList = document.querySelector("#list1")
        var node = document.createElement("LI")
        var textNode = document.createTextNode(formInput)
        node.appendChild(textNode)
        yesList.appendChild(node)


        return true
    } else {
        

        let noList = document.querySelector("#list2")
        var node = document.createElement("LI")
        var textNode = document.createTextNode(formInput)
        node.appendChild(textNode)
        noList.appendChild(node)



        return false
    }
}
















































// function yesPalindrome(string){
//     console.log('it ran')
// let palList = document.getElementById("list1")
// let li = document.createElement("li")

// palList.appendChild(document.createTextNode(string))

//     return true
// }
// function noPalindrome(){
//  //HTML DOM here
//     return false
// }






