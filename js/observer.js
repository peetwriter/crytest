function Observer () {
    var self = this;
    self.Model = {
        pc: false,
        minimized: false
    };

    self.saveBtn = document.getElementById("saveB");
    self.cancelBtn = document.getElementById("cancelB");
    self.savedBtn = document.getElementById("savedB");

    Object.observe(self.Model, function(changes){
        changes.forEach(function(change) {
            el = document.getElementById(change.name);
            if (self.Model[change.name]){
                el.className = el.className.concat(" selected");
            }
            else{
                el.className = el.className.replace(" selected", "");
            }
        });

    });

    for(var choise in self.Model) {
        el = document.getElementById(choise);
        el.addEventListener('click', function() {
            self.Model[this.id] = !self.Model[this.id]
        });
    }

    self.saveBtn.addEventListener('click', function() {
        self.save(self.Model);
    });

    self.cancelBtn.addEventListener('click', function() {
        self.setDefault();
    });

    self.save = function(data){
        localStorage.setItem('choises', JSON.stringify(data));
        self.savedBtn.style.display = "block";
        self.saveBtn.style.display = "none";
        self.cancelBtn.style.display = "none";
    }

    self.setDefault = function(){
        savedModel = JSON.parse(localStorage.getItem('choises'));
        for(var choise in savedModel){
            self.Model[choise] = savedModel[choise];
        }
    };
}

var observer = new Observer();
observer.setDefault();