import React, { useEffect, useState } from "react";
import { GoogleLogin } from "react-google-login";
import { useAuth } from "../contexts/AuthContext";
import { useSnackbar } from "notistack";

const CLIENT_ID = "Your CLient ID";

const Modal = (props) => {
  const [loading, setLoading] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const { login, signup, error, setErrorNull } = useAuth();

  const onSuccess = async (response) => {
    try {
      setLoading(true);
      const token = response.tokenId;
      let avitar = `https://avatars.dicebear.com/api/bottts/${token}.svg`;
      const user = await signup(token, avitar);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  const onFailure = (response) => {
    console.log("response", response);
  };

  const onLoginSuccess = async (response) => {
    try {
      setLoginLoading(true);
      const token = response.tokenId;
      const user = await login(token);
      setLoginLoading(false);
    } catch (error) {
      console.log(error);
      setLoginLoading(false);
    }
  };

  const onLoginFailure = (response) => {
    console.log("response", response);
  };

  if (error) {
    enqueueSnackbar(error, {
      variant: "error",
      autoHideDuration: 3000,
    });
    setErrorNull();
  }

  return (
    <>
      {props.show && (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-center justify-between py-2 px-3 border-b rounded-t">
                  <h3 className="text-2xl font-semibold">Login/Register</h3>
                  <button
                    className="p-1 primary-text  font-semibold focus:outline-none"
                    onClick={props.onHide}
                  >
                    <span className="bg-transparent text-4xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                <div className="py-10 sm:px-16 px-10  w-full flex flex-col items-center">
                  <h3 className="text-xl sm:text-2xl font-bold  pb-8">
                    Create your Free Account
                  </h3>

                  <GoogleLogin
                    clientId={CLIENT_ID}
                    render={(renderProps) => (
                      <button
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                        className="py-2 sm:w-72 w-64 flex justify-center items-center primary-bg secondary-text text-center text-base font-semibold shadow-md rounded-lg "
                      >
                        {loading ? (
                          "registering..."
                        ) : (
                          <>
                            <svg
                              width="20"
                              height="20"
                              fill="currentColor"
                              class="mr-2"
                              viewBox="0 0 1792 1792"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M896 786h725q12 67 12 128 0 217-91 387.5t-259.5 266.5-386.5 96q-157 0-299-60.5t-245-163.5-163.5-245-60.5-299 60.5-299 163.5-245 245-163.5 299-60.5q300 0 515 201l-209 201q-123-119-306-119-129 0-238.5 65t-173.5 176.5-64 243.5 64 243.5 173.5 176.5 238.5 65q87 0 160-24t120-60 82-82 51.5-87 22.5-78h-436v-264z"></path>
                            </svg>
                            Sign up with Google
                          </>
                        )}
                      </button>
                    )}
                    buttonText="Login"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={"single_host_origin"}
                  />
                  <br />
                  <GoogleLogin
                    clientId={CLIENT_ID}
                    render={(renderProps) => (
                      <button
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                        className="py-2 sm:w-72 w-64 flex justify-center items-center primary-bg  secondary-text  text-center text-base font-semibold shadow-md rounded-lg "
                      >
                        {loginLoading ? (
                          "logging in..."
                        ) : (
                          <>
                            {" "}
                            <svg
                              width="20"
                              height="20"
                              fill="currentColor"
                              class="mr-2"
                              viewBox="0 0 1792 1792"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M896 786h725q12 67 12 128 0 217-91 387.5t-259.5 266.5-386.5 96q-157 0-299-60.5t-245-163.5-163.5-245-60.5-299 60.5-299 163.5-245 245-163.5 299-60.5q300 0 515 201l-209 201q-123-119-306-119-129 0-238.5 65t-173.5 176.5-64 243.5 64 243.5 173.5 176.5 238.5 65q87 0 160-24t120-60 82-82 51.5-87 22.5-78h-436v-264z"></path>
                            </svg>
                            Sign in with Google
                          </>
                        )}
                      </button>
                    )}
                    buttonText="Login"
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    cookiePolicy={"single_host_origin"}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </>
  );
};

export default Modal;
