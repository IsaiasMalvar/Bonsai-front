import { useNavigate } from "react-router-dom";
import MicroForm from "../../components/Form/MicroForm";
import useMicros from "../../hooks/useMicros/useMicros";
import { useAppDispatch } from "../../store";
import CreateMicroPageStyled from "./CreateMicroPageStyled";
import { MicroStructure } from "../../store/types";
import { createMicroActionCreator } from "../../store/micros/microsSlice";
import ContainerStyled from "../../components/shared/ContainerStyled";

const CreateMicroPage = (): React.ReactElement => {
  const { createMicro } = useMicros();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const actionOnSubmit = async (newMicro: Partial<MicroStructure>) => {
    const micro = await createMicro(newMicro);

    dispatch(createMicroActionCreator(micro as MicroStructure));
    navigate("/home");
  };
  return (
    <ContainerStyled>
      <CreateMicroPageStyled className="create-page">
        <h1 className="create-page__title"> Add your micro</h1>
        <MicroForm actionOnSubmit={actionOnSubmit} />
      </CreateMicroPageStyled>
    </ContainerStyled>
  );
};

export default CreateMicroPage;
