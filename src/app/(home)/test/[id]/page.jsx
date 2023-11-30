"use client";

import Test from "@/components/Test";

const TestPage = ({ params: { id } }) => {
  const test = {
    questions: [],
  }; //useSelector((state) => testSelectors.selectById(state, id));

  return <Test test={test} />;
};

export default TestPage;
