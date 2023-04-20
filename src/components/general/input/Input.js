import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import NumberFormat from "react-number-format";
import clsx from "classnames";

const useClickOutside = (handler) => {
  const domNode = useRef();

  useEffect(() => {
    const maybeHandler = (event) => {
      if (!domNode.current.contains(event.target || event.target.childNodes)) {
        handler();
      }
    };

    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });

  return domNode;
};

const Input = ({
  placeholder,
  name,
  required,
  value,
  label,
  type,
  onChangeFunc,
  isFocused,
  isLoading,
  isError,
  currency,
  isDisabled,
  prefix,
  icon,
  labelClasses,
  extraElement,
  isRequired,
  inputClassName,
  leftIcon,
  ...rest
}) => {
  const [active, setActive] = useState(false);
  const [alterBlueBorder, setAlterBlueBorder] = useState(false);
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const inputRef = useRef();
  const prefixRef = useRef();

  const domNode = useClickOutside(() => {
    setActive(false);
  });

  useEffect(() => {
    if (!isFocused) return;
    inputRef.current.focus();
    setActive(true);
    setAlterBlueBorder(false);
  }, [isFocused]);

  useEffect(() => {
    if (!isError) return setError(false);
    setError(true);
  }, [isError]);

  useEffect(() => {
    if (prefix && type !== "number") {
      setActive(true);
      setAlterBlueBorder(true);
    }
  }, [prefix, type]);

  return (
    <div className="w-full flex flex-col justify-start items-start gap-[5px]">
      {label && (
        <label
          className={clsx(
            labelClasses,
            "general-input-label relative text-grey-dark text-[13px] font-light "
          )}
        >
          {label}{" "}
          {isRequired && <span className="text-red text-sm -mt-1 ">*</span>}
        </label>
      )}

      <div
        className={`relative flex flex-col justify-start items-center h-full w-full`}
        ref={domNode}
      >
        <div
          className={`relative h-[40px] w-full ${
            isDisabled ? "bg-grey-disabled !text-grey-fade " : "bg-white"
          } rounded-[5px] flex  space-x-1 items-center justify-between  font-normal outline-none capitalize tracking-wider focus:outline-none transition-all duration-150 ease-in-out whitespace-nowrap  text-base leading-relaxed border border-solid shadow-none text-left 
        ${
          isDisabled
            ? "border-grey-disabled"
            : error
            ? "!border-red"
            : active && !alterBlueBorder
            ? "border-blue"
            : "hover:bg-grey-whitesmoke border-grey-border"
        }
        ${isLoading && "pointer-events-none"}
        `}
          onClick={() => {
            setActive(true);
            setAlterBlueBorder(false);
          }}
          ref={domNode}
        >
          {leftIcon && (
            <div className="h-full flex mr-1 justify-center items-center w-8">
              <span
                className={`h-full w-12 absolute top-0 left-0 flex justify-center items-center cursor-pointer z-30`}
              >
                {leftIcon}
              </span>
            </div>
          )}

          {type === "number" ? (
            <div
              className={clsx("w-full h-full flex justify-start items-center", {
                "pl-3": currency,
              })}
            >
              {currency && <span>{currency}</span>}
              <NumberFormat
                ref={inputRef}
                value={value}
                name={name}
                required={required}
                placeholder={placeholder}
                thousandSeparator
                prefix={prefix}
                className={`text-lg md:text-[13px] p-3 ease-in-out h-full w-full z-10 focus:outline-none focus:border-none rounded-[5px] bg-transparent placeholder:text-grey-border`}
                inputMode="numeric"
                onValueChange={(number) =>
                  onChangeFunc(number.value, { name, value: number.value })
                }
                {...rest}
              />
            </div>
          ) : (
            <input
              ref={inputRef}
              type={
                type === "numberInput"
                  ? "number"
                  : type === "password"
                  ? showPassword
                    ? "text"
                    : "password"
                  : "text"
              }
              value={value}
              onChange={({ target }) => {
                onChangeFunc(target.value, { name, value: target.value });
              }}
              placeholder={placeholder}
              className={`text-lg md:text-[13px] p-3 ease-in-out h-full w-full z-10 focus:outline-none focus:border-none rounded-[5px] bg-transparent placeholder:text-grey ${
                isDisabled
                  ? "bg-grey-disabled text-grey-fade"
                  : !value
                  ? ""
                  : value?.length > 0 || value > 0
                  ? "text-black"
                  : "placeholder:text-grey"
              } ${
                type === "password" || icon ? "mr-3" : ""
              } ${inputClassName} `}
              style={{
                paddingLeft: prefix && prefixRef?.current?.offsetWidth + 15,
              }}
              {...rest}
            />
          )}

          {isDisabled && (
            <span
              className={`h-full w-full absolute top-0 right-0 flex justify-center items-center cursor-pointer z-10 `}
            ></span>
          )}

          {prefix && type !== "number" && (
            <span
              ref={prefixRef}
              className={clsx(
                "absolute left-2 lowercase max-w-[300px] overflow-x-hidden ",
                {
                  "text-grey-light": !value,
                  "text-black": value,
                }
              )}
            >
              {prefix}
            </span>
          )}

          <div>
            <div className="h-full flex mx-1 justify-center items-center">
              {icon && (
                <span
                  className={`h-full w-12 absolute top-0 right-0 flex justify-center items-center cursor-pointer z-30`}
                >
                  {icon}
                </span>
              )}
              {extraElement && <div className="z-30">{extraElement}</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.any,
  value: PropTypes.any,
  label: PropTypes.string,
  type: PropTypes.any,
  onChangeFunc: PropTypes.func,
  isFocused: PropTypes.any,
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
  currency: PropTypes.any,
  isDisabled: PropTypes.bool,
  prefix: PropTypes.string,
  rest: PropTypes.object,
  icon: PropTypes.element,
  labelClasses: PropTypes.string,
  extraElement: PropTypes.any,
  isRequired: PropTypes.bool,
  inputClassName: PropTypes.string,
  leftIcon: PropTypes.element,
};

export default Input;
