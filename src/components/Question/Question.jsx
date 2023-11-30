import { ErrorMessage } from "formik";
import s from "./Question.module.scss";

const Question = ({ field, isValid, question }) => (
  <div className={s.question__container}>
    {question.question_type === "number" ? (
      <label className={s.question}>
        <span className={s.question__label}>{question.title}: </span>
        <input {...field} type="number" />
        <ErrorMessage name={`question_${question.id}`} />
      </label>
    ) : (
      <fieldset className={s.question}>
        <legend className={s.question__label}>{question.title}: </legend>
        {question.answers.map((answer) => (
          <label key={answer.id} className={s.question__answer}>
            <input
              {...field}
              type={question.question_type === "single" ? "radio" : "checkbox"}
              value={answer.text}
            />
            {answer.text}
          </label>
        ))}
        <br />
        <ErrorMessage name={`question_${question.id}`} />
      </fieldset>
    )}
  </div>
);

export default Question;
