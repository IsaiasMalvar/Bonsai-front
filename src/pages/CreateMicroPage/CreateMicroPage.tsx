import MicroForm from "../../components/Form/MicroForm";
import CreateMicroPageStyled from "./CreateMicroPageStyled";

const CreateMicroPage = (): React.ReactElement => {
  return (
    <CreateMicroPageStyled className="create-page">
      <h1 className="create-page__title"> Add your micro</h1>
      <MicroForm />
    </CreateMicroPageStyled>
  );
};

export default CreateMicroPage;
