var each = Array.prototype.forEach;
var tabs = document.querySelectorAll(".tabs li");
var containers = document.querySelectorAll(".content div");

var clearClass = function(nodeList, className) {
  each.call(nodeList, function(node) {
    node.classList.remove(className);
  });
}

var changeTab = function(tabName) {
  clearClass(tabs, "active");
  clearClass(containers, "active");
  var container = document.querySelector("#" + tabName);
  var tab = document.querySelector("[aria-controls='" + tabName + "']");
  container.classList.add("active");
  tab.classList.add("active");
}

var handleTabClick = function(e) {
    var id = e.currentTarget.getAttribute("aria-controls");
    location.hash = id;
}

var handleHashChange = function() {
    if (location.hash) {
        var tabName = location.hash.replace("#", "");
    }
    else {tabName = "account" }
    changeTab(tabName);
}

var init = function() {
  window.onhashchange = handleHashChange;
  handleHashChange(); //init on start
  each.call(tabs, function(node) {
    node.addEventListener("click", handleTabClick);
  });
}

init();


