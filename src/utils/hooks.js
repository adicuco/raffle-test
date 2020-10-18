import { useEffect, useState } from "react";
import { navigate } from "@reach/router";
import { useSelector } from "react-redux";

export const useAuth = () => {
  const { isAuth } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isAuth) {
      navigate("/challenges");
    }
  }, [isAuth]);
};

export const useKeyPress = (targetKeyCode) => {
  const [keyPressed, setKeyPressed] = useState(false);

  useEffect(() => {
    let prevKeyCode = "";

    const downHandler = ({ keyCode }) => {
      if (prevKeyCode === targetKeyCode) return;

      if (keyCode === targetKeyCode) {
        setKeyPressed(true);
        prevKeyCode = keyCode;
      }
    };

    const upHandler = ({ keyCode }) => {
      if (keyCode === targetKeyCode) {
        setKeyPressed(false);
        prevKeyCode = "";
      }
    };

    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);

    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, [targetKeyCode]);

  return keyPressed;
};
