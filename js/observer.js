var model = {
    pc: false,
    minimized: false
};
var saveBtn = document.getElementById("saveB");
var cancelBtn = document.getElementById("cancelB");
var savedBtn = document.getElementById("savedB");

Object.observe(model, function(changes){
    changes.forEach(function(change) {
        el = document.getElementById(change.name);
        if (model[change.name]){
            el.className = el.className.concat(" selected");
        }
        else{
            el.className = el.className.replace(" selected", "");
        }
    });

});

for(var choise in model) {
    el = document.getElementById(choise);
    el.addEventListener('click', function() {
        model[this.id] = !model[this.id]
    });
}

saveBtn.addEventListener('click', function() {
    save(model);
});

cancelBtn.addEventListener('click', function() {
    init();
});

var save = function(data){
    localStorage.setItem('choises', JSON.stringify(data));
    savedBtn.style.display = "block";
    saveBtn.style.display = "none";
    cancelBtn.style.display = "none";
}

var init = function(){
    stModel = JSON.parse(localStorage.getItem('choises'));
    for(var choise in stModel){
        model[choise] = stModel[choise];
    }
};

init();