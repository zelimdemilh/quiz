import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLazyGetClientByTokenQuery } from "../../sevices";
import { useAppSelector } from "../../hooks";

export const AuthChecker = () => {
  const navigate = useNavigate();
  const userId = useAppSelector((state) => state.userSlice.id);
  const [getClientByToken] = useLazyGetClientByTokenQuery();

  useEffect(() => {
    const checkAuth = async () => {
      const user = localStorage.getItem("user");

      if (!user) {
        navigate("/auth");
        return;
      }

      const parsedUser = JSON.parse(user);

      try {
        await getClientByToken({ id: parsedUser.id }).unwrap();
      } catch (error) {
        console.error("Ошибка проверки токена:", error);
        localStorage.removeItem("user");
        navigate("/auth");
      }
    };

    checkAuth();
  }, [getClientByToken, navigate]);

  return null;
};
