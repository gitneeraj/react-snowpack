// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "@font-face {\n  font-family: \"Lato Bold\";\n  src: url(\"fonts/Lato-Bold.woff2\") format(\"woff2\"), url(\"fonts/Lato-Bold.woff\") format(\"woff\");\n}\n@font-face {\n  font-family: \"Lato Light\";\n  src: url(\"fonts/Lato-Light.woff2\") format(\"woff2\"), url(\"fonts/Lato-Light.woff\") format(\"woff\");\n}\n@font-face {\n  font-family: \"Lato Regular\";\n  src: url(\"fonts/Lato-Regular.woff2\") format(\"woff2\"), url(\"fonts/Lato-Regular.woff\") format(\"woff\");\n}\n@font-face {\n  font-family: \"Lato Thin\";\n  src: url(\"fonts/Lato-Thin.woff2\") format(\"woff2\"), url(\"fonts/Lato-Thin.woff\") format(\"woff\");\n}\n* {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-family: \"Lato Regular\", sans-serif;\n}\n\na {\n  color: #5e6472;\n  text-decoration: none;\n}\na:focus, a:visited {\n  text-decoration: none;\n}\n\n.sitelayout-wrapper {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 0.05fr 1fr 0.05fr;\n  grid-template-areas: \"header header\" \"main main\" \"footer footer\";\n  height: 100vh;\n  font-family: \"Lato Regular\", sans-serif;\n  background: #b8f2e6;\n  background: -webkit-linear-gradient(top left, #b8f2e6, #faf3dd);\n  background: -moz-linear-gradient(top left, #b8f2e6, #faf3dd);\n  background: linear-gradient(to bottom right, #b8f2e6, #faf3dd);\n  color: #5e6472;\n}\n\nheader,\nmain,\nfooter {\n  display: flex;\n  justify-content: space-between;\n  padding: 8px;\n  align-items: center;\n}\nheader .faIcons,\nmain .faIcons,\nfooter .faIcons {\n  color: #5e6472;\n  cursor: pointer;\n}\nheader a.selected .faIcons,\nmain a.selected .faIcons,\nfooter a.selected .faIcons {\n  color: black;\n}\n\nheader .faIcons,\nfooter .faIcons {\n  font-size: 1.3rem;\n}\n\nheader {\n  grid-area: header;\n}\nheader #system-info {\n  color: #5e6472;\n}\n\nmain {\n  grid-area: main;\n  justify-content: center;\n}\nmain .home-wrapper {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n}\n\nfooter {\n  grid-area: footer;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}