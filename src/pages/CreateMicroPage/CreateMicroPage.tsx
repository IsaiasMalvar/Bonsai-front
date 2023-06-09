import Form from "../../components/Form/Form";
import CreateMicroPageStyled from "./CreateMicroPageStyled";

const CreateMicroPage = (): React.ReactElement => {
  return (
    <CreateMicroPageStyled className="create-page">
      <h1 className="create-page__title"> Add your micros</h1>
      <Form />
    </CreateMicroPageStyled>
  );
};

export default CreateMicroPage;
