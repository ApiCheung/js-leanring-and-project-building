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
        },
        budget:0,
        percentage: -1

    };

    var calculateTotal = function(type){
      var sum = 0;
      data.allItems[type].forEach(function(cur){
         sum += cur.value;
      });
      data.totals[type] = sum;
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

        calculateBudget: function(){
            //cal total income and expenses
            calculateTotal('exp');
            calculateTotal('inc');
            //cal the budget: income - expense
            data.budget = data.totals.inc - data.totals.exp;

            if(data.totals.inc > 0){
                data.percentage = Math.round((data.total.exp / data.total.inc) * 100);

            }else{
                data.percentage = -1;
            }


        },

        getBudget:  function(){
          return {
              budget: data.budget,
              totalExp: data.totals.inc,
              totalExp: data.totals.exp,
              percentage: data.percentage
          }
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
                value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
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
            var fields;

//not return an arrays but a list
            //convert the list to the array
            fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' +
                DOMstrings.inputValue);

            //call the slice method use the call method
            fieldsArr = Array.prototype.slice.call(fields);

            fieldsArr.forEach(function(current, index, array){
                //clean the field
                current.value = "";

            });
            fieldsArr[0].focus();

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

    };

    var updateBudget = function(){
        //1. calculate the budget
        budgetCtrl.calculateBudget();

        //2. return the budget
        var budget = budgetCtrl.getBudget();

        //3. display the budget on the ui
        console.log(budget);
    };


    var ctrlAddItem = function(){

        var input, newItem;
        // 1. get the filed input data
        input = UIController.getinput();

        if(input.description !== ""  && !isNaN(input.value) && input.value > 0){
            //2. add the item to the budget controller
            newItem = budgetCtrl.addItem(input.type, input.description, input.value);

            //3. add the item to the UI
            UICtrl.addListItem(newItem, input.type);
            //4. calculate the budget
            UICtrl.clearFields();

            //5.calculate and update budget
            updateBudget();
        }



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