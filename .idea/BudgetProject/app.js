/*
* UI module
* data module :
*   add the new item to our data structure
*   calculate budget
* controller module
*   add event handler
* */


//module function return the object that the function
//want to be public
var budgetController = (function() {
    // var x = 23;
    // var add = function(a){
    //     return x + a;
    // }
    //
    // return {
    //     publicTest: function(b){
    //         return add(b);
    //     }
    // }
    //function construction use the capital
    var Expense = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;

    };

    var Income = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;

    };

    var allExpenses = [];
    var allIncome = [];
    var totalExpenses = 0;

    var data = {
        allItems:{
            exp: [],
            inc: []
        },
        totals:{
            exp: 0,
            inc: 0
        }

    };

    return {
        addItem : function(type, des, val){
            var newItem;

            //new id for new item
            if(data.allItems[type].length > 0){
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            }else{
                ID = 0;
            }


            //create nre item based on'inc' or 'exp' type
            if(type === 'exp'){
                newItem = new Expense(ID, des, val);
            }else if(type === 'inc'){
                newItem = new Income(ID, des, val);
            }

            data.allItems[type].push(newItem);

            //return the nre Item
            return newItem;

        },

        testing: function(){
            console.log(data);
        }
    };
})();

//budgetController.publicTest

var UIController = (function(){
    //need to be the public so it is a object.
    var DOMstrings = {
        intputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expenseContainer: '.expenses__list'

};
    return{
        getinput: function(){
            return {
                type: document.querySelector(DOMstrings.intputType).value,//will be inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
        },

        addListItem: function(obj, type){
            var html, element;
            //createhtml string with placeholder text
            if(type === 'inc') {
                element = DOMstrings.incomeContainer;

                html = '<div class="item clearfix" id="income-%id%"> <div class="item__description">%description%</div> <div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div> </div> </div>'
            }else if(type === 'exp'){
                element = DOMstrings.expenseContainer;

                html = '<div class="item clearfix" id="expense-%id%"> <div class="item__description">%description%</div> <div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__percentage">21%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div> </div> </div>'
            }
            //replace the place holder text with some actual data
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);

            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);

            //insert something in

        },

        clearFields: function(){

        },

        getDOMstrings: function(){
            return DOMstrings;
        }
    }
})();



//gobal app controller
var controller = (function(budgetCtrl, UICtrl){

    //initilize

    var setupEventListeners = function(){
        var DOM = UICtrl.getDOMstrings();

        document.querySelector(DOM.inputBtn).addEventListener('click',ctrlAddItem);

        //happen on the golbal document
        document.addEventListener('keypress', function(event){
            if(event.keyCode === 13 || event.which === 13){
                ctrlAddItem();
            }
        });

    }


    var ctrlAddItem = function(){

        var input, newItem;
        // 1. get the filed input data
        input = UIController.getinput();
        //2. add the item to the budget controller
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);

        //3. add the item to the UI
        UICtrl.addListItem(newItem, input.type);
        //4. calculate the budget

        //display the budget on the UI

    };

    return{
        init: function(){
            console.log('Application has started');
            setupEventListeners();
        }
    }

    // var z = budgetCtrl.publicTest(5);
    // return {
    //     anotherPublic: function(){
    //         console.log(z);
    //     }
    // }


})(budgetController, UIController);

controller.init();