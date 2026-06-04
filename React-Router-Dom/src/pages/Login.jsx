import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
// yup : thư vienj hỗ trợ validate form
// formik : thư viện hỗ trợ quản lý form , kết hợp với yup để validate form
// forimk:
// lưu trữ giá trị của form trong state của formik
// theo dỗi sự thay đổi của form thông qua onChange, onBlur
// onBlur: sự kiện khi người dùng rời khỏi input (tương tự như onFocusOut trong javascript thuần) thường dùng validate form
// hiển thị error message khi validate form không thành công
// xử lý submit form thông qua onSubmit của formik

//MOKC data user info : admin và user thường
const MOCK_USER = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123456zZ",
    role: "admin",
    name: "Admin ",
  },
  {
    id: 2,
    email: "user@example.com",
    password: "123456zZ",
    role: "user",
    name: "User",
  },
];
// định nghĩa yup schema để validate form login
const LoginSchema = Yup.object({
  email: Yup.string().email("Email không hợp lệ").required("Email là bắt buộc"),
  password: Yup.string()
    .min(6, "Mật khẩu phải có ít nhất 6 ký tự")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, 'Mật khẩu phải chứa ít nhất 1 ký tự viết hoa, 1 ký tự viết thường và 1 chữ số')
    .required("Mật khẩu là bắt buộc"),
});

