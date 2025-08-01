// import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
//
// import { useLazyGetClientByTokenQuery } from '@shared/api';
// import { useAppSelector } from 'src/shared/hooks';
//
// export const AuthChecker = () => {
//   const navigate = useNavigate();
//   const clientId = useAppSelector(state => state.userSlice.id);
//   const [getClientByToken] = useLazyGetClientByTokenQuery();
//
//   useEffect(() => {
//     const checkAuth = async () => {
//       if (clientId) {
//         if (window.location.pathname === '/auth' || window.location.pathname === '/signup') {
//           navigate('/');
//         }
//         return;
//       }
//
//       const user = localStorage.getItem('user');
//
//       if (user) {
//         const parsedUser = JSON.parse(user);
//
//         try {
//           await getClientByToken({ id: parsedUser.id }).unwrap();
//
//           if (window.location.pathname === '/auth' || window.location.pathname === '/signup') {
//             navigate('/');
//           }
//         } catch (error) {
//           console.error('Ошибка проверки токена:', error);
//           localStorage.removeItem('user');
//           navigate('/auth');
//         }
//       }
//       // else {
//       //   if (
//       //     window.location.pathname !== "/auth" &&
//       //     window.location.pathname !== "/signup"
//       //   ) {
//       //     console.log(1);
//       //     navigate("/auth");
//       //   }
//       // }
//     };
//
//     checkAuth();
//   }, [clientId, getClientByToken, navigate]);
//
//   return null;
// };
