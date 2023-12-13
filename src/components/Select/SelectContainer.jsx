import { useRef, useState, useEffect, useMemo } from "react";
import debounce from "lodash/debounce";
import Select from "./Select";
import { useField } from "formik";

const SelectContainer = ({
  disabled,
  name,
  options,
  label
}) => {
  const [{ value }, _, { setValue }] = useField(name);

  const optionsValues = useMemo(
    () => options.map(({ value }) => value),
    [options]
  );

  const comboboxRef = useRef(null);

  const inputRef = useRef({
    filtredOptions: [],
    input: "",
    lastInput: "",
    lastIndex: 0,
  });

  const [isExpanded, setIsExpanded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(optionsValues.indexOf(value));

  const handleLabelClick = () => {
    comboboxRef.current.focus();
  };

  const handleChange = (index) => {
    let finalIndex =
      index >= 0 && index < optionsValues.length
        ? index
        : index > 0
        ? optionsValues.length - 1
        : 0;

    if (value !== optionsValues[finalIndex]) {
      setActiveIndex(finalIndex);
      setValue(optionsValues[finalIndex]);
    }
  };

  const handleInput = debounce((input) => {
    if (input !== inputRef.current.lastInput) {
      inputRef.current.filtredOptions = optionsValues.filter((option) =>
        option.startsWith(input)
      );
      inputRef.current.lastInput = input;
    }

    const nextLastIndex = inputRef.current.filtredOptions.indexOf(value) + 1;

    inputRef.current.lastIndex =
      nextLastIndex >= inputRef.current.filtredOptions.length
        ? 0
        : nextLastIndex;

    if (inputRef.current.filtredOptions.length !== 0) {
      handleChange(
        optionsValues.indexOf(
          inputRef.current.filtredOptions[inputRef.current.lastIndex]
        )
      );
    }

    inputRef.current.input = "";
  }, 100);

  const handleToggleListbox = () => {
    setIsExpanded((isExpanded) => !isExpanded);
  };

  const handleComboboxClick = () => {
    setIsExpanded((isExpanded) => !isExpanded);
  };

  const handleOptionPointerUp = () => {
    if (isExpanded) {
      handleChange(activeIndex);
      setIsExpanded(false);
    }
  };

  const handleOptionPointerDown = (e) => e.preventDefault();

  const handleMouseEnter = (index) => () => {
    if (activeIndex !== index) setActiveIndex(index);
  };

  const handleKeyDown = (e) => {
    const isAltKey = e.altKey;

    switch (e.code) {
      case "ArrowDown":
        e.preventDefault();
        isAltKey ? handleToggleListbox() : handleChange(activeIndex + 1);
        break;
      case "ArrowUp":
        e.preventDefault();
        isAltKey ? handleToggleListbox() : handleChange(activeIndex - 1);
        break;
      case "PageDown":
        e.preventDefault();
        isExpanded
          ? handleChange(optionsValues.length - 1)
          : handleChange(activeIndex + 3);
        break;
      case "PageUp":
        e.preventDefault();
        isExpanded ? handleChange(0) : handleChange(activeIndex - 3);
        break;
      case "End":
        e.preventDefault();
        handleChange(optionsValues.length - 1);
        break;
      case "Home":
        e.preventDefault();
        handleChange(0);
        break;
      case "Enter":
        isExpanded ? handleOptionPointerUp() : setIsExpanded(true);
        break;
      case "Space":
        setIsExpanded(true);
        break;
      default:
        inputRef.current.input += e.key;
        handleInput(inputRef.current.input);
        break;
    }
  };

  const handleDissmiss = (e) => {
    if (e.code === "Escape" || e.type === "click" || e.type === "blur") {
      const actualIndex = optionsValues.indexOf(value);
      if (isExpanded) setIsExpanded(false);
      if (activeIndex !== actualIndex) setActiveIndex(actualIndex);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleDissmiss);
    return () => {
      document.removeEventListener("click", handleDissmiss);
    };
  }, [handleDissmiss]);

  useEffect(() => {
    document.addEventListener("keydown", handleDissmiss);
    return () => {
      document.removeEventListener("keydown", handleDissmiss);
    };
  }, [handleDissmiss]);

  return <Select
      disabled={disabled}
      comboboxRef={comboboxRef}
      options={options}
      name={name}
      label={label}
      value={value}
      isExpanded={isExpanded}
      activeIndex={activeIndex}
      onLabelClick={handleLabelClick}
      onComboboxClick={handleComboboxClick}
      onOptionPointerUp={handleOptionPointerUp}
      onOptionPointerDown={handleOptionPointerDown}
      onMouseEnter={handleMouseEnter}
      onKeyDown={handleKeyDown}
      onBlur={handleDissmiss}
    />
};

export default SelectContainer;
