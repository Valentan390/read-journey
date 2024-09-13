import { FC } from "react";
import SignUpAndSignIn from "../../components/SignUpAndSignIn/SignUpAndSignIn";

const LoginPage: FC = () => {
  return (
    <main>
      <section>
        <div className="container">
          <SignUpAndSignIn />
        </div>
      </section>
    </main>
  );
};

export default LoginPage;
