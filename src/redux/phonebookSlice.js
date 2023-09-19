import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const phoneBookInitialState = {
  contacts: [],
  filter: '',
};

const PhonebookSlice = createSlice({
  name: 'phonebook',
  initialState: phoneBookInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts = [...state.contacts, action.payload];
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact: {
      reducer(state, action) {
        state.contacts = state.contacts.filter(
          contact => contact.id !== action.payload.contact.id
        );
        state.filter = '';
      },
      prepare(contact) {
        return {
          payload: {
            contact,
          },
        };
      },
    },
    editFilter: {
      reducer(state, action) {
        state.filter = action.payload.filter;
      },
      prepare(filter) {
        return {
          payload: {
            filter,
          },
        };
      },
    },
  },
});

export const { addContact, deleteContact, editFilter } = PhonebookSlice.actions;
export const phonebookReducer = PhonebookSlice.reducer;
