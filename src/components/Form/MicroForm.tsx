import { useState } from "react";
import MicroFormStyled from "./MicroFormStyled";
import { MicroStructure } from "../../store/types";
import { useAppSelector } from "../../store";

interface MicroFormProps {
  actionOnSubmit: (micro: Partial<MicroStructure> | MicroStructure) => void;
  micro?: MicroStructure;
}

const MicroForm = ({
  actionOnSubmit,
  micro,
}: MicroFormProps): React.ReactElement => {
  const { username } = useAppSelector((state) => state.userStore);
  const current = new Date();
  const currentDate = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  const [microData, setMicroData] = useState<Partial<MicroStructure>>({
    dateOfCreation: currentDate,
    genre: micro ? micro.genre : "",
    image: micro ? micro.image : "",
    isPublic: micro ? micro.isPublic : true,
    title: micro ? micro.title : "",
    story: micro ? micro.story : "",
    author: username,
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

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    actionOnSubmit(
      !micro
        ? microData
        : { ...microData, id: (micro as unknown as MicroStructure).id }
    );
  };

  const isDisabled =
    !microData.image ||
    !microData.story ||
    !microData.title ||
    !microData.genre;

  return (
    <MicroFormStyled
      className="form"
      autoComplete="off"
      onSubmit={handleOnSubmit}
    >
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
      <label htmlFor="author" className="form__label">
        Author
      </label>
      <input
        type="text"
        id="author"
        className="form__input-text form__input-text--author"
        autoComplete="off"
        value={microData.author}
        readOnly
      />
      <label htmlFor="dateOfCreation" className="form__label">
        Publishing Date:
      </label>
      <input
        type="text"
        id="dateOfCreation"
        value={microData.dateOfCreation}
        className="form__input-date"
        readOnly
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
        required
      >
        <option hidden>Select a genre</option>
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
      <button
        type="submit"
        className={`form__button--submit${
          isDisabled || microData.genre === "" ? "-off" : "-on"
        }`}
        disabled={isDisabled}
        aria-label="create-button"
      >
        Make it happen
      </button>
    </MicroFormStyled>
  );
};

export default MicroForm;
