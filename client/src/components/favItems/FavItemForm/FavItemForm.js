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
import { FAVITEM, FORM, EVENTS } from '../../../constants';
import localization from './localization';

const { INPUT, SELECT } = FORM;
const { DEFAULT_VALUES } = FAVITEM;
const { CLICK } = EVENTS;

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
        author: DEFAULT_VALUES.AUTHOR,
        title: DEFAULT_VALUES.TITLE,
        category: DEFAULT_VALUES.CATEGORY,
        description: DEFAULT_VALUES.DESCRIPTION
      });
    }
    document.addEventListener(CLICK, handleClick);
    return () => {
      document.removeEventListener(CLICK, handleClick);
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
          type={INPUT.TYPE.TEXT}
          placeholder={formatMessage(localization.author)}
          name={INPUT.NAME.AUTHOR}
          value={author}
          onChange={onchange}
        />
        <Input
          type={INPUT.TYPE.TEXT}
          placeholder={formatMessage(localization.title)}
          name={INPUT.NAME.TITLE}
          value={title}
          onChange={onchange}
          required
        />
        <Select value={category} name={INPUT.NAME.CATEGORY} onChange={onchange}>
          <DefaultOption value={SELECT.VALUES.OTHER}>
            {formatMessage(localization.selectCategory)}
          </DefaultOption>
          <Option value={SELECT.VALUES.FILM}>{formatMessage(localization.films)}</Option>
          <Option value={SELECT.VALUES.MUSIC}>{formatMessage(localization.music)}</Option>
          <Option value={SELECT.VALUES.BOOKS}>{formatMessage(localization.books)}</Option>
          <Option value={SELECT.VALUES.OTHER}>{formatMessage(localization.other)}</Option>
        </Select>
        <Input
          type={INPUT.TYPE.TEXT}
          placeholder={formatMessage(localization.description)}
          name={INPUT.NAME.DESCRIPTION}
          value={description}
          onChange={onchange}
        />
        <Input
          type={INPUT.TYPE.SUBMIT}
          value={
            editFavItem !== null
              ? formatMessage(localization.update)
              : formatMessage(localization.add)
          }
        />
        {editFavItem && (
          <Input
            onClick={cancelEdit}
            type={INPUT.TYPE.BUTTON}
            value={formatMessage(localization.cancel)}
          />
        )}
      </Form>
      {error && (
        <Errors>
          {!Array.isArray(error) ? (
            <ErrorButton type={INPUT.TYPE.BUTTON} onClick={removeErrors}>
              {error}
            </ErrorButton>
          ) : (
            error.map(err => (
              <ErrorButton key={err.msg} type={INPUT.TYPE.BUTTON} onClick={removeErrors}>
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
