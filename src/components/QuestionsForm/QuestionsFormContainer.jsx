import { useState } from "react";
import QuestionsForm from "./QuestionsForm";

const QuestionsFormContainer = () => {
    const [isDraft, setIsDraft] = useState(false);

    const handleDraft = () => setIsDraft(true);

    const handleDisdraft = () => setIsDraft(false);

    return <QuestionsForm isDraft={isDraft} onDraft={handleDraft} onDisdraft={handleDisdraft} />;
};

export default QuestionsFormContainer;
