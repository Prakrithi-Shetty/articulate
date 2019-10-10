function myFunction() {
    var attribute = this.getAttribute("data");
    alert(attribute);
    event.stopPropagation();
};



var grand = document.getElementById('granfather');
grand.addEventListener('click',myFunction);
console.log('grand',grand);


var parent = document.getElementById('parent');
parent.addEventListener('click',myFunction);
console.log('parent',parent);


var child = document.getElementById('child');
child.addEventListener('click',myFunction);
console.log('child',child);


