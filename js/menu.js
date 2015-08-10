function Menu () {
    var self = this;
    self.tabs = document.querySelectorAll(".tabs li");
    self.containers = document.querySelectorAll(".content div");

    self.changeTab = function(tabName) {
        clearClass(self.tabs, "active");
        clearClass(self.containers, "active");
        var container = document.querySelector("#" + tabName);
        var tab = document.querySelector("[aria-controls='" + tabName + "']");
        container.classList.add("active");
        tab.classList.add("active");
    }

    self.handleTabClick = function(e) {
        var id = e.currentTarget.getAttribute("aria-controls");
        location.hash = id;
    }

    self.handleHashChange = function() {
        if (location.hash) {
            var tabName = location.hash.replace("#", "");
        }
        else {tabName = "account" }
        self.changeTab(tabName);
    }

    self.init = function() {
        window.onhashchange = self.handleHashChange;
        self.handleHashChange(); //init on start
        each.call(self.tabs, function(node) {
            node.addEventListener("click", self.handleTabClick);
        });
    }
}

var menu = new Menu();
menu.init();

