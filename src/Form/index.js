import "./style.css";

const Form = () => (
    <form className="form form">
        <input className="form__textArea newTask" placeholder="Co jest do zrobienia?" autoFocus />
        <button className="form__button sendTaskBtn">Dodaj zadanie</button>
    </form>
);

export default Form;