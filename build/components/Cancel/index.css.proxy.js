// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".go-back {\n  cursor: pointer;\n}\n.go-back .faIcons {\n  margin-right: 4px;\n}\n\n@media (min-width: 992px) {\n  .go-back {\n    margin-top: 80px;\n  }\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}