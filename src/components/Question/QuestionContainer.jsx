import { useField } from "formik";
import Question from "./Question";

const QuestionContainer = ({ question }) => {
  const [field, meta] = useField(`question_${question.id}`);

  return (
    <Question
      field={field}
      isValid={!Boolean(meta.error)}
      question={question}
    />
  );
};

export default QuestionContainer;
