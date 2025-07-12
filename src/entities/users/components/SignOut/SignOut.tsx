import { LogoutOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

import { useUserActions } from '../../api';

export const SignOut = () => {
  const navigate = useNavigate();
  const { signOut } = useUserActions();

  const handleSignOut = () => {
    signOut();
    void navigate('/auth');
  };

  return (
    <Button type="text" className="text-base font-medium" onClick={handleSignOut}>
      <LogoutOutlined />
    </Button>
  );
};
