function t(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||function(e,r){if(e){if("string"==typeof e)return t(e,void 0);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,void 0)}}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var r=document.querySelector("table");r.addEventListener("click",function(t){var n=document.querySelector("tbody"),o=e(n.rows).map(function(t){return{name:t.cells[0].textContent,position:t.cells[1].textContent,age:t.cells[2].textContent,salary:t.cells[3].textContent}});n.remove();var a=document.createElement("tbody");r.tHead.after(a);var i=[];switch(t.target.textContent){case"Name":i=e(o).sort(function(t,e){return t.name.toLowerCase().localeCompare(e.name.toLowerCase())});break;case"Position":i=e(o).sort(function(t,e){return t.position.toLowerCase().localeCompare(e.position.toLowerCase())});break;case"Age":i=e(o).sort(function(t,e){return+t.age-+e.age});break;case"Salary":i=e(o).sort(function(t,e){return+t.salary.slice(1).split(",").join("")-+e.salary.slice(1).split(",").join("")});break;default:i=e(o)}i.map(function(t){var e=document.createElement("tr");for(var r in t){var n=document.createElement("td");n.textContent=t[r],e.append(n)}return e}).forEach(function(t){a.append(t)})});
//# sourceMappingURL=index.72f0e302.js.map
