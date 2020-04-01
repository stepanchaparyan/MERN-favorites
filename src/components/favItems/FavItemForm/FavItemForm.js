import React, { useContext, useState, useEffect } from 'react';
import FavItemContext from '../../../context/favItemContext/favItemContext';
import { Container, Title, Form, Input, Errors, ErrorButton } from './FavItemFormStyled';

const FavItemForm = () => {
  const context = useContext(FavItemContext);
  const {
    addFavItem,
    editFavItem,
    clearEdit,
    update_FavItem,
    toggle_Form,
    toggleForm,
    error,
    clearErrors
  } = context;

  useEffect(() => {
    if (editFavItem !== null) {
      setFavItem(editFavItem);
    } else {
      setFavItem({
        author: '',
        title: '',
        category: '',
        description: ''
      });
    }
  }, [editFavItem, context]);

  const [favItem, setFavItem] = useState({
    author: '',
    title: '',
    category: '',
    description: ''
  });
  const { author, title, category, description } = favItem;
  const onchange = e => {
    setFavItem({
      ...favItem,
      [e.target.name]: e.target.value
    });
  };
  const onsubmit = e => {
    e.preventDefault();
    if (editFavItem === null) {
      addFavItem(favItem);
    } else {
      update_FavItem(favItem);
      clearEdit();
      toggle_Form(!toggleForm);
    }
    setFavItem({
      author: '',
      title: '',
      category: '',
      description: ''
    });
  };
  const cancelEdit = () => {
    clearEdit();
    toggle_Form(!toggleForm);
  };
  return (
    <Container>
      <Title>{editFavItem !== null ? 'Edit FavItem' : 'Add new favorite item'}</Title>
      <Form onSubmit={onsubmit}>
        <Input type="text" placeholder="Author" name="author" value={author} onChange={onchange} />
        <Input
          type="text"
          placeholder="Title"
          name="title"
          value={title}
          onChange={onchange}
          required
        />
        <Input
          type="text"
          placeholder="Category"
          name="category"
          value={category}
          onChange={onchange}
        />
        <Input
          type="text"
          placeholder="Description"
          name="description"
          value={description}
          onChange={onchange}
        />
        <Input type="submit" value={editFavItem !== null ? 'Update' : 'Add'} />
        {editFavItem && <Input onClick={cancelEdit} type="button" value="Cancel" />}
      </Form>
      {error && (
        <Errors>
          {!Array.isArray(error) ? (
            <ErrorButton type="button" onClick={() => clearErrors()}>
              {error}
            </ErrorButton>
          ) : (
            error.map(err => (
              <ErrorButton key={err.msg} type="button" onClick={() => clearErrors()}>
                {err.msg}
              </ErrorButton>
            ))
          )}
        </Errors>
      )}
    </Container>
  );
};

export default FavItemForm;
