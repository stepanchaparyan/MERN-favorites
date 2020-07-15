import React, { useContext, useState, useEffect, useRef } from 'react';
import { useIntl } from 'react-intl';
import FavItemContext from '../../../context/favItemContext/favItemContext';
import {
  Container,
  Title,
  Form,
  Input,
  Errors,
  ErrorButton,
  Select,
  Option,
  DefaultOption
} from './FavItemFormStyled';
import localization from './localization';

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

  const { formatMessage } = useIntl();
  const container = useRef();

  useEffect(() => {
    if (editFavItem !== null) {
      setFavItem(editFavItem);
    } else {
      setFavItem({
        author: 'Unknown',
        title: '',
        category: 'Other',
        description: 'Description'
      });
    }
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
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
    }
  };
  const cancelEdit = () => {
    clearEdit();
    toggle_Form(!toggleForm);
  };

  const handleClick = e => {
    if (!container.current.contains(e.target)) {
      toggle_Form(false);
      return;
    }
  };

  const removeErrors = () => {
    clearErrors();
  };

  return (
    <Container ref={container}>
      <Title>
        {editFavItem !== null
          ? formatMessage(localization.editFavItem)
          : formatMessage(localization.addNewFavItem)}
      </Title>
      <Form onSubmit={onsubmit}>
        <Input
          type="text"
          placeholder={formatMessage(localization.author)}
          name="author"
          value={author}
          onChange={onchange}
        />
        <Input
          type="text"
          placeholder={formatMessage(localization.title)}
          name="title"
          value={title}
          onChange={onchange}
          required
        />
        <Select value={category} name="category" onChange={onchange}>
          <DefaultOption value="Other">{formatMessage(localization.selectCategory)}</DefaultOption>
          <Option value="Film">{formatMessage(localization.films)}</Option>
          <Option value="Music">{formatMessage(localization.music)}</Option>
          <Option value="Books">{formatMessage(localization.books)}</Option>
          <Option value="Other">{formatMessage(localization.other)}</Option>
        </Select>
        <Input
          type="text"
          placeholder={formatMessage(localization.description)}
          name="description"
          value={description}
          onChange={onchange}
        />
        <Input
          type="submit"
          value={
            editFavItem !== null
              ? formatMessage(localization.update)
              : formatMessage(localization.add)
          }
        />
        {editFavItem && (
          <Input onClick={cancelEdit} type="button" value={formatMessage(localization.cancel)} />
        )}
      </Form>
      {error && (
        <Errors>
          {!Array.isArray(error) ? (
            <ErrorButton type="button" onClick={removeErrors}>
              {error}
            </ErrorButton>
          ) : (
            error.map(err => (
              <ErrorButton key={err.msg} type="button" onClick={removeErrors}>
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
