import { createSelector } from "@reduxjs/toolkit";

export const getContacts = (state) => state.phoneBook.contacts.items;
export const getFilter = (state) => state.phoneBook.contacts.filter;

export const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  }
);

export const getContact = (contactID) => (state) =>
  state.phoneBook.contacts.items.find((item) => item.id === contactID);
