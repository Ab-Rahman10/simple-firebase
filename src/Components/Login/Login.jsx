import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../../firebase.init";
import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState(null);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleSignInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
        setUser(null);
      });
  };

  const handleSignInWithGithub = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignOut = () => {
    signOut(auth).then(() => {
      setUser(null);
    });
  };

  return (
    <div>
      {user ? (
        <button className="py-1 px-3 rounded-md border" onClick={handleSignOut}>
          Sign Out
        </button>
      ) : (
        <>
          <button
            className="py-1 px-3 rounded-md border"
            onClick={handleSignInWithGoogle}
          >
            Sign in with google
          </button>
          <button
            className="py-1 px-3 rounded-md border"
            onClick={handleSignInWithGithub}
          >
            Sign in with github
          </button>
        </>
      )}

      {user && (
        <div>
          <h3>{user.displayName}</h3>
          <p>{user.email}</p>
          <img src={user.photoURL} alt="image" />
        </div>
      )}
    </div>
  );
};

export default Login;
