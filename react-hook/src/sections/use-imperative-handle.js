import React, {
  useRef,
  useState,
  useImperativeHandle,
  forwardRef,
} from "react";

function Child(props, ref) {
  const inputRef = useRef(null);
  useImperativeHandle(ref, () => ({
    focus() {
      inputRef.current.focus();
    },
    setValue(value) {
      inputRef.current.value = value;
    },
  }));
  return (
    <>
      <input type="text" ref={inputRef} />
    </>
  );
}
Child = forwardRef(Child);

const Parent = () => {
  const childRef = useRef(null);
  const [value, setValue] = useState("");

  const changeHandler = (e) => {
    const value = e.target.value;
    setValue(value);
    childRef.current.setValue(value);
  };

  return (
    <>
      <div>
        parent:
        <input type="text" value={value} onChange={changeHandler} />
      </div>
      <div>
        children: <Child ref={childRef} />
      </div>
    </>
  );
};

export default Parent;
