import { FC } from "react";
import SignUpAndSignIn from "../../components/SignUpAndSignIn/SignUpAndSignIn";

const RegisterPage: FC = () => {
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

export default RegisterPage;
