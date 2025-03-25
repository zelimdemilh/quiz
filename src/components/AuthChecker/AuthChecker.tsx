import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLazyGetClientByTokenQuery } from "../../sevices"; // Обновить путь к запросам

export const AuthChecker = () => {
  const navigate = useNavigate();
  const [getClientByToken] = useLazyGetClientByTokenQuery();

  useEffect(() => {
    const checkAuth = async () => {
      const user = localStorage.getItem("user");

      // Если пользователь уже авторизован
      if (user) {
        const parsedUser = JSON.parse(user);

        try {
          // Проверка действительности токена
          await getClientByToken({ id: parsedUser.id }).unwrap();

          // Если пользователь авторизован, редиректим его на главную или личный кабинет
          if (
            window.location.pathname === "/auth" ||
            window.location.pathname === "/signup"
          ) {
            navigate("/"); // или другой защищенный путь
          }
        } catch (error) {
          console.error("Ошибка проверки токена:", error);
          localStorage.removeItem("user"); // Если ошибка с токеном, удаляем его
          navigate("/auth");
        }
      } else {
        // Если пользователь не авторизован и пытается попасть на защищенную страницу
        if (
          window.location.pathname !== "/auth" &&
          window.location.pathname !== "/signup"
        ) {
          navigate("/auth");
        }
      }
    };

    checkAuth();
  }, [getClientByToken, navigate]);

  return null;
};
