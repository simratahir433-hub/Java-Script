function getInput() {
    let userEmail= prompt('Enter your Email');
    
    const showInfo = () => {
        alert(`${userEmail}`);
}
showInfo();
}
getInput();

const changeStyle = () => {
    let section_box = document.querySelector("#box");
    let para = section_box.querySelector("p");
    para.style.width = "500px";
    para.style.height = "100px";
    para.style.fontSize = "40px";
    para.style.color = "yellow";
    para.style.backgroundColor = "purple";
}