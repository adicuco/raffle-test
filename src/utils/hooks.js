import { useEffect } from "react";
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
