import { JSX, useEffect, useState } from "react";
import { User, PropHello } from "../types"; // we are importing the types we created in a different file

const Hello = ({ name, age }: PropHello): JSX.Element => {
  // React.FC or JSX.Element

  const [user, setUser] = useState<User | null>();
  useEffect(() => {
    setUser({ name: "tycoon", password: "sd" });
  }, []);

  const getInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const target = e.target;
    console.log(target.value);
  };
  return (
    <>
      {" "}
      Hello World {name}, and I am {age}{" "}
      <input onChange={getInput} type="text" />
    </>
  );
};
export default Hello;
