# React-modal-wow

NPM package made with vite

## Description

A React component for displaying a modal.

The modal contains:

- a close button
- a title
- content (which can be text or a component)

## Install

```bash
npm i react-modal-wow
```

## Versions

- Node version: v18.16.1

## Documentation

After installing the package on your dependencies,
Please do the following:

```
"react-modal-wow": ["node_modules/react-modal-wow/dist/index.d.ts"]

in tsconfig.json on paths options and import the library in your parent component.

Add a typings.d.ts and paste the following:
declare module 'react-modal-wow' {
    export function Modal (arg:any):any;
}
```

### Importation

```jsx
import { Modal } from 'react-modal-wow';
```

### Setup the state to open / close the modal in your parent component

- import useState from react
- create the state with useState => should be a boolean with false by default

```jsx
const [isOpen, setIsOpen] = useState(false);
```

### Modal Implementation

```jsx
<Modal
  show={isOpen}
  close={() => setIsOpen(false)}
  title="Custom Modal Title"
  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Unum nescio,."
/>
```

### Props Description

- Close (required): handle the modal closing. the props is must receive a function where you pass the setter to false
- show (required) : handle the modal opening. the props must receive the state value of the getter (isOpen)
- title(required): contain the modal title
- content(required): contain the modal content. It could be a string or an object

#### Example

```jsx
import { useState } from 'react';
import { Modal } from '../lib/Modal';

export const myModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>

      <Modal
        show={isModalOpen}
        close={closeModal}
        title="Custom Modal Title"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Unum nescio,."
      />
    </div>
  );
};
```
