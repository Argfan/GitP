var list = document.getElementById('list');
var input = document.getElementById('input');
var add = document.getElementById('add');
add.onclick = add_element;


list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

var close = document.querySelectorAll("#list li button");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = del_element;
}

function add_element() {
	var li = document.createElement("li");
	var span = document.createElement("span");
  	var t = document.createTextNode(input.value);
  	span.appendChild(t);
  	li.appendChild(span);

  	li.className = 'list-group-item d-flex justify-content-between';
  	var em = document.createElement("i");
  	em.className = 'fa fa-close';
  	var button = document.createElement("button");
  	button.className = 'btn btn-danger btn-sm';
  	button.appendChild(em);
  	li.appendChild(button);

  	list.appendChild(li);

  	button.onclick = del_element;
}

function del_element() {
	var div = this.parentElement;
    div.remove();
}