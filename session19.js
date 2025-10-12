//Alert
// const showInfo = () => {
//     alert('New Undergraduate Scholarship Program!')
// }
// showInfo();


//Confirm
// const confirmInfo = () => {
//     confirm('Do you want to save the changes.')
// }
// confirmInfo();


//Prompt
// function getInput() {
//     let userName= prompt('Enter your name');
//     if (userName) {
        // alert(`Welcome ${userName}`);
//     }
// }
// getInput();


const changeColor = () => {
    let section_one = document.querySelector("#one");
    let para = section_one.querySelector("p");
    para.style.color = "white";
    para.style.backgroundColor = "black";
    para.style.fontSize = "50px";
}