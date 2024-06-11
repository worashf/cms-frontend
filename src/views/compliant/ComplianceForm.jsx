import React, { useState, useEffect } from "react";
import { useFormik, Form, FormikProvider } from 'formik';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import {
  Stack,
  Box,
  TextField,
  IconButton,
  Button,
  InputAdornment,
  FormControl, InputLabel, Select, MenuItem, FormHelperText,  List,
  ListItem,
  ListItemText,
  Typography

} from '@mui/material';
import { MdDelete } from "react-icons/md";

import { useGetInstitutionsQuery } from '../../store/services/institution.service';
import { useCreateCompliantMutation } from "store/services";
const compliantCategory = [
    "የቅጥር",
         "የምደባ",
          "የደምወዝ",
        "የጥቅማጥቅም",
         "የደረጃ እድገት",
        "የዝውውር",
           "የዲሲፕሊን እርምጃ ውሳኔ"
];

const ComplianceForm = () => {
  const fileInputRef = React.createRef();
  const navigate  = useNavigate()
  const [isTextFieldVisible, setIsTextFieldVisible] = useState(false);
  const { data } = useGetInstitutionsQuery({});
  const institutionsData = data?.data;
  const [files, setFiles] = useState([]);


  const loginUser = localStorage.getItem('login-user');
  const loginUserObject = JSON.parse(loginUser);
  
  const [createCompliant, { data: complaiantData, isSuccess, isError, isLoading, error }] = useCreateCompliantMutation();



  useEffect(() => {
    if (isSuccess) {
      toast.success('ቅሬታዎ በትክክል ተልኳል፣ እናመሰግናለን!');
      navigate('/admin');
    }
    if(isError){
      toast.error('በትክክል አልተቀመጠም እንደገና ይመዝገቡ!');
    }
  }, [isSuccess, navigate]);


  const SignupSchema = Yup.object().shape({
    fullName: Yup.string()
     .required('ስምዎን ያስገቡ'),
   email: Yup.string()
     .email('ትክክለኛ የኢሜል አድራሻ ያስገቡ')
     .required('የኢሜል አድራሻ ያስገቡ'),
     phoneNumber: Yup.string()
     .required('ስልክ ቁጥር ያስገቡ'),
     employeeInstitution: Yup.string()
     .required('የተቋም  ይምረጡ'),
compliantCategory: Yup.string().required("የቅሬታ አይነት ይምረጡ"),
compliantSourceInstitution: Yup.string().required("ቅሬታውን የፈጸመውን መስሪያ ቤት ይምረጡ"),
compliantEventDate: Yup.date(),
compliantTitle: Yup.string()
.min(50, 'አጭር ነው, በትንሹ 20 ቃላትን ይጻፉ')
.max(100, 'ረዘመ, እስከ 100 ቃላትን ይጻፉ ')
.required("የቅሬታውን ርእስ ያስገቡ"),

compliantDescription: Yup.string()
.min(100, 'አጭር ነው, በትንሹ 100 ቃላትን ይጻፉ')
.max(1000, 'ረዘመ, እስከ 2000 ቃላትን ይጻፉ ').
required("የቅሬታው ጭብጥ ባጭሩ ይጻፉ"),

wantToBeDone:  Yup.string()
.min(100, 'አጭር ነው, በትንሹ 100 ቃላትን ይጻፉ')
.max(2000, 'ረዘመ, እስከ 2000 ቃላትን ይጻፉ ')
.required("እንዲደረግልዎት የሚፈልጉን በአጭሩ ይጻፉ"),
 });





  const formik = useFormik({
    initialValues: {
      fullName: `${loginUserObject?.user?.employee?.firstName}  ${loginUserObject?.user?.employee?.middleName} ${loginUserObject?.user?.employee?.lastName}`,
      email : loginUserObject?.user.email,
      phoneNumber: loginUserObject?.user?.employee?.phoneNumber,
      compliantCategory: '',
      compliantTitle: '',
      compliantDescription: '',
      compliantSourceInstitution: '',
      compliantEventDate: Date.now,
      wantToBeDone: '',
      employeeInstitution: loginUserObject?.user?.employee?.institution?._id,
      employeeId:  loginUserObject?.user?.employee?._id

  
    },
    validationSchema: SignupSchema,
    onSubmit: async(values, {resetForm}) => {
      const data = new FormData();
      data.append('compliantTitle', values.compliantTitle);
      data.append('compliantCategory', values.compliantCategory);
      data.append('compliantDescription', values.compliantDescription);
      data.append('compliantSourceInstitution', values.compliantSourceInstitution);
      data.append('compliantEventDate', values.compliantEventDate);
      data.append('wantToBeDone', values.wantToBeDone);
      data.append('employeeInstitution', values.employeeInstitution);
      data.append('employeeId', values.employeeId);
      files.forEach(file => data.append('compliants', file)); 
      try {
    await createCompliant({ body: data });

      } catch (error) {
        toast.error('በትክክል አልተቀመጠም እንደገና ይመዝገቡ!');
      }
      resetForm({ values: '' });
    },
  });




  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
    setFieldValue('image', [...files, ...selectedFiles]);
    // Reset the input value to allow the same file to be selected again
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleRemoveFile = (index) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);
    setFieldValue('image', updatedFiles);
  };

  const {
    errors,   touched, handleSubmit, isSubmitting, getFieldProps,values, setFieldValue
    } = formik;
  console.log(values.compliantEventDate,"date")
  return (
    <div className="mx-auto mt-8 max-w-5xl full rounded-md bg-white p-6 shadow-lg">
      <h2 className="mb-4 text-2xl font-bold text-gray-800">የቅሬታ ማቅረቢያ ቅጽ</h2>
      <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <div className="md:flex justify-between gap-4">
        <div className="mb-4">
        <TextField
                fullWidth
               label="ሙሉ ስም *"
                {...getFieldProps('fullName', {
                  disabled: true 
                })}
                error={Boolean(touched.fullName && errors.fullName)}
                helperText={touched.fullName && errors.fullName}
              />
         </div>
         {isTextFieldVisible && (  <div className="mb-4">
           <TextField
                fullWidth
               label=" የጠያቂው ሰራተኛ  ተቋም*"
                {...getFieldProps('employeeInstitution')}
                error={Boolean(touched.employeeInstitution && errors.employeeInstitution)}
                helperText={touched.employeeInstitution && errors.employeeInstitution}
              />
        </div> )}
        <div className="mb-4">
        <TextField
                fullWidth
                autoComplete="email"
                type="email"
                label="የኢሜል አድራሻ"
                {...getFieldProps('email')}
                error={Boolean(touched.email && errors.email)}
                helperText={touched.email && errors.email}
              />
        </div>
        <div className="mb-4">
        <TextField
                fullWidth
                autoComplete="phoneNumber"
                type="text"
                label="ስልክ ቁጥር *"
                {...getFieldProps('phoneNumber')}
                error={Boolean(touched.phoneNumber && errors.phoneNumber)}
                helperText={touched.phoneNumber && errors.phoneNumber}
              />
        </div>
        </div>

        <div className="md:flex justify-between gap-4">
        <div className="w-full md:w-30p flex flex-col mb-4">
      <FormControl variant="filled"fullWidth error={Boolean(touched.compliantCategory && errors.compliantCategory)}>
      <InputLabel id="compliant-category-label">     የቅሬታ አይነት</InputLabel>
      <Select
        labelId="institution-category-label"
        id="compliantCategory"
        {...getFieldProps('compliantCategory')}
      >
        {compliantCategory && compliantCategory.map((compliant, index) => (
          <MenuItem key={index} value={compliant}>
            {compliant}
          </MenuItem>
        ))}
      </Select>
      {touched.compliantCategory && errors.compliantCategory && (
        <FormHelperText>{errors.compliantCategory}</FormHelperText>
      )}
    </FormControl>
        </div>

        <div className="w-full md:w-30p flex flex-col mb-4">
          <FormControl variant="filled" fullWidth error={Boolean(touched.compliantSourceInstitution && errors.compliantSourceInstitution)}>
      <InputLabel id="institution-label">የፈጸመው መስሪያ ቤት</InputLabel>
      <Select
        labelId="compliant-source-institution-label"
        id="compliantSourceInstitution"
        {...getFieldProps('compliantSourceInstitution')}
      >
        {institutionsData && institutionsData.map((institute) => (
          <MenuItem key={institute?._id} value={institute?._id}>
            {institute?.institutionName}
          </MenuItem>
        ))}
      </Select>
      {touched.compliantSourceInstitution&& errors.compliantSourceInstitution && (
        <FormHelperText>{errors.compliantSourceInstitution}</FormHelperText>
      )}
    </FormControl>


        </div>
        <div className="mb-4">
        <FormControl fullWidth>
  <InputLabel htmlFor="complaintEventDate"  
  sx={{ paddingBottom: '8px' }}
  shrink={true}>ቅሬታው ተፈጸመበትን ቀን </InputLabel>
  <TextField
    fullWidth
    variant="filled"
    type="date"
    id="complaintEventDate"
    {...getFieldProps('compliantEventDate')}
    error={Boolean(touched.compliantEventDate && errors.compliantEventDate)}
    helperText={
      touched.compliantEventDate && errors.compliantEventDate
        ? errors.compliantEventDate
        : "የቅሬታው የተፈጸመበትን  ቀን ያስገቡ"
    }
  />
</FormControl>
  
        </div>
  

        </div>
     
        <div className="mb-4">

<TextField
                fullWidth
                autoComplete="compliantTitle "
                type="text"
                label="የቅሬታው ርእስ"
                {...getFieldProps('compliantTitle')}
                error={Boolean(touched.compliantTitle && errors.compliantTitle )}
                helperText={touched.compliantTitle  && errors.compliantTitle}
              />

        </div>
        <div className="mb-4">
             <TextField
                   fullWidth
                    autoComplete="compliantTitle "
                type="text"
           
            label="የቅሬታው ጭብጥ ባጭሩ"
            multiline
            rows={10}
            variant="outlined"
            {...getFieldProps('compliantDescription')}
            error={Boolean(touched.compliantDescription && errors.compliantDescription )}
            helperText={touched.compliantDescription  && errors.compliantDescription}
          />
        </div>

        <div className="mb-4">
  

<TextField
        fullWidth
                    autoComplete="compliantTitle "
                type="text"
            label="እንዲደረግልዎት የሚፈልጉን በአጭሩ"
            multiline
            rows={10}
            variant="outlined"
            {...getFieldProps('wantToBeDone')}
            error={Boolean(touched.wantToBeDone && errors.wantToBeDone )}
            helperText={touched.wantToBeDone  && errors.wantToBeDone}
          />
        </div>

        <div className="mb-4">
        <FormControl fullWidth>
  <InputLabel htmlFor="complaintEventDate"  
  sx={{ paddingBottom: '8px' }}
  shrink={true}>አጋዥ መረጃዎችን ያያይዙ </InputLabel>
  <TextField
                variant="filled"
                type="file"
                inputProps={{ multiple: true }}
                onChange={handleFileChange}
                error={Boolean(touched.image && errors.image)}
                helperText={touched.image && errors.image}
                inputRef={fileInputRef}
              />
         {files.length > 0 && (
            <div className="my-3 text-lg">
              <Typography variant="body2" color="textSecondary">
              ያያዙት መረጃ ብዛት: {files.length}
              </Typography>
              <List>
                {files.map((file, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={file.name} />
                    <IconButton edge="end" onClick={() => handleRemoveFile(index)}>
                      <MdDelete />
                    </IconButton>
                  </ListItem>
                ))}
              </List>
            </div>
          )}
</FormControl>
        </div>
  
        <Button
              
                sx={{ mt: 5, fontSize: 15, width:100, alignContent:"flex-end"  }}
                size="medium"
                type="submit"
                variant="contained"
                loading={isSubmitting}
                className="w-full bg-indigo-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          
              >
           አስቀምጥ
              </Button>
        </Form>
        </FormikProvider>
    </div>
  );
};

export default ComplianceForm;
