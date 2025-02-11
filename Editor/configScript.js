
export let Characterss = parseInt(localStorage.getItem("characters")) || 2;
export let Numberss = parseInt(localStorage.getItem("numbers")) || 1;
export let Specials = parseInt(localStorage.getItem("specials")) || 2;
export let Uppers = parseInt(localStorage.getItem("upper")) || 2;

export let genQuan = parseInt(localStorage.getItem("Characters-quantity")) || 1;
export let charQuan = parseInt(localStorage.getItem("generates-quantity")) || 1;
export let tempSelected = parseInt(localStorage.getItem("tempSel")) || 0;
export let joinType = localStorage.getItem("type") || "-";

 const generateBTN = document.getElementById("generate-btn")

 if (generateBTN){
    tempSelected = 0
     localStorage.setItem("type", "-");
 }

document.addEventListener("DOMContentLoaded", function(){
    let ArrayUI = [];
    const nrScUI = document.getElementById("nrSC");

    const templates = document.querySelector(".layer4");
    const templateTwo = templates.querySelector(".template2");
    const templateOne = templates.querySelector(".template1");
    const hiddenEl2 = document.querySelector(".hidden2")
    const hiddenEl1 = document.querySelector(".hidden1")

    const unSelect = document.getElementById("un-select")
    const charValue = document.getElementById("Characters-quantity")
    const genValue = document.getElementById("generates-quantity")
    
    const errorEl = document.getElementById("errors")
    
    const yesNumbers = document.getElementById("yes-numbers")
    const noNumbers = document.getElementById("no-numbers")

    const yesCaps = document.getElementById("yes-caps")
    const noCaps = document.getElementById("no-caps")

    const noSpecials = document.getElementById("no-special")
    const yesSpecials = document.getElementById("yes-special")
    
    const yesLetters = document.getElementById("yes-letters")
    const noLetters = document.getElementById("no-letters")
    const joinPattern = document.getElementById("join-pattern")
    const backBTN = document.getElementById("back-btn")

    backBTN.addEventListener("click", function(){
        tempSelected = 0
    })

        noLetters.addEventListener("click", function(){
            Characterss = 2
            buttonsStyle()
        })
        yesLetters.addEventListener("click", function(){
            Characterss = 1
            hiddenEl1.style.backgroundColor = "hsla(240, 100%, 70%, 0.233)";
            buttonsStyle()
            setTimeout(() => {
                hiddenEl1.style.backgroundColor = "hsla(240, 100%, 70%, 0.192)";
            }, 222);
        })
        yesNumbers.addEventListener("click", function(){
            Numberss = 1
            buttonsStyle()
        })
        noNumbers.addEventListener("click", function(){
            Numberss = 2
            buttonsStyle()
        })
        yesSpecials.addEventListener("click", function(){
            Specials = 1
            buttonsStyle()
        })
        noSpecials.addEventListener("click", function(){
            Specials = 2
            buttonsStyle()
        })
        yesCaps.addEventListener("click", function(){
            Uppers = 1
            buttonsStyle()
        })
        noCaps.addEventListener("click", function(){
            Uppers = 2
            buttonsStyle()
        })
    
    function buttonsColoring1(yesValue, noValue){
        yesValue.style.borderColor = "black"
        yesValue.style.color = "black"
        yesValue.style.borderRadius = "5px"
        noValue.style.borderColor = "hsla(240, 100%, 70%, 0.712)"
        noValue.style.color = "hsla(240, 100%, 70%, 0.712)"
        noValue.style.borderRadius = "10px"
    
    }
    function buttonsColoring2(yesValue, noValue){
        noValue.style.borderColor = "black"
        noValue.style.color = "black"
        noValue.style.borderRadius = "5px"
        yesValue.style.borderColor = "hsl(240, 100%, 70%)"
        yesValue.style.color = "hsl(240, 100%, 70%)"
        yesValue.style.borderRadius = "10px"
    
    }

    
    function buttonsStyle(){
        switch (Characterss) {
            case 1:
                buttonsColoring2(yesLetters, noLetters)
                hiddenEl1.style.display = "block"
            break;
            case 2:
                buttonsColoring1(yesLetters, noLetters)
                hiddenEl1.style.display = "none"
            break;
          }
          switch (Numberss) {
            case 1:
                buttonsColoring2(yesNumbers, noNumbers)
            break;
            case 2:
                buttonsColoring1(yesNumbers, noNumbers)
            break;
          }
          switch (Specials) {
            case 1:
                buttonsColoring2(yesSpecials, noSpecials)
            break;
            case 2:
                buttonsColoring1(yesSpecials, noSpecials)
            break;
          }
          switch (Uppers) {
            case 1:
                buttonsColoring2(yesCaps, noCaps)
            break;
            case 2:
                buttonsColoring1(yesCaps, noCaps)
            break;
          }
    }
    buttonsStyle()
    generateBTN.addEventListener("click", function() {
        charQuan = charValue.value
        genQuan = genValue.value
        joinType = joinPattern.value
        errorEl.style.color = "hsl(0, 100%, 75%)"
        setTimeout(() => {
            errorEl.style.color = "hsl(0, 100%, 55%)"
        }, 500);
        if (charQuan === "" || genQuan === "") {
            errorEl.textContent = "Empty input spaces found";
        }else if(charQuan > 35 || charQuan < 1){
            errorEl.textContent = "You code length cannot be greater than 35 or lower than 1 character";
        } else if(Numberss === 2 && Characterss == 2 && Specials == 2) {
            errorEl.textContent = "All of the 3 type characters are set as 'no' at least one character type required";
        }
        else {
            errorEl.textContent = "";
            charValue.value = ""
            genValue.value = ""
    
            window.location = "/YC-PG/GenPage";

            function setItem(id, value) {
                localStorage.setItem(id, value.toString());
            }
            
            setItem("generates-quantity", charQuan);
            setItem("Characters-quantity", genQuan);
            setItem("characters", Characterss);
            setItem("tempSel", tempSelected);
            setItem("specials", Specials);
            setItem("numbers", Numberss);
            setItem("type", joinType);
            setItem("upper", Uppers);

        }
        errorEl.style.transition = "color 0.5s ease"
    });

function idkNameYet() {
        let randNum = Math.floor(Math.random() * 9) + 1
        nrScUI.textContent = ArrayUI.join('') + randNum
        ArrayUI.push(randNum)
    }
    setInterval(idkNameYet, 25)

    function coloringBoiler(template){
        hiddenEl2.style.backgroundColor = "hsla(240, 100%, 70%, 0.233)";
        template.style.borderColor = "hsl(240, 100%, 70%)"
        template.style.color = "hsl(240, 100%, 70%)"
        localStorage.setItem("tempSel", tempSelected.toString());
        hiddenEl2.style.display = "block"
        hiddenEl2.style.transition = "backgroundColor 1s ease";
    }
    templateOne.addEventListener("click", function(){
        if(tempSelected == 2){
            templateTwo.style.borderColor = "black"
            templateTwo.style.color = "black"
            }
            coloringBoiler(templateOne)
            setTimeout(() => {
                hiddenEl2.style.backgroundColor = "hsla(240, 100%, 70%, 0.192)";
            }, 222);
            tempSelected = 1
        })
    templateTwo.addEventListener("click", function(){
        if(tempSelected == 1){
            templateOne.style.borderColor = "black"
            templateOne.style.color = "black"
            }
            coloringBoiler(templateTwo)
            setTimeout(() => {
                hiddenEl2.style.backgroundColor = "hsla(240, 100%, 70%, 0.192)";
            }, 222);
            tempSelected = 2
        })
    unSelect.addEventListener("click", function(){
        templateOne.style.borderColor = "black"
        templateOne.style.color = "black"
        templateTwo.style.borderColor = "black"
        templateTwo.style.color = "black"
        tempSelected = 0
        hiddenEl2.style.display = "none"
    })

})
