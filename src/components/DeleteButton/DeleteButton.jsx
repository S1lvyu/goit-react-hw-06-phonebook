import React from 'react';
import styles from './DeleteButton.module.css';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/phonebookSlice';
export default function DeleteButton({ contact }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact));
  };
  return (
    <button type="button" onClick={handleDelete} className={styles.button}>
      Delete
    </button>
  );
}
DeleteButton.propTypes = {
  contact: PropTypes.object.isRequired,
};
