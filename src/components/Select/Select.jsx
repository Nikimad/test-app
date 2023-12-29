import cn from "classnames";
import s from "./Select.module.scss";

const Select = ({
  readOnly,
  disabled,
  comboboxRef,
  label,
  options,
  name,
  value,
  isExpanded,
  activeIndex,
  onLabelClick,
  onComboboxClick,
  onOptionPointerUp,
  onOptionPointerDown,
  onMouseEnter,
  onKeyDown,
  onBlur,
}) => {
  return (
    <div className={s.select__container}>
      <label id={`${name}-label`} onClick={disabled ? () => {} : onLabelClick}>
        {label}
      </label>
      <div
        ref={comboboxRef}
        name={name}
        onClick={disabled || readOnly ? () => {} : onComboboxClick}
        onKeyDown={disabled || readOnly ? () => {} : onKeyDown}
        role="combobox"
        aria-labelledby={`${name}-label`}
        aria-controls={name}
        aria-expanded={disabled || readOnly ? false : isExpanded}
        aria-activedescendant={value}
        aria-disabled={disabled}
        aria-readonly={readOnly}
        tabIndex={disabled ? undefined : "0"}
        className={cn("input", s.select__combobox)}
        onBlur={disabled || readOnly ? () => {} : onBlur}
      >
        {options.find((option) => option.value === value).label}
      </div>
      {disabled || readOnly ? null : (
        <ul
          role="listbox"
          id={name}
          aria-hidden={!isExpanded}
          aria-labelledby={`${name}-label`}
          tabIndex="-1"
          className={s.select__listbox}
        >
          {options.map((option, index) => (
            <li
              className={cn(s.select__option, {
                [s.select__option_active]: activeIndex === index,
              })}
              key={index}
              role="option"
              aria-selected={option.value === value}
              onMouseEnter={onMouseEnter(index)}
              onPointerUp={onOptionPointerUp}
              onPointerDown={onOptionPointerDown}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
