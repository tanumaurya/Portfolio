function init(){
    let topRow = document.querySelector(".top_row");
    let leftCol = document.querySelector(".left_col");
    let grid = document.querySelector(".grid");
    //left column k cells
    for(let i=1 ; i<= 100 ; i++){
    //create a cell
    let div = document.createElement("div");
    div.setAttribute("class", "cell");
    div.textContent = i;
    leftCol.appendChild(div);
    }

    // top row k cells
    for(let i=1 ; i<= 26 ; i++){
    //create a cell
    let div = document.createElement("div");
    div.setAttribute("class", "cell");
    div.textContent = String.fromCharCode(i + 64);
    topRow.appendChild(div);
     }

     // grid
    for(let i=0 ; i< 100 ; i++){
    let row = document.createElement("div");
    row.setAttribute("class", "row");
    for(let j=0 ; j< 26 ; j++){
        //create a cell
        let col = document.createElement("div");
        col.setAttribute("class", "cell");
        // col.textContent = `${String.fromCharCode(j + 64)} - ${i}`;
        // col.textContent = `${i} - ${j}`;
        col.setAttribute("contenteditable", "true");
        // we have set these two attributes to identify each cell
        col.setAttribute("rid", i);
        col.setAttribute("cid", j);
        row.appendChild(col);
    }
    grid.appendChild(row);
    }
}
init();

// address bar implementation

let cells = document.querySelectorAll(".grid .cell");
let addressBar = document.querySelector(".address_bar");
// 1. cell eventlistener -> on click
for(let i=0; i< cells.length; i++){
    // 2. when a cell is clicked -> element
    cells[i].addEventListener("click", function (e){
        let cCell =e.currentTarget;
        console.log(cCell);
        // 3.get rid, cid -> address me convert
        let rid = Number(cCell.getAttribute("rid"));
        let cid = Number(cCell.getAttribute("cid"));
        let address = String.fromCharCode(cid + 65) + (rid + 1);
        console.log(address);
        //  4.put it into address bar
        addressBar.value = address;
    })
}


function setMenuBar(rid, cid) {
    let cellObj = db[rid][cid];
    // boldButton
    if (cellObj.isBold) {
        boldButton.classList.add("selected");
    } else {
        boldButton.classList.remove("selected");
    }
    // italicButton
    if (cellObj.isItalic) {
        italicButton.classList.add("selected");
    } else {
        italicButton.classList.remove("selected");
    }
    // underlineButton
    if (cellObj.isUnderline) {
        underlineButton.classList.add("selected");
    } else {
        underlineButton.classList.remove("selected");
    }
    // font size
    fontSizeSelector.value = cellObj.fontSize;
    // font family
    fontFamilySelector.value = cellObj.fontFamily;
    // ui changes 
    // remove selected class from every elem 
    for (let j = 0; j < alignmentBtns.length; j++) {
        alignmentBtns[j].classList.remove("selected");
    }
    for (let j = 0; j < alignmentBtns.length; j++) {
        let iscurrent = alignmentBtns[j].classList[2];
        if (iscurrent == cellObj.cAlignment) {
            alignmentBtns[j].classList.add("selected");
        }
    }
    // set formula in sync
    let formula = cellObj.formula;
    formulaBar.value = formula
}