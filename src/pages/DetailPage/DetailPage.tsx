import DetailPageStyled from "./DetailPageStyled";

const DetailPage = (): React.ReactElement => {
  return (
    <>
      <DetailPageStyled className="micro">
        <img
          className="micro__image"
          src="/images/river.webp"
          alt="detail"
          width={273}
          height={191}
        ></img>
        <div className="micro__info">
          <h2 className="micro__title">Title</h2>
          <h3 className="micro__author">Author</h3>
          <h3 className="micro__genre">Genre</h3>
          <h3 className="micro__date">10/9/2023</h3>
          <p className="micro__story">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            architecto ducimus ea! Omnis voluptatum quae id odio doloribus
            consectetur, voluptas rerum expedita iure magni optio suscipit,
            minus veniam, aspernatur soluta.
          </p>
        </div>
      </DetailPageStyled>
    </>
  );
};

export default DetailPage;
