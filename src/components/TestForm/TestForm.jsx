"use client";

import { Form, Field, ErrorMessage } from "formik";

const TestForm = () => (
  <Form>
    <h2>Test</h2>
    <label>
      Title
      <Field name="title" className="input" />
      <ErrorMessage name="title" />
    </label>
  </Form>
);

export default TestForm;
