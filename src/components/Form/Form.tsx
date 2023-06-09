import { useState } from "react";
import FormStyled from "./FormStyled";
import { MicroStructure } from "../../store/types";

const Form = (): React.ReactElement => {
  const [microData, setMicroData] = useState<Partial<MicroStructure>>({
    dateOfCreation: "1999-12-31",
    genre: "",
    image: "",
    isPublic: true,
    title: "",
    story: "",
  });

  const onChangeInputs = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    event.target.id === "isPublic"
      ? setMicroData({
          ...microData,
          isPublic: !microData.isPublic,
        })
      : setMicroData({
          ...microData,
          [event.target.id]: event.target.value,
        });
  };

  return (
    <FormStyled className="form" autoComplete="off" noValidate>
      <label htmlFor="title" className="form__label">
        Title
      </label>
      <input
        type="text"
        id="title"
        className="form__input-text"
        autoComplete="off"
        onChange={onChangeInputs}
        value={microData.title}
      />
      <label htmlFor="publishingDate" className="form__label">
        Publishing Date:
      </label>
      <input
        type="date"
        id="birthdate"
        value={microData.dateOfCreation}
        onChange={onChangeInputs}
        min="1900-01-01"
        className="form__input-date"
      />
      <label htmlFor="isPublic" className="form__label">
        Public
      </label>
      <input
        type="checkbox"
        id="isPublic"
        name="isPublic"
        className="form__checkbox"
        checked={microData.isPublic}
        onChange={onChangeInputs}
      />
      <label htmlFor="image" className="form__label">
        Image
      </label>
      <input
        type="url"
        id="image"
        className="form__input-url"
        autoComplete="off"
        onChange={onChangeInputs}
        value={microData.image}
      />
      <label htmlFor="genre" className="form__label">
        Genre
      </label>
      <select
        name="genre"
        id="genre"
        className="form__select"
        onChange={onChangeInputs}
        value={microData.genre}
      >
        <option value=""></option>
        <option value="Horror">Horror</option>
        <option value="Comedy">Comedy</option>
        <option value="Drama">Drama</option>
        <option value="Fantasy">Fantasy</option>
      </select>
      <label htmlFor="story" className="form__label">
        Micro
      </label>
      <textarea
        name="story"
        id="story"
        className="form__textarea"
        autoComplete="off"
        onChange={onChangeInputs}
        value={microData.story}
      />
      <button className="form__button">Make it happen</button>
    </FormStyled>
  );
};

export default Form;
