import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import { useAppDispatch } from "../../hooks";
import { signOut } from "../../store";

export const SignOut = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSignOut = () => {
    dispatch(signOut());
    navigate("/auth");
  };

  return (
    <Button
      type="text"
      className="text-base font-medium"
      onClick={handleSignOut}
    >
      <LogoutOutlined />
    </Button>
  );
};
