//  document.body
//     document.childNodes
//     document.body.childNodes
//     document.body.children
//     document.body.firstElementChild
//     document.body.lastElementChild
//     document.body.firstElementChild.childNodes
//     document.body.firstElementChild.children


//     document.body.firstElementChild.children[0]
//     /* <div class=​"box">​box 1​</div>​ */
//     document.body.firstElementChild.children[1]
//     //<div class=​"box">​box 2​</div>​
//     document.body.firstElementChild.children[2]
//     //<div class=​"box">​box 3​</div>​
//     document.body.firstElementChild.children[3]
//     //<div class=​"box">​box 4​</div>​
//     document.body.firstElementChild.children[3].nextElementSibling
//     //<div class=​"box">​box 5​</div>​
//     ocument.body.firstElementChild.children[3].previousElementSibling
//     //<div class=​"box">​box 3​</div>
    






/////////////////////////////////////////////////////////////////////



let cont=document.body.childNodes[1]
cont.lastElementChild.previousElementSibling.style.backgroundColor="yellow"
cont.lastElementChild.previousElementSibling.style.color="red"
cont.lastElementChild.previousElementSibling.style.fontSize="20px"
cont.lastElementChild.previousElementSibling.style.fontWeight="bold"
cont.lastElementChild.previousElementSibling.style.textAlign="center"
cont.lastElementChild.previousElementSibling.innerText="This is box 4"
cont.lastElementChild.previousElementSibling.style.textDecoration="underline"   
cont.lastElementChild.previousElementSibling.style.textTransform="uppercase"
cont.lastElementChild.previousElementSibling.style.border="2px solid black"
cont.lastElementChild.previousElementSibling.style.padding="10px"
cont.lastElementChild.previousElementSibling.style.margin="10px"
cont.lastElementChild.previousElementSibling.style.width="100px"
cont.lastElementChild.previousElementSibling.style.height="100px"
cont.lastElementChild.previousElementSibling.style.boxSizing="border-box"
cont.lastElementChild.previousElementSibling.style.display="flex"
cont.lastElementChild.previousElementSibling.style.justifyContent="center"


