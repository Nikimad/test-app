"use client";

import { Formik, Form } from "formik";
import Question from "../Question";

const Test = ({ test, initialValues, validationSchema, onSubmit }) => (
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    validateOnBlur={false}
    validateOnChange={false}
    onSubmit={onSubmit}
  >
    <Form>
      <h2>
        {test.title} / id: {test.id}
      </h2>
      {test.questions.map((question) => (
        <Question key={question.id} question={question} />
      ))}
      <button type="submit">Submit</button>
    </Form>
  </Formik>
);

export default Test;
