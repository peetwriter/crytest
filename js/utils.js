var clearClass = function(nodeList, className) {
    each.call(nodeList, function(node) {
        node.classList.remove(className);
    });
}

var each = Array.prototype.forEach;