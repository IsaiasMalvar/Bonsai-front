import ContainerStyled from "../../components/shared/ContainerStyled";
import NotFoundPageStyled from "./NotFoundPageStyled";

const NotFoundPage = (): React.ReactElement => {
  return (
    <ContainerStyled>
      <NotFoundPageStyled>
        <h1 className="title">404</h1>
        <img
          className="not-found__image"
          src="/images/404.jpg"
          width={271}
          height={196}
          alt="Little girl in shock"
        />
        <span className="detail">There is nothing around here</span>
      </NotFoundPageStyled>
    </ContainerStyled>
  );
};

export default NotFoundPage;
