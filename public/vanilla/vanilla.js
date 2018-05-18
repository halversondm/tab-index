// Get the modal
var vanilla = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById('myBtn');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
    var tags = ['input', 'button'];
    for (var t = 0; t < tags.length; t++) {
        var inputs = document.getElementsByTagName(tags[t]);
        for (var i = 0; i < inputs.length; i++) {
            var node = inputs[i];
            node.setAttribute('data-index', node.getAttribute('tabindex'));
            node.setAttribute('tabindex', '-1');
        }
    }
    vanilla.style.display = 'block';
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    reverse();
    vanilla.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target === vanilla) {
        reverse();
        vanilla.style.display = 'none';
    }
};

var reverse = function () {
    var tags = ['input', 'button'];
    for (var t = 0; t < tags.length; t++) {
        var inputs = document.getElementsByTagName(tags[t]);
        for (var i = 0; i < inputs.length; i++) {
            var node = inputs[i];
            node.setAttribute('tabindex', node.getAttribute('data-index'));
        }
    }
};