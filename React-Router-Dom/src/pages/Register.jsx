import React from 'react'

const Register = () => {
return (
      <main className="bg-gray-50 flex items-center md:h-screen p-4 md:p-8 dark:bg-neutral-900">
         <div className="w-full max-w-3xl max-md:max-w-md mx-auto">
            <div
               className="grid gap-x-8 gap-y-12 w-full p-6 shadow-sm rounded-lg overflow-hidden bg-white border border-slate-300 md:grid-cols-2 sm:p-8 dark:bg-neutral-800 dark:border-neutral-700">
               <div>
                  <div className="mb-10">
                     <h2 className="text-slate-900 text-2xl font-bold dark:text-slate-50">Instant Access</h2>
                  </div>

                  <div className="flex flex-col gap-4 w-max">
                     <a href="#"
                        className="inline-flex items-center justify-center gap-2.5 py-2 px-3.5 text-sm rounded-md font-semibold text-slate-900 border border-slate-300 bg-white hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-slate-50 dark:border-neutral-600 dark:bg-neutral-700 dark:hover:bg-neutral-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-[18px] overflow-visible" viewBox="0 0 512 512"
                           aria-hidden="true">
                           <path fill="#fbbd00"
                              d="M120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308H52.823C18.568 144.703 0 198.922 0 256s18.568 111.297 52.823 155.785h86.308v-86.308C126.989 305.13 120 281.367 120 256z"
                              data-original="#fbbd00" />
                           <path fill="#0f9d58"
                              d="m256 392-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216C305.044 385.147 281.181 392 256 392z"
                              data-original="#0f9d58" />
                           <path fill="#31aa52"
                              d="m139.131 325.477-86.308 86.308a260.085 260.085 0 0 0 22.158 25.235C123.333 485.371 187.62 512 256 512V392c-49.624 0-93.117-26.72-116.869-66.523z"
                              data-original="#31aa52" />
                           <path fill="#3c79e6"
                              d="M512 256a258.24 258.24 0 0 0-4.192-46.377l-2.251-12.299H256v120h121.452a135.385 135.385 0 0 1-51.884 55.638l86.216 86.216a260.085 260.085 0 0 0 25.235-22.158C485.371 388.667 512 324.38 512 256z"
                              data-original="#3c79e6" />
                           <path fill="#cf2d48"
                              d="m352.167 159.833 10.606 10.606 84.853-84.852-10.606-10.606C388.668 26.629 324.381 0 256 0l-60 60 60 60c36.326 0 70.479 14.146 96.167 39.833z"
                              data-original="#cf2d48" />
                           <path fill="#eb4132"
                              d="M256 120V0C187.62 0 123.333 26.629 74.98 74.98a259.849 259.849 0 0 0-22.158 25.235l86.308 86.308C162.883 146.72 206.376 120 256 120z"
                              data-original="#eb4132" />
                        </svg>
                        Sign up with Google
                     </a>
                     <a href="#"
                        className="inline-flex items-center justify-center gap-2.5 py-2 px-3.5 text-sm rounded-md font-semibold text-slate-900 border border-slate-300 bg-white hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-slate-50 dark:border-neutral-600 dark:bg-neutral-700 dark:hover:bg-neutral-600">
                        <svg xmlns="http://www.w3.org/2000/svg"
                           className="size-[18px] overflow-visible fill-black dark:fill-white" viewBox="0 0 22.773 22.773"
                           aria-hidden="true">
                           <path
                              d="M15.769 0h.162c.13 1.606-.483 2.806-1.228 3.675-.731.863-1.732 1.7-3.351 1.573-.108-1.583.506-2.694 1.25-3.561C13.292.879 14.557.16 15.769 0zm4.901 16.716v.045c-.455 1.378-1.104 2.559-1.896 3.655-.723.995-1.609 2.334-3.191 2.334-1.367 0-2.275-.879-3.676-.903-1.482-.024-2.297.735-3.652.926h-.462c-.995-.144-1.798-.932-2.383-1.642-1.725-2.098-3.058-4.808-3.306-8.276v-1.019c.105-2.482 1.311-4.5 2.914-5.478.846-.52 2.009-.963 3.304-.765.555.086 1.122.276 1.619.464.471.181 1.06.502 1.618.485.378-.011.754-.208 1.135-.347 1.116-.403 2.21-.865 3.652-.648 1.733.262 2.963 1.032 3.723 2.22-1.466.933-2.625 2.339-2.427 4.74.176 2.181 1.444 3.457 3.028 4.209z"
                              data-original="#000000" />
                        </svg>
                        Sign up with Apple
                     </a>
                     <a href="#"
                        className="inline-flex items-center justify-center gap-2.5 py-2 px-3.5 text-sm rounded-md font-semibold text-slate-900 border border-slate-300 bg-white hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-slate-50 dark:border-neutral-600 dark:bg-neutral-700 dark:hover:bg-neutral-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-[18px] overflow-visible fill-blue-600"
                           viewBox="0 0 167.657 167.657" aria-hidden="true">
                           <path
                              d="M83.829.349C37.532.349 0 37.881 0 84.178c0 41.523 30.222 75.911 69.848 82.57v-65.081H49.626v-23.42h20.222V60.978c0-20.037 12.238-30.956 30.115-30.956 8.562 0 15.92.638 18.056.919v20.944l-12.399.006c-9.72 0-11.594 4.618-11.594 11.397v14.947h23.193l-3.025 23.42H94.026v65.653c41.476-5.048 73.631-40.312 73.631-83.154 0-46.273-37.532-83.805-83.828-83.805z"
                              data-original="#010002" />
                        </svg>
                        Sign up with Facebook
                     </a>
                  </div>
               </div>

               <div>
                  <div className="mb-10">
                     <h1 className="text-slate-900 text-2xl font-bold dark:text-slate-50">Create an account
</h1>
                  </div>
                  <form className="space-y-6">
                     <div>
                        <label htmlFor="email"
                           className="mb-2 text-slate-900 font-medium text-sm inline-block dark:text-slate-50">Email</label>
                        <input type="email" id="email" name="email" placeholder="john@readymadeui.com" required
                           className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-50 dark:bg-neutral-700 dark:outline-neutral-600" />
                     </div>
                     <div>
                        <label htmlFor="password"
                           className="mb-2 text-slate-900 font-medium text-sm inline-block dark:text-slate-50">Password</label>
                        <input type="password" id="password" name="password" placeholder="••••••••" required
                           className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-50 dark:bg-neutral-700 dark:outline-neutral-600" />
                     </div>
                     <div>
                        <label htmlFor="confirm-password"
                           className="mb-2 text-slate-900 font-medium text-sm inline-block dark:text-slate-50">Confirm
                           password</label>
                        <input type="password" id="confirm-password" name="confirm-password" placeholder="••••••••" required
                           className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-50 dark:bg-neutral-700 dark:outline-neutral-600" />
                     </div>

                     <div className="flex items-start flex-wrap gap-2">
                        <label className="flex items-center group has-[input:checked]:text-slate-900">
                           <input id="tmc" name="tmc" type="checkbox" required className="sr-only" />
                           {/* Custom box */}
                           <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded outline-1 outline-slate-300 dark:outline-neutral-600
                              bg-white dark:bg-neutral-700
                              group-has-[input:checked]:bg-blue-600
                              group-has-[input:checked]:outline-blue-600
                              group-focus-within:outline-2
                              group-focus-within:outline-blue-600" aria-hidden="true">
                              {/* Checkmark */}
                              <svg className="size-3 text-white opacity-0 group-has-[input:checked]:opacity-100"
                                 viewBox="0 0 12 10" fill="none" stroke="currentColor" strokeWidth="2">
                                 <path d="M1 5l3 3 7-7" />
                              </svg>
                           </span>
                           <span className="ml-3 text-sm text-slate-700 dark:text-slate-300">
                              I accept the
                           </span>
                        </label>

                        <a href="/terms-and-conditions"
                           className="ml-1 text-sm font-medium text-blue-700 dark:text-blue-500 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">
                           Terms and Conditions
                        </a>
                     </div>

                     <button type="submit"
                        className="w-full py-2 px-3.5 text-sm rounded-md font-semibold cursor-pointer tracking-wide text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
                        Create an account</button>
                  </form>

                  <div className="mt-6 text-slate-900 text-sm text-center dark:text-slate-50">Already have an account? <a href="/login"
                     className="text-blue-700 hover:underline ml-1 font-medium dark:text-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">
                     Login here</a>
                  </div>
               </div>
            </div>
         </div>
      </main>
   );
}

export default Register