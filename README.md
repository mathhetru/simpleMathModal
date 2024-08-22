# Modal Component

This is a reusable Modal component built with React. It displays a modal dialog with customizable options, including a header, main content area, and footer with an optional close button.
It was made for the 14th Openclassrooms project of Front-end Web Developper training by OpenClassrooms "Switch a jQuery library to React".

## Installation

### Install

```bash
npm i simple-modal-math
```

### Install depencies

To use the Modal component in your project, you need to have the following dependencies installed:

```bash
npm install react@^18.2.55 react-dom@^18.2.19 @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons
```

## Usage

### Javascript

Here's how you can use the Modal component in your React application:

```javascript
import React, { useState } from "react";
import { Modal } from "simple-modal-math";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={handleClick}>Open Modal</button>
      <Modal
        isOpen={isOpen}
        closable={true}
        headerTitle="Modal Header"
        mainContent="This is the main content of the modal."
        hasFooter={true}
        buttonFooter="Close"
        modalSize="medium"
        onClose={handleClose}
      />
    </div>
  );
}

export default App;
```

### Props

The Modal component accepts the following props:

- isOpen (boolean, required): Controls whether the modal is open or not.
- closable (boolean, optional): Determines if the modal has a close button in the header. Defaults to false.
- headerTitle (string, optional): Text to display in the modal's header. If not provided, the header will be empty.
- mainContent (string, optional): The main content text to display in the modal. Defaults to an empty string if not provided.
- hasFooter (boolean, optional): Determines if the modal should have a footer. Defaults to false.
- buttonFooter (string, optional): Text for the footer button. Defaults to "Close" if not provided.
- modalSize ("small" | "medium" | "large", optional): Sets the size of the modal. Defaults to "medium".
- onClose (function, required): Callback function to handle the closing of the modal.

### Styling

The modal component requires a CSS file (modal.css) for styling. Below is a basic example of the CSS classes used:

```css
.m-modal {
  /* Modal background and positioning styles */
}

.m-modal-content {
  /* Modal content container styles */
}

.small {
  max-width: 30vw;
}

.medium {
  max-width: 50vw;
}

.large {
  max-width: 70vw;
}

.m-modal-header {
  /* Modal header styles */
}

.m-modal-header__text {
  /* Header text styles */
}

.m-modal-header__button {
  /* Close button styles */
}

.m-modal-main {
  /* Main content area styles */
}

.m-modal-main__text {
  /* Main content text styles */
}

.m-modal-footer {
  /* Footer container styles */
}

.m-modal-footer__button {
  /* Footer button styles */
}
```

You can customize the styles by modifying the provided CSS or adding your own.

## Example

```javascript
import React, { useState } from "react";
import { Modal } from "simple-modal-math";

function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div>
      <button onClick={toggleModal}>Toggle Modal</button>
      <Modal
        isOpen={isModalOpen}
        closable={true}
        headerTitle="Example Modal"
        mainContent="This is an example modal component."
        hasFooter={true}
        buttonFooter="Close"
        modalSize="medium"
        onClose={toggleModal}
      />
    </div>
  );
}

export default App;
```

This will render a modal with a header, main content area, and a footer with a close button. The modal can be closed by clicking the close button or by triggering the onClose function passed as a prop.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue to discuss any changes.
