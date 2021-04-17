// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".login-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.login-wrapper img {\n  border-radius: 50%;\n  margin-bottom: 12px;\n  width: 100px;\n  box-shadow: -1px 3px 11px -3px rgba(0, 0, 0, 0.74);\n  -webkit-box-shadow: -1px 3px 11px -3px rgba(0, 0, 0, 0.74);\n  -moz-box-shadow: -1px 3px 11px -3px rgba(0, 0, 0, 0.74);\n}\n.login-wrapper input[type=text],\n.login-wrapper input[type=password] {\n  border-radius: 5px;\n  padding: 8px;\n  margin-bottom: 8px;\n  background: #5e647225;\n  color: #5e6472;\n  letter-spacing: 0.3px;\n  text-align: center;\n  transition: all 0.2s;\n}\n.login-wrapper input[type=text]:focus,\n.login-wrapper input[type=password]:focus {\n  outline: none;\n  box-shadow: -1px 3px 4px -4px rgba(0, 0, 0, 0.74);\n  -webkit-box-shadow: -1px 3px 4px -4px rgba(0, 0, 0, 0.74);\n  -moz-box-shadow: -1px 3px 4px -4px rgba(0, 0, 0, 0.74);\n}\n.login-wrapper input[type=text]::placeholder,\n.login-wrapper input[type=password]::placeholder {\n  color: #5e6472;\n  opacity: 0.5;\n}\n.login-wrapper button {\n  background: transparent;\n  font-size: 30px;\n  color: #5e6472;\n}\n.login-wrapper button:focus {\n  outline: none;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}