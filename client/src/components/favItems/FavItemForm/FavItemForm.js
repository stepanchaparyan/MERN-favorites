import React, { useContext, useState, useEffect, useRef } from 'react';
import { useIntl } from 'react-intl';
import FavItemContext from '../../../context/favItemContext/favItemContext';
import {
  Container,
  Title,
  Form,
  Input,
  ButtonSubmit,
  CancelButton,
  Errors,
  ErrorButton,
  Select,
  Option,
  DefaultOption
} from './FavItemFormStyled';
import { FAVITEM, FORM } from '../../../constants';
import localization from './localization';
import { useOnClickOutside } from '../../hooks/clickOutSide';

const { INPUT, SELECT } = FORM;
const { DEFAULT_VALUES } = FAVITEM;

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
  useOnClickOutside(container, () => toggle_Form(false));

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
      <Form onSubmit={e => onsubmit(e)}>
        <Input
          type={INPUT.TYPE.TEXT}
          placeholder={formatMessage(localization.author)}
          name={INPUT.NAME.AUTHOR}
          value={author}
          onChange={e => onchange(e)}
        />
        <Input
          type={INPUT.TYPE.TEXT}
          placeholder={formatMessage(localization.title)}
          name={INPUT.NAME.TITLE}
          value={title}
          onChange={e => onchange(e)}
          required
        />
        <Select value={category} name={INPUT.NAME.CATEGORY} onChange={e => onchange(e)}>
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
        <ButtonSubmit>
          {editFavItem !== null
            ? formatMessage(localization.update)
            : formatMessage(localization.add)}
        </ButtonSubmit>
        {editFavItem && (
          <CancelButton onClick={cancelEdit}>{formatMessage(localization.cancel)}</CancelButton>
        )}
      </Form>
      {error && (
        <Errors>
          {!Array.isArray(error) ? (
            <ErrorButton type={INPUT.TYPE.BUTTON} onClick={e => removeErrors(e)}>
              {error}
            </ErrorButton>
          ) : (
            error.map(err => (
              <ErrorButton key={err.msg} type={INPUT.TYPE.BUTTON} onClick={e => removeErrors(e)}>
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
