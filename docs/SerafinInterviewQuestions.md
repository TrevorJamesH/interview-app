This MD file is from linked file: https://gist.github.com/lumodon/2df82b26076289b1d153542b26353911/#file-interviewapp-md
This is the result of completing the goal #291, Interview Prep.
You may see the main Gist for this project here:
    https://gist.github.com/lumodon/0af7730a6ea949a64fa12d1b48f6ace8

Because the interview app is experiencing difficulties in adding questions, I'm linking my questions and options here.
You can see the git repo for the interiew app, now named mirror, [here](https://github.com/GuildCrafts/interview-app)  

# Question/Answer 1

### Question:
This question will test your ability to talk out loud while problem solving, see the bigger picture in a program and organize around it, and invent on the fly a complex algorithm.

Design and implement a text-based Minesweeper game. Minesweeper is the classic single-player computer game where an NxN grid has B mines (or bombs) hidden across the grid. The remaining cells are either blank or have a number behind them. The numbers reflect the number of bombs in the surrounding eight cells. The user then uncovers a cell. If it is a bomb, the player loses. If it is a number, the number is exposed. If it is a blank cell, this cell and all adjacent blank cells (up to and including the surrounding numeric cells) are exposed. The player wins when all non-bomb cells are exposed. The player can also flag certain places as potential bombs. This doesn't a ect game play, other than to block the user from accidentally clicking a cell that is thought to have a bomb. (Tip for the reader: if you're not familiar with this game, please play a few rounds online first.)

### Answer:
http://therealmofcode.com/posts/2012/11/building-minesweeper-game-using-javascript-html-css.html

### Options:
*Game Mode:* White Boarding  
*Topics:* nodejs, data-structures-and-algorithms 
*Difficulty:* Advanced  

# Question/Answer 2

### Question:
A top-level App component returns &#lt;Button /&#gt; from its render() method.
<br>
1. What is the relationship between &#lt;Button /&#gt; and this in that Button’s render()?<br>
2. Does rendering &#lt;Button&#gt;&#lt;Icon /&#gt;&#lt;/Button&#gt; guarantee that an Icon mounts?<br>
3. Can the App change anything in the Button output? What and how?

### Answer:

1. What is the relationship between &#lt;Button /&#gt; and this in that Button’s render()?<br>
this will refer to an instance of the React component called 'Button', it will be an 'instance' of a React component, NOT the DOM element.

Does rendering &#lt;Button&#gt;&#lt;Icon /&#gt;&#lt;/Button&#gt; guarantee that an Icon mounts?<br>
If the 'Button' React Component doesn't do anything with its this.props.children then it won't render. Because your putting the Icon component inside the Button component, your passing it in, not actually rendering an Icon component inside a Button component.

Can the App change anything in the Button output? What and how?<br>
Only by passing props to the Button, and you'll need Button to handle those props in a way that yields a different output. It's almost like a mini-API.

### Options:

*Game Mode:* Questions & Answers  
*Topics:* React  
*Difficulty Level:* Intermediate  

# Question/Answer 3

### Question:  
Writing programming interview questions hasn't made me rich. Maybe trading Apple stocks will.
Suppose we could access yesterday's stock prices as a list, where:

The values are the price in dollars of Apple stock.
A higher index indicates a later time.
So if the stock cost $500 at 10:30am and $550 at 11:00am, then:

<code>stock_prices_yesterday[60] = 500</code>

Write an efficient function that takes stock_prices_yesterday and returns the best profit I could have made from 1 purchase and 1 sale of 1 Apple stock yesterday.

For example:
<pre><code>
  stock_prices_yesterday = [10, 7, 5, 8, 11, 9]

get_max_profit(stock_prices_yesterday)
// returns 6 (buying for $5 and selling for $11)
</code></pre>

No "shorting"—you must buy before you sell. You may not buy and sell in the same time step (at least 1 minute must pass).

### Answer:  
[Link to PDF of answers](https://drive.google.com/open?id=0B-wm_oxu2ssuT3VYSUFqd2VNS00)  
[Link to PDF final solution](https://drive.google.com/open?id=0B-wm_oxu2ssuUWRnT0R3RDdVR3M)  

### Options:  
*Game Mode:* Coding Challenge  
*Topics:* data-structures-and-algorithms  
*Difficulty Level:* Intermediate  

# Question/Answer 4

### Question:  
What will the code below output to the console and why?
<pre><code>
var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo);
        console.log("outer func:  self.foo = " + self.foo);
        (function() {
            console.log("inner func:  this.foo = " + this.foo);
            console.log("inner func:  self.foo = " + self.foo);
        }());
    }
};
myObject.func();
</code></pre>  

### Answer:  
It should say output:  
<pre><code>
outer func:  this.foo = bar
outer func:  self.foo = bar
inner func:  this.foo = undefined
inner func:  self.foo = bar
</code></pre>  
When we run <code>myObject.func()</code> because we are calling 'func()' using a dot on an object, i.e. running it as a method of an object, the 'this' keyword gets bound to 'myObject'. Our first two console logs respond with 'bar' because 'this' is resolved to 'myObject' and 'foo' is a property on 'myObject', so we are accessing 'myObject.foo' which resolves to 'bar'.  

The <code>inner func:  this.foo = undefined</code> happens because this loses its binding in the 'Immediately Invoked Function Expression' (IIFE for short). If we were using strict mode with <code>"use strict";</code> then it would actually throw an error for accessing foo on undefined, when not in strict mode, any "this" inside IIFE's refer to the global object. (Window for client-side, Global for node)  

The final 'bar' displays because it uses self, which is just a variable, and is available to this function because of closure from the parent function.  

<a href=http://stackoverflow.com/questions/7653757/iife-context-issues>IIFE Context Issues</a>  

### Options:  
*Game Mode:* Questions & Answers  
*Topics:* JavaScript-Programming  
*Difficulty Level:* Beginner  