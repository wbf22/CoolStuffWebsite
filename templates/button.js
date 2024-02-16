class MyButton extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({mode: 'open'});
  

        shadow.innerHTML = `
            <button part="but-button">Click me</button>
        `;
    }
  }
  
  customElements.define('my-button', MyButton);