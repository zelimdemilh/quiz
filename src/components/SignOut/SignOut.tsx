import { useNavigate } from "react-router-dom";
import { Button } from "antd";

export const SignOut = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem("user");
    setTimeout(() => navigate("/auth"), 0); // Небольшая задержка
  };

  return (
    <Button
      type="text"
      className="text-base font-medium"
      onClick={handleSignOut}
    >
      Выйти из аккаунта
    </Button>
  );
};
