import type { ComponentProps } from "react";

import "../Form.css";

const FormField = ({ className, style, ...props }: ComponentProps<"div">) => {
  const classNames = ["c-formField__inner", className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="c-formField">
      <div className={classNames} style={style} {...props} />
    </div>
  );
};

const FormLabel = ({ className, ...props }: ComponentProps<"label">) => {
  const classNames = ["c-formField__label", className]
    .filter(Boolean)
    .join(" ");

  return <label className={classNames} {...props} />;
};

type FormTextProps = {
  maxLength?: number;
  minLength?: number;
} & ComponentProps<"input">;

const FormText = ({
  className,
  maxLength,
  minLength,
  style,
  ...props
}: FormTextProps) => {
  const classNames = [props.value && "is--filled", className]
    .filter(Boolean)
    .join(" ");
  return (
    <div className="c-form__text" style={style}>
      <input className={classNames} type="text" {...props} />
    </div>
  );
};

const FormTextarea = ({ className, ...props }: ComponentProps<"textarea">) => {
  const classNames = [props.value && "is--filled", className]
    .filter(Boolean)
    .join(" ");
  return (
    <div className="c-form__textarea">
      <textarea className={classNames} {...props} />
    </div>
  );
};

type FormSelectProps = {
  options: { value: string; label: string }[];
} & ComponentProps<"select">;

const FormSelect = ({ className, options, ...props }: FormSelectProps) => {
  const classNames = [props.value && "is--selected", className]
    .filter(Boolean)
    .join(" ");
  return (
    <div className="c-form__select">
      <select className={classNames} {...props}>
        <option value="">選択してください</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

const FormCheckBox = ({
  children,
  className,
  style,
  ...props
}: ComponentProps<"input">) => {
  const classNames = ["c-form__checkbox", className].filter(Boolean).join(" ");

  return (
    <div className={classNames}>
      <label htmlFor={props.id} style={style}>
        <input type="checkbox" {...props} />
        {children}
      </label>
    </div>
  );
};

const FormRadio = ({
  children,
  className,
  style,
  ...props
}: ComponentProps<"input">) => {
  const classNames = ["c-form__radio", className].filter(Boolean).join(" ");

  return (
    <div className={classNames}>
      <label htmlFor={props.id} style={style}>
        <input type="radio" {...props} />
        {children}
      </label>
    </div>
  );
};

const FormChoiceCard = ({
  children,
  className,
  style,
  ...props
}: ComponentProps<"input">) => {
  const classNames = ["c-form__choiceCard", className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classNames}>
      <label htmlFor={props.id} style={style}>
        <input {...props} />
        {children}
      </label>
    </div>
  );
};

export {
  FormField,
  FormLabel,
  FormText,
  FormTextarea,
  FormSelect,
  FormCheckBox,
  FormRadio,
  FormChoiceCard,
};
