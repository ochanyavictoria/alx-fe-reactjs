import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/FormikForm";

function App() {
  return (
    <div className="p-6">
      {/* Controlled Components Form */}
      <RegistrationForm />

      <hr className="my-6" />

      {/* Formik Form */}
      <FormikForm />
    </div>
  );
}

export default App;
