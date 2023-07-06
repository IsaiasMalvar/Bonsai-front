import { useNavigate } from "react-router-dom";
import ContainerStyled from "../../components/shared/ContainerStyled";
import { useAppSelector } from "../../store";
import useMicros from "../../hooks/useMicros/useMicros";
import MicroForm from "../../components/Form/MicroForm";
import { MicroStructure } from "../../store/types";
import ModifyMicroPageStyled from "./ModifyMicroPageStyled";

const ModifyMicroPage = (): React.ReactElement => {
  const currentRoute = useAppSelector(
    (state) => state.microsStore.currentMicro
  );
  const { modifyMicro } = useMicros();

  const navigate = useNavigate();

  const actionOnSubmit = async (
    microModify: MicroStructure | Partial<MicroStructure>
  ) => {
    await modifyMicro(microModify as MicroStructure);

    navigate("/home");
  };

  return (
    <ModifyMicroPageStyled className="modify">
      <ContainerStyled>
        <h1 className="modify-page__title">Modify your micro</h1>
        <MicroForm actionOnSubmit={actionOnSubmit} micro={currentRoute} />
      </ContainerStyled>
    </ModifyMicroPageStyled>
  );
};

export default ModifyMicroPage;
