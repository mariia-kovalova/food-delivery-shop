import { nanoid } from '@reduxjs/toolkit';

export const formId = nanoid();

export const inputs = [
  {
    inputName: 'name',
    type: 'text',
    id: nanoid(),
    label: 'Name',
    placeholder: 'Enter your name',
  },
  {
    inputName: 'email',
    type: 'email',
    id: nanoid(),
    label: 'Email',
    placeholder: 'Enter email',
  },
  {
    inputName: 'number',
    type: 'tel',
    id: nanoid(),
    label: 'Phone',
    placeholder: 'Enter phone',
  },
];
