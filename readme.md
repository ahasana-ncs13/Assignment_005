1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans:
    document.getElementById("id")
      1.select one elements with the given id.
      2.return a single element or undefine.
      3.example: let title=document.getElementById("main-title").
    
    document.getElementsByClassName("className")
      1.selects multiple elements with the given class name.
      2.return a HTML Collection or undefine.
      3.example: let buttons =document.getElementsByClassName("all-btn").

    document.querySelector("css selector")
      1.selects the first matching elements with the given css selector.
      2.return a single element or null.
      3.example : let cardDiv = document.querySelector(".card-div1");

    document.querySelectorAll("css selector")
      1.selects the all matching elements with the given css selector.
      2.return a nodeList or null.
      3.example : let card = document.querySelectorAll(".card-div");

2.How do you create and insert a new element into the DOM?

Ans: let mainSection = document.getElementById("main-section")
     let divPara = document.createElement("div");
      divPara.innerHTML=` <p>this a paragraph</p> `;
     mainSection.append(divPara);

     steps :1.create element 
            2.set attributes/content
            3.insert it into the DOM usig methods like append ,appendChild, prepend,before,after etc.

3.What is Event Bubbling and how does it work?

Ans: Event Bubbling = when an Event happens on an element , it first runs on that element then it bubbles up to its parent , grandParent and so on 
                      until the document.

    work: first event triggered on the child element.
           then it bubble up to its parent .
           then it bubble up to its grandparent .
           finally it reaches the document.

4.What is Event Delegation in JavaScript? Why is it useful?

Ans: Event Delegation = Instead of attaching an event to many child element ,attaching a single event listener to its parent.
                       its happen because of event Bubbling.
                       
    It is useful because 1.Performance friendly , instead of adding many listener ,only add one.
                         2.works for dynamically added elements.
                         3.Cleaner code , easy to manage.

5.What is the difference between preventDefault() and stopPropagation() methods?

Ans: preventDefault() 
      1.stops the default browser action
      2.example :   document.querySelector(".btn").addEventListener("click",function (e){
                          e.preventDefault();
                    })

    stopPropagation()
     1.stops the event to bubbling up to its parent
     2.example: document.getElementById("child").addEventListener("click",function (e){
                          e.stopPropagation();
                    })