const Login = () => {
  const navigate = useNavigate();

  // defin formik form: cần 3 tham số chính
  // intitalValues: giá trị ban đầu của form
  // validationSchema: yup schema để validate form
  // onSubmit: hàm xử lý khi submit form
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      //values: email, password người dùng nhập vào form
      //check user từ MOCK_USER
      // tương lai: gọi API login để check user
      const account = MOCK_USER.find(
        (user) =>
          user.email === values.email && user.password === values.password,
      );
      if (!account) {
        alert("Email hoặc mật khẩu không đúng");
        return;
      }
      // nếu lưu thành công => lưu thông tin user vào localStorage
      // vì localStorage chỉ lưu được string nên cần stringify trước khi lưu
      localStorage.setItem("user", JSON.stringify(account));

      //redirect về trang chủ sau khi login thành công
      navigate("/");
      // Xử lý submit form ở đây
    },
  });

  return (
    <main className="flex flex-col items-center justify-center py-4 px-4 md:px-8 lg:min-h-screen">
      <div className="grid items-center gap-12 max-w-lg lg:grid-cols-2 lg:max-w-6xl">
        <div>
          <h2 className="text-4xl font-bold text-slate-900 !leading-tight lg:text-5xl dark:text-slate-50">
            Seamless Login for Exclusive Access
          </h2>
          <p className="text-base mt-6 text-slate-600 leading-relaxed dark:text-slate-400">
            Immerse yourself in a hassle-free login journey with our intuitively
            designed login form. Effortlessly access your account.
          </p>

          <div className="text-sm mt-6 text-slate-900 lg:mt-12 dark:text-slate-50">
            Don't have an account{" "}
            <a
              href="/register"
              className="text-blue-700 font-medium hover:underline ml-1 dark:text-blue-500"
            >
              Register here
            </a>
          </div>
        </div>

        <div className="max-w-md lg:ml-auto w-full">
          <h1 className="text-slate-900 text-3xl font-bold mb-10 dark:text-slate-50">
            Sign in
          </h1>

          <form className="space-y-6" onSubmit={formik.handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="mb-2 text-slate-900 font-medium text-sm inline-block dark:text-slate-50"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                {...formik.getFieldProps("email")}
                placeholder="john@readymadeui.com"
                className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-50 dark:bg-neutral-800 dark:outline-neutral-700"
              />
              {/* Hiển thị error message nếu validate form không thành công */}
                {/* // touched: đã tương tác với input hay chưa (onBlur)
                    // ý nghĩa: nếu user đã tương tác với input và có lỗi validate từ yup
                    // => hiển thị error message */}
              {
                formik.touched.email && formik.errors.email && (
                  <p className="text-sm text-red-500 mt-1">{formik.errors.email}</p>
                )
              }
            </div>
            <div>
              <label
                htmlFor="password"
                className="mb-2 text-slate-900 font-medium text-sm inline-block dark:text-slate-50"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                {...formik.getFieldProps("password")}
                placeholder="••••••••"
                className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-50 dark:bg-neutral-800 dark:outline-neutral-700"
              />
              {/* hiển thị error message nếu validate form không thành công */}
              {
                formik.touched.password && formik.errors.password && (
                  <p className="text-sm text-red-500 mt-1">{formik.errors.password}</p>
                )
              }
            </div>

            <div className="flex items-start flex-wrap gap-2">
              <label className="flex items-center group has-[input:checked]:text-slate-900">
                <input
                  id="remember"
                  name="remember"
                  type="checkbox"
                  required
                  className="sr-only"
                />
                {/* Custom box */}
                <span
                  className="flex h-4 w-4 shrink-0 items-center justify-center rounded outline-1 outline-slate-300 dark:outline-neutral-700
                              bg-white dark:bg-neutral-800
                              group-has-[input:checked]:bg-blue-600
                              group-has-[input:checked]:outline-blue-600
                              group-focus-within:outline-2
                              group-focus-within:outline-blue-600"
                  aria-hidden="true"
                >
                  {/* Checkmark */}
                  <svg
                    className="size-3 text-white opacity-0 group-has-[input:checked]:opacity-100"
                    viewBox="0 0 12 10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M1 5l3 3 7-7" />
                  </svg>
                </span>
                <span className="ml-3 text-sm text-slate-700 dark:text-slate-300">
                  Remember me
                </span>
              </label>

              <a
                href="#"
                className="ml-auto text-sm font-medium text-blue-700 dark:text-blue-500 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
              >
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-3.5 text-sm rounded-md font-semibold cursor-pointer text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              Sign in
            </button>
          </form>

          <div className="my-8 flex items-center gap-4">
            <hr className="w-full border-slate-300 dark:border-neutral-700" />
            <p className="text-sm text-slate-700 text-center dark:text-slate-300">
              or
            </p>
            <hr className="w-full border-slate-300 dark:border-neutral-700" />
          </div>

          <div>
            <a
              href="#"
              className="w-full flex items-center justify-center gap-2.5 py-2 px-3.5 text-sm rounded-md font-semibold text-slate-900 border border-slate-300 bg-white hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-slate-50 dark:border-neutral-700 dark:bg-neutral-800 dark:hover:bg-neutral-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-[18px]"
                viewBox="0 0 512 512"
                aria-hidden="true"
              >
                <path
                  fill="#fbbd00"
                  d="M120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308H52.823C18.568 144.703 0 198.922 0 256s18.568 111.297 52.823 155.785h86.308v-86.308C126.989 305.13 120 281.367 120 256z"
                  data-original="#fbbd00"
                />
                <path
                  fill="#0f9d58"
                  d="m256 392-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216C305.044 385.147 281.181 392 256 392z"
                  data-original="#0f9d58"
                />
                <path
                  fill="#31aa52"
                  d="m139.131 325.477-86.308 86.308a260.085 260.085 0 0 0 22.158 25.235C123.333 485.371 187.62 512 256 512V392c-49.624 0-93.117-26.72-116.869-66.523z"
                  data-original="#31aa52"
                />
                <path
                  fill="#3c79e6"
                  d="M512 256a258.24 258.24 0 0 0-4.192-46.377l-2.251-12.299H256v120h121.452a135.385 135.385 0 0 1-51.884 55.638l86.216 86.216a260.085 260.085 0 0 0 25.235-22.158C485.371 388.667 512 324.38 512 256z"
                  data-original="#3c79e6"
                />
                <path
                  fill="#cf2d48"
                  d="m352.167 159.833 10.606 10.606 84.853-84.852-10.606-10.606C388.668 26.629 324.381 0 256 0l-60 60 60 60c36.326 0 70.479 14.146 96.167 39.833z"
                  data-original="#cf2d48"
                />
                <path
                  fill="#eb4132"
                  d="M256 120V0C187.62 0 123.333 26.629 74.98 74.98a259.849 259.849 0 0 0-22.158 25.235l86.308 86.308C162.883 146.72 206.376 120 256 120z"
                  data-original="#eb4132"
                />
              </svg>
              Sign in with Google
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
