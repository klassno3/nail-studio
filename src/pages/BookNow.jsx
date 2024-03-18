import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

const BookNow = () => {
  const [success, setSuccess] = useState(false);

  const formik = useFormik({
    initialValues: {
      fullName: "",
      PhoneNumber: "",
      email: "",
      serviceType: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("Full name is required*"),
      PhoneNumber: Yup.string().required("Phone number is required*"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email address is required*"),
      serviceType: Yup.string().required("Service type is required*"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const res = await fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        if (!res.ok) {
          throw new Error("Failed to book service");
        }

        resetForm();
        console.log("Service booked successfully");
      } catch (error) {
        console.error("Error:", error);
      }
    },
  });

  const closeModal = () => {
    setSuccess(false);
  };

  return (
    <div className="w-full flex h-svh mt-[3em] items-center justify-center bg-gradient-to-br from-accentRed-meduim via-red-400 to-accentRed-dark px-2">
      <div className="border w-full lg:w-1/3 border-accentPink-light bg-white rounded-md shadow-lg">
        <div className="flex flex-col gap-4 p-6">
          <h1 className="text-[2.2em] -mb-2 font-satisfy text-accentRed-dark">
            Book Service
          </h1>
          <hr className="border border-gray-400" />
          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col gap-4 text-black"
          >
            <div className="w-full">
              <input
                className="w-full bg-transparent p-2 caret-accentRed-dark border border-gray-400 rounded-sm"
                id="fullName"
                placeholder="Full name"
                type="text"
                {...formik.getFieldProps("fullName")}
              />
              {formik.touched.fullName && formik.errors.fullName ? (
                <div className="text-red-600 text-xs mt-1">
                  {formik.errors.fullName}
                </div>
              ) : null}
            </div>
            <div className="w-full">
              {/* <label htmlFor="email">Email:</label> */}
              <input
                className="w-full bg-transparent p-2 caret-accentRed-dark border border-gray-400 rounded-sm"
                id="PhoneNumber"
                placeholder="Phone number"
                type="number"
                {...formik.getFieldProps("PhoneNumber")}
              />
              {formik.touched.PhoneNumber && formik.errors.PhoneNumber ? (
                <div className="text-red-600 text-xs mt-1">
                  {formik.errors.PhoneNumber}
                </div>
              ) : null}
            </div>
            <div className="w-full">
              <input
                className="w-full bg-transparent p-2 caret-accentRed-dark border border-gray-400 rounded-sm"
                id="email"
                placeholder="Email"
                type="email"
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-600 text-xs mt-1">
                  {formik.errors.email}
                </div>
              ) : null}
            </div>
            <div className="bg-red-300">
              <select
                className="w-full h-10 p-2 text-gray-400"
                name="serviceType"
                id="serviceType"
                defaultValue=""
                value={formik.values.serviceType}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                {...formik.getFieldProps("serviceType")}
              >
                <option value="" disabled hidden>
                  Select service
                </option>
                <option value="manicure">Manicure</option>
                <option value="pedicure">Spa Predicure</option>
              </select>
            </div>
            {formik.touched.serviceType && formik.errors.serviceType ? (
              <div className="text-red-600 text-xs -mt-3">
                {formik.errors.serviceType}
              </div>
            ) : null}
            <button
              className="w-full rounded-sm bg-accentRed-dark hover:bg-accentRed-dark/90 text-white p-2  hover:bg-primary-light"
              type="submit"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
      {success && (
        <div
          onClick={closeModal}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
        >
          <div className="bg-white p-8 rounded-md shadow-md">
            <p className="text-green-600 text-lg">
              Form submitted successfully!
            </p>
            <button
              className="mt-4 bg-accentRed-dark text-white px-4 py-2 rounded-md hover:bg-accentRed-dark/90"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default BookNow;
