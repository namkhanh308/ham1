let sp = ["Sony Xperia","Samsung Galaxy"];
let d;
display();
function add_item(){
    let item = document.getElementById("input_add").value;
    sp.push(item);
    alert("Thêm thành công")
    display();
}
function display(){
    let tong = document.getElementById("tong");
    let c = `
    <tr>
        <th><span>Product Name</span></th>
        <th colspan="2"></th>
        <th><span>${sp.length} product</span></th>
    </tr>
    `;
    for (let i = 0; i < sp.length; i++) {
        c+=`
    <tr>
        <td><span id = "name_item">${sp[i]}</span></td>
        <td><button onclick="Edit(${i})" id = "btn_edit">Edit</button></td>
        <td><button id = "btn_delete" onclick="Delete(${i})">Delete</button></td>  
    </tr>`
    }
    tong.innerHTML = c;
}

function Edit(e){
    let sua = document.getElementById("sua")
    sua.style.display = "block";
    d = e;
}
function insert_item(){
        let input_insert = document.getElementById("input_insert").value;
        sp[d] = input_insert;
        alert("Sửa thành công")
        d = undefined;
        display();
        let sua = document.getElementById("sua")
        sua.style.display = "none";
}
function Delete(e){
    sp.splice(e,1);
    alert("Xóa thành công")
    display();
}

