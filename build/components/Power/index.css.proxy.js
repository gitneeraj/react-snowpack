// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".power-outer-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n.power-outer-wrapper .power-wrapper {\n  display: flex;\n  flex-direction: column;\n  font-size: 30px;\n  font-family: \"Lato Thin\", sans-serif;\n  font-weight: 600;\n}\n.power-outer-wrapper .power-wrapper .power-options {\n  margin-bottom: 30px;\n  cursor: pointer;\n  transition: all 1s;\n}\n.power-outer-wrapper .power-wrapper .power-options .faIcons {\n  margin-right: 12px;\n  color: white;\n}\n.power-outer-wrapper .power-wrapper .power-options:hover span {\n  text-shadow: 1px 1px 3px #969696;\n}\n\n@media (min-width: 992px) {\n  .power-outer-wrapper {\n    flex-direction: column;\n    align-items: center;\n  }\n  .power-outer-wrapper .power-wrapper {\n    flex-direction: row;\n    font-size: 25px;\n  }\n  .power-outer-wrapper .power-wrapper .power-options {\n    margin-bottom: 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-right: 85px;\n  }\n  .power-outer-wrapper .power-wrapper .power-options:last-child {\n    margin-right: 0;\n  }\n  .power-outer-wrapper .power-wrapper .power-options .faIcons {\n    margin-right: 0;\n    margin-bottom: 16px;\n    font-size: 35px;\n  }\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}