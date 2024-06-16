import React , {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { Form, FormikProvider, useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux'
import {
  Box,
  IconButton,
  InputAdornment,
  TextField,
  Button,
} from '@mui/material';
import { Icon } from '@iconify/react';

import InputField from "components/fields/InputField";
import Checkbox from "components/checkbox";
import {useLoginMutation} from '../../store/services/user.service'
import {userLogin} from '../../store/slices/user.slice'


export default function SignIn() {
  const navigate = useNavigate();
  const dispatch =  useDispatch()

    //? Login User
    const [login, { data, isSuccess, isError, isLoading, error }] = useLoginMutation()

  const [showPassword, setShowPassword] = useState(false);
  const LoginSchema = Yup.object().shape({
    phoneNumber: Yup.string().required(' ስልክ ቁጥርዎን ያስገቡ!'),
    password: Yup.string().required('የሚስጥር ቁጥር ያስገቡ')
  });

  useEffect(() => {
    if (isSuccess) {
      toast.success('በትክክል ገብተዋል፣ እናመሰግናለን!');
      // dispatch(userLogin())
      navigate('/admin/compliants');
    }
    if(isError){
      toast.error('ችግር ስለተፈጠረ, እንደገና ይሞክሩ!');
    }
  }, [isSuccess, navigate]);

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: LoginSchema,
    onSubmit: async(values) => {
      try {
        const response = await login({ credentials: values });
        dispatch(userLogin(response?.data))
      } catch (error) {
      
      }
    },
  });

  const {
    errors, touched, isSubmitting, handleSubmit, getFieldProps,
  } = formik;



  const handleSignupRedirect = () => {
    navigate("/auth/sign-up"); // Replace with your actual signup route
  };

  return (
    <div className="flex h-full w-full items-center justify-center  mb-16 px-2 md:px-0 lg:mb-10 lg:justify-start">
      {/* Sign in section */}
      <div className="flex flex-col items-center w-full max-w-full mt-[10vh] md:pl-4 lg:pl-0 xl:max-w-[600px]">
       <h4 className="mb-2.5 text-xl font-bold text-navy-800 dark:text-white">
        የልደታ ክፍለ ከተማ ፐብሊክ ሰርቪስና የሰው ሃብት ልማት ጽ/ቤት የቅሬታ ማስተናገጃ ሥርዓት
        </h4>
        <p className="mb-9 ml-1 text-base text-gray-700">
          ከሰው ሀብት አስተዳደር ጋር የተያያዘ ማንኘውንም አይነት ቅሬታ በዚሀ መተግበሪያ ያቅርቡ ፈጣን ምላሽ በዚሁ
          መተግበሪያ ያገኛሉ።
        </p>
        <div className="mb-6 flex items-center gap-3">
          <div className="h-px w-full bg-gray-200 dark:bg-navy-700" />
          <p className="text-base text-gray-600 dark:text-white"> ይግቡ </p>
          <div className="h-px w-full bg-gray-200 dark:bg-navy-700" />
        </div>
        <FormikProvider value={formik}>
        <Form autoComplete="off" noValidate onSubmit={handleSubmit}>


        <TextField
                fullWidth
                autoComplete="phoneNumber"
                variant="standard"
                type="text"
                label="ስልክ ቁጥር"
                {...getFieldProps('phoneNumber')}
                error={Boolean(touched.phoneNumber && errors.phoneNumber)}
                helperText={touched.phoneNumber && errors.phoneNumber}
              />
          
        {/* Password */}
            <TextField
              fullWidth
              autoComplete="current-password"
              variant="standard"
              type={showPassword ? 'text' : 'password'}
              label="የሚስጥር ቁጥር"
              {...getFieldProps('password')}
              error={Boolean(touched.password && errors.password)}
              helperText={touched.password && errors.password}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword((prev) => !prev)}
                    >
                      {showPassword ? (
                        <Icon icon="eva:eye-fill" />
                      ) : (
                        <Icon icon="eva:eye-off-fill" />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
        {/* Checkbox */}
        {/* <div className="mb-4 flex items-center justify-between px-2">
          <a
            className="text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
            href=" "
          >
            የሚስጥር ቁጥር እረሳሁ?
          </a>
        </div> */}
        <Button
              sx={{ mt: 5, fontSize: 15 }}
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              loading={isSubmitting}
              className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
            >
              {isSubmitting ? 'loading...' : 'ግባ'}
            </Button>
            </Form>
            </FormikProvider>
        <div className="mt-4">
          <span className="text-lg font-medium text-navy-700 dark:text-gray-600">
          አለተመዘገቡም?
          </span>
          <button
            onClick={handleSignupRedirect}
            className="ml-1 text-lg font-medium text-brand-500 hover:text-brand-600 dark:text-white"
          >
            አካውንት ይፍጠሩ
          </button>

   
        </div>
    
      </div>
    </div>
  );
}
