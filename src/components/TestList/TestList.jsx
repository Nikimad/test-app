import TestLink from "../TestLink";
import s from "./TestList.module.scss";

const TestList = ({ tests }) => (
  <ul className={s.list}>
    {tests.map((test) => (
      <TestLink key={test.id} test={test} />
    ))}
  </ul>
);

export default TestList;
