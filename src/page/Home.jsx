import { onAuthStateChanged } from 'firebase/auth';
import React from 'react'
import { auth } from '../utils/firebase-config';

const Home = () => {
    const [isUserLogged, setIsUserLogged] = useState(false);

    useEffect(() => {
        const handleAuthStateChange = () => {
          onAuthStateChanged(auth, (user) => {
            if (user) {
              setIsUserLogged(true);
            } else {
              setIsUserLogged(false);
            }
          });
        };
    
        handleAuthStateChange();
      }, []);
    
  return (
    <div>Home</div>
  )
}

export default Home