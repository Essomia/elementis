//
// Messages - Toasts
//

class Toast {
    /**
     * Toast constructor
     *
     * @param {ObjectHTML} element
     */
    constructor(element) {
        if (!element) {
            // eslint-disable-next-line no-console
            console.error('Missing argument `element` to Toast class constructor');

            return;
        }

        // Create global element references
        this.uid = Math.floor((Math.random() * 1000) + 1);

        this.$toast = element;
        this.$closeButton = null;

        // Define defaults options
        const defaults = {
            className: `toast-uid-${this.uid}`,
            closeButton: true,
            autoOpen: false
        };

        // Extends defaults options with the passed in arguments
        if (element.dataset) {
            const customDefaults = JSON.parse(element.dataset.toast);

            if (customDefaults && typeof customDefaults === 'object') {
                // eslint-disable-next-line no-restricted-syntax
                for (const property in customDefaults) {
                    // eslint-disable-next-line no-prototype-builtins
                    if (customDefaults.hasOwnProperty(property)) {
                        defaults[property] = customDefaults[property];
                    }
                }
            }
        }

        this.options = defaults;

        // Initialize toast
        this.initialize();
    }

    /**
     * Initialize toast
     */
    initialize() {
        // Add class UID to toast
        this.$toast.className += ` ${this.options.className}`;

        // If closeButton option is true, add one
        if (this.options.closeButton === true) {
            this.$closeButton = document.createElement('button');
            this.$closeButton.className = 'close-button';
            this.$closeButton.innerHTML = `
                <span>close</span>
            `;

            this.$toast.appendChild(this.$closeButton);
        }

        // If open at initialization is true, do it
        if (this.options.autoOpen === true) {
            this.open();
        }
    }

    /**
     * Action open toast
     */
    open() {
        // Attach events
        if (this.options.closeButton === true) {
            this.$closeButton.addEventListener('click', this.close.bind(this));
        }

        // Add class open
        this.$toast.className += ' open';
    }

    /**
     * Action close toast
     */
    close() {
        this.$toast.className = this.$toast.className.replace('open', '');
    }
}

//
// Init class for all elements found in DOM
//

(() => {
    const toasts = document.querySelectorAll('[data-toast]');

    for (let i = 0; i < toasts.length; i += 1) {
        // eslint-disable-next-line no-new
        new Toast(toasts[i]);
    }
})();
