import "./style.css";

const Conteiner = ({ title, body, extraHeadercontent }) => (
    <section className="container">
        <div className="container__header container__header--headerWithButtons">
            <h2 className="container__title">{title}</h2>
            {extraHeadercontent}
        </div>
        <div className="container__body">
            {body}
        </div>
    </section>
);

export default Conteiner;