import { ErrorMessage, Field, Form, Formik } from "formik";
import Select from "../Select";

const QuestionsForm = ({ isDraft, onDraft, onDisdraft }) =>
  !isDraft ? (
    <Form className="form">
      <h2>Questions</h2>
      <Select
        name="question_type"
        label="Question type"
        options={[
          { label: "Single", value: "single" },
          { label: "Multiplie", value: "multiplie" },
          { label: "Number", value: "number" },
        ]}
      />
      <button type="button" onClick={onDraft}>
        Draft question
      </button>
    </Form>
  ) : (
    <Formik initialValues={{ title: "" }}>
      <Form className="form">
        <h2>Question draft</h2>
        <label>
          Title
          <Field name="title" className="input" />
          <ErrorMessage name="title" />
        </label>
        <button type="submit">
          Create question
        </button>
        <button type="button" onClick={onDisdraft}>
          Cancel
        </button>
      </Form>
    </Formik>
  );

export default QuestionsForm;
