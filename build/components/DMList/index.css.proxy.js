// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".dm-list-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.dm-list-wrapper ul {\n  display: flex;\n  list-style: none;\n  flex-wrap: wrap;\n}\n.dm-list-wrapper ul li {\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.dm-list-wrapper ul li img {\n  height: 48px;\n}\n.dm-list-wrapper ul li span {\n  font-size: 18px;\n  font-family: \"Lato Thin\";\n  font-weight: 600;\n}\n\n@media (min-width: 992px) {\n  .dm-list-wrapper ul li {\n    margin-bottom: 60px;\n    width: 33.33%;\n  }\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}