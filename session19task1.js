function getInput() {
    let userEmail= prompt('Enter your Email');
    
    const showInfo = () => {
        alert(`${userEmail}`);
}
showInfo();
}
getInput();

const changeStyle = () => {
    let section_one = document.querySelector("#one");
    let para = section_one.querySelector("p");
    para.style.width = "500px";
    para.style.height = "100px";
    para.style.fontSize = "40px";
    para.style.color = "white";
    para.style.backgroundColor = "black";
}