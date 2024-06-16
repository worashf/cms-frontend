import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useFormik, Form, FormikProvider } from 'formik';
import {
  Stack,
  Box,
  TextField,
  IconButton,
  Button,
  InputAdornment,
  FormControl, InputLabel, Select, MenuItem, FormHelperText
} from '@mui/material';
import { toast } from 'react-toastify';
import { Icon } from '@iconify/react';
import * as Yup from 'yup';
import { useGetInstitutionsQuery } from '../../store/services/institution.service';
import { useCreateUserMutation } from '../../store/services/user.service';

const institutionCategory = [
  "ወረዳ",
  "ትምህርት",
  "ክ/ከተማ ጽ/ቤቶ"
];

export default function SignIn() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  // const [errors, setErrors] = useState({});

  const { data } = useGetInstitutionsQuery({});
  const institutionsData = data?.data;

  const [createUser, { data: userdata, isSuccess, isError, isLoading, error }] = useCreateUserMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.success('በትክክል ተመዝግበዋል፣ እናመሰግናለን!');
      navigate('/auth/sign-in');
    }
    if(isError){
      toast.error('ችግር ስለተፈጠረ, እንደገና ይመዝገቡ!');
    }
  }, [isSuccess, navigate]);

  const SignupSchema = Yup.object().shape({
     firstName: Yup.string()
      .min(1, 'አጭር ነው')
      .required('ስምዎን ያስገቡ'),
    middleName: Yup.string()
      .min(1, 'አጭር ነው')
      .required('ያባት ስም ያስገቡ'),
      lastName: Yup.string()
      .min(1, 'አጭር ነው')
      .required('የአያት ስም ያስገቡ'),
    email: Yup.string()
      .email('ትክክለኛ የኢሜል አድራሻ ያስገቡ'),
    password: Yup.string()
      .min(6, 'አጭር ነው, በትንሹ ስድስት ያስገቡ')
      .max(10, 'ረዘመ, እስከ አስር')
      .required('የሚስጥር ቁጥር ያስገቡ'),
      phoneNumber: Yup.string()
      .required('ስልክ ቁጥር ያስገቡ'),
      institutionId: Yup.string()
      .required('የተቋም  ይምረጡ'),
      selectedCategory: Yup.string()
      .required('የተቋም ዘርፍ ይምረጡ'),
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      middleName: '',
      lastName:'',
      phoneNumber:'',
      institutionId:'',
      email: '',
      password: '',
    },
    validationSchema: SignupSchema,
    onSubmit: async(values) => {
      await createUser({
        body: values
      })
    },
  });



  const {
  errors,   touched, handleSubmit, isSubmitting, getFieldProps,values
  } = formik;
  const institutions = institutionsData?.filter(institution => institution.institutionCategory == values.selectedCategory);



  const handleSigninRedirect = () => {
    navigate("/auth/sign-in"); // Replace with your actual signup route
  };
  return (
    <div className="flex h-full w-full items-center justify-center mb-16 px-2 md:px-0 lg:mb-10 lg:justify-start">
      <div className="flex flex-col items-center w-full max-w-full mt-[10vh] md:pl-4 lg:pl-0 xl:max-w-[600px]">
        <h4 className="text-xl font-bold text-navy-800 dark:text-white mb-2.5">
          የልደታ ክፍለ ከተማ ፐብሊክ ሰርቪስና የሰው ሃብት ልማት ጽ/ቤት የቅሬታ ማስተናገጃ ሥርዓት
        </h4>
        <p className="text-base text-gray-700 dark:text-white mb-9 ml-1">
          ከሰው ሀብት አስተዳደር ጋር የተያያዘ ማንኘውንም አይነት ቅሬታ በዚሀ መተግበሪያ ያቅርቡ ፈጣን ምላሽ በዚሁ
          መተግበሪያ ያገኛሉ።
        </p>
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-full bg-gray-200 dark:bg-navy-700" />
          <p className="text-lg text-gray-800 dark:text-white">ይመዝገቡ</p>
          <div className="h-px w-full bg-gray-200 dark:bg-navy-700" />
        </div>
        <FormikProvider value={formik}>
        <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <div className="w-full flex flex-col mb-4">
          <FormControl fullWidth error={Boolean(touched.selectedCategory && errors.selectedCategory)}>
      <InputLabel id="institution-label">የተቋም  ዘርፍ</InputLabel>
      <Select
        labelId="institution-label"
        id="selectedCategory"
        label="የተቋም  ዘርፍ"
        {...getFieldProps('selectedCategory')}
      >
        <MenuItem value="">
          <em>የተቋም  ዘርፍ</em>
        </MenuItem>
        {institutionCategory && institutionCategory.map((institute, index) => (
          <MenuItem key={index} value={institute}>
            {institute}
          </MenuItem>
        ))}
      </Select>
      {touched.selectedCategory && errors.selectedCategory && (
        <FormHelperText>{errors.selectedCategory}</FormHelperText>
      )}
    </FormControl>
            <div className="mt-4 w-full">
            <FormControl fullWidth error={Boolean(touched.institutionId && errors.institutionId)}>
      <InputLabel id="institution-label">ተቋም</InputLabel>
      <Select
        labelId="institution-label"
        id="institution"
        label="ተቋም"
        {...getFieldProps('institutionId')}
      >
        <MenuItem value="">
          <em>ተቋም ይምረጡ</em>
        </MenuItem>
        {institutions && institutions.map((institute) => (
          <MenuItem key={institute?._id} value={institute?._id}>
            {institute?.institutionName}
          </MenuItem>
        ))}
      </Select>
      {touched.institutionId && errors.institutionId && (
        <FormHelperText>{errors.institutionId}</FormHelperText>
      )}
    </FormControl>
    </div>
          </div>

          <div className="flex flex-wrap w-full gap-4 mb-4">
            <div className="w-full flex flex-col md:flex-row md:gap-4">
           
             <TextField
                fullWidth
               label="ስም *"
                {...getFieldProps('firstName')}
                error={Boolean(touched.firstName && errors.firstName)}
                helperText={touched.firstName && errors.firstName}
              />

<TextField
                fullWidth
               label="የአባት ስም *"
                {...getFieldProps('middleName')}
                error={Boolean(touched.middleName && errors.middleName)}
                helperText={touched.middleName && errors.middleName}
              />
        
              <TextField
                fullWidth
               label="የአያት ስም *"
                {...getFieldProps('lastName')}
                error={Boolean(touched.lastName && errors.lastName)}
                helperText={touched.lastName && errors.lastName}
              />
            </div>
            <div className="w-full flex flex-col md:flex-row">
            <TextField
                fullWidth
                autoComplete="email"
                type="email"
                label="የኢሜል አድራሻ"
                {...getFieldProps('email')}
                error={Boolean(touched.email && errors.email)}
                helperText={touched.email && errors.email}
              />
      
                   <TextField
                fullWidth
                autoComplete="phoneNumber"
                type="text"
                label="ስልክ ቁጥር *"
                {...getFieldProps('phoneNumber')}
                error={Boolean(touched.phoneNumber && errors.phoneNumber)}
                helperText={touched.phoneNumber && errors.phoneNumber}
              />
          <TextField
                fullWidth
                autoComplete="current-password"
                type={showPassword ? 'text' : 'password'}
                label="የሚስጥር ቁጥር"
                {...getFieldProps('password')}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        edge="end"
                        onClick={() => setShowPassword((prev) => !prev)}
                      >
                        <Icon
                          icon={
                            showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'
                          }
                        />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                error={Boolean(touched.password && errors.password)}
                helperText={touched.password && errors.password}
              />
         
            </div>
          </div>


          <Button
                fullWidth
                sx={{ mt: 5, fontSize: 15 }}
                size="large"
                type="submit"
                variant="contained"
                loading={isSubmitting}
                className="w-full bg-indigo-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          
              >
               አስገባ
              </Button>
          </Form>
          </FormikProvider>
          <div className="mt-4">
          <span className="text-lg font-medium text-navy-700 dark:text-gray-600">
          ተምዝግበዋል?
          </span>
          <button
            onClick={handleSigninRedirect}
            className="ml-1 text-lg font-medium text-brand-500 hover:text-brand-600 dark:text-white"
          >
           ይግቡ
          </button>

   
        </div>
      </div>
    </div>
  );
}
