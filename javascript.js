const form = document.getElementById('task-form')

form.addEventListener('submit', (e) => {
  e.preventDefault();
})


function add(){
    var list = document.form.list.value;
    var span = document.createElement("span");
    var para = document.createElement("p");
    var node = document.createTextNode(list);
    para.appendChild(node);
    span.appendChild(para);
    var button = document.createElement("button");
    button.setAttribute("onclick","remove(this)")
    var text = document.createTextNode("Delete");
    button.appendChild(text);
    span.appendChild(button);
    var element = document.getElementsByClassName("content")[0];
    element.appendChild(span);
    const remove = document.getElementsByClassName('delete')[0];
}

function remove(element){
    element.parentNode.remove();
}