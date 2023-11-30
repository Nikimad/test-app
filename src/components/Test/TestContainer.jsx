"use client";

import * as Yup from "yup";
import { useMemo } from "react";
import Test from "./Test";

const TestContainer = ({ test }) => {
  const { initialValues, validationSchema } = useMemo(
    () =>
      test.questions.reduce(
        (acc, question) => {
          acc.initialValues[`question_${question.id}`] =
            question.question_type === "multiplie" ? [] : "";

          acc.validationSchema[`question_${question.id}`] =
            question.question_type === "number"
              ? Yup.number().test(
                  "Number question",
                  "Wrong answer",
                  (value) => value === question.answer
                )
              : question.question_type === "single"
              ? Yup.string().test(
                  "Single answer",
                  "Wrong answer",
                  (value) =>
                    value ===
                    question.answers.find(({ is_right }) => is_right).text
                )
              : Yup.array().test(
                  "Multiplie answer",
                  "Wrong answer",
                  (values) => {
                    const sampleValues = question.answers.reduce(
                      (acc, answer) => {
                        if (answer.is_right) acc.push(answer.text);
                        return acc;
                      },
                      []
                    );

                    return (
                      values.length === sampleValues.length &&
                      values.every((value) => sampleValues.includes(value))
                    );
                  }
                );
          return acc;
        },
        { initialValues: {}, validationSchema: {} }
      ),
    []
  );

  const handleSubmit = (values) => console.log(values);

  return (
    <Test
      test={test}
      initialValues={initialValues}
      validationSchema={Yup.object(validationSchema)}
      onSubmit={handleSubmit}
    />
  );
};

export default TestContainer;
