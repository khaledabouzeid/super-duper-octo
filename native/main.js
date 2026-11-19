//Ecma Script 6

/* Escape Characters
\
\\
*/
let p1 = "khaled \"ahmed\"";
let p2 = "\\Abou''zeid";
let p3 = "\nk\
h\
aled";
document.querySelector('#strings-block').append(p1 + p2);
document.querySelector('#strings-block').append(p3);


/*Backticks
``
*/
let n = "khaled";
let backtick = document.createElement('p');
backtick.innerHTML = `Hello ${n}`;
document.querySelector('#strings-block').append(backtick);

let MarkUp = `
<div>
    <p>Header</p>
    <strong>Bold</strong>
    <footer>Footer</footer>
</div>
`;
document.querySelector('#strings-block').append(MarkUp);
document.write(MarkUp);


// The Challenge
let chTitle ="Elzero", chDescription = "Elzero Web School", chDate = "25/10";

let card =`
<div>
    <h3>Hello ${chTitle}</h3>
    <p>${chDescription}</p>
    <span>${chDate}</span>
</div>

`
document.write(card.repeat(4));