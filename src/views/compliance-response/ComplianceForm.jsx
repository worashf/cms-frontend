import React, { useState, useEffect } from "react";
import { useFormik, Form, FormikProvider } from 'formik';
import { useNavigate, useParams } from "react-router-dom";
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import {
  Stack,
  Box,
  TextField,
  IconButton,
  Button,
  InputAdornment,
  FormControl, InputLabel, Select, MenuItem, FormHelperText, Typography
} from '@mui/material';
import { MdDelete } from "react-icons/md";

import { useGetSingleCompliantQuery } from '../../store/services/compliant.service';
import { useCreateCompliantResponseMutation } from '../../store/services/complianceResponse.service';

const summaryAnswers = [
    "ቅሬታው ትክክለኛ ነው",
    "ቅሬታው ትክክለኛ አይደለም"
];

const ComplianceResponseForm = () => {
  const navigate = useNavigate();
  const { compliantId } = useParams();
  const { data: complianceData, error: complianceError, } = useGetSingleCompliantQuery({ compliantId });

  const compliance = complianceData?.data;

  const loginUser = localStorage.getItem('login-user');
  const loginUserObject = JSON.parse(loginUser);

  const [createCompliantResponse, { data: compliantResponseData, isSuccess, isError, isLoading, error }] = useCreateCompliantResponseMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.success('የቅሬታ መልሱ በትክክል ተቀምጧል፣ እናመሰግናለን!');
      navigate('/admin');
    }
    if (isError) {
      toast.error('የቅሬታ መልሱ በትክክል አልተቀመጠም. እንደገና ይሞክሩ!');
    }
  }, [isSuccess, isError, navigate]);

  const ComplianceResponseSchema = Yup.object().shape({
    complianceInvestigated: Yup.string()
      .min(100, 'አጭር ነው, በትንሹ 100 ቃላትን ይጻፉ')
      .max(2000, 'ረዘመ, እስከ 2000 ቃላትን ይጻፉ ')
      .required("ቅሬታው በሚገባ ስለመጣቱ  "),
    investigationFindings: Yup.string()
      .min(100, 'አጭር ነው, በትንሹ 100 ቃላትን ይጻፉ')
      .max(2000, 'ረዘመ, እስከ 2000 ቃላትን ይጻፉ ')
      .required("ቅሬታውን በማጣራት ሂደት ላይ የተደረሰባቸውን ግኝቶች በአጭሩ ይጻፉ"),
    summaryAnswer: Yup.string().required("የማጠቃለያ መልስ ይምረጡ"),
    correctiveAction: Yup.string()
      .min(100, 'አጭር ነው, በትንሹ 100 ቃላትን ይጻፉ')
      .max(2000, 'ረዘመ, እስከ 2000 ቃላትን ይጻፉ '),
    noneValidExplanation: Yup.string()
      .min(100, 'አጭር ነው, በትንሹ 100 ቃላትን ይጻፉ')
      .max(2000, 'ረዘመ, እስከ 2000 ቃላትን ይጻፉ ')
  });

  const formik = useFormik({
    initialValues: {
      complianceInvestigated: '',
      investigationFindings: '',
      summaryAnswer: '',
      correctiveAction: '',
      noneValidExplanation: ''
    },
    validationSchema: ComplianceResponseSchema,
    onSubmit: async (values, { resetForm }) => {
      const compilanceResponse = {
          requesterId: compliance?.requesterEmployee?._id || '',
          complianceId: compliance?._id || '',
          complianceInvestigated: values.complianceInvestigated,
          investigationFindings: values.investigationFindings,
          summaryAnswer: values.summaryAnswer,
          correctiveAction: values.correctiveAction,
          noneValidExplanation: values.noneValidExplanation,
          investigatorId: loginUserObject?.user?.employee?._id || '',
      }
    
      try {
        await createCompliantResponse({ body: compilanceResponse });
 
      } catch (error) {
        console.error('Submission error:', error);
      }
      resetForm({values: ''});
    },
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps, values } = formik;
  console.log(values, "values")

  return (
    <div className="mx-auto mt-8 max-w-5xl full rounded-md bg-white p-6 shadow-lg">
      <h2 className="mb-4 text-2xl font-bold text-gray-800">የቅሬታ መልስ መስጫ ቅጽ</h2>
      <Box sx={{ backgroundColor: '#f9f9f9', padding: '10px', marginBottom: '20px' }}>
        <Typography variant="body1" gutterBottom>
          <strong>የጠያቂው ሙሉ ስም:</strong> {compliance?.requesterEmployee?.firstName} {compliance?.requesterEmployee?.middleName} {compliance?.requesterEmployee?.lastName}
        </Typography>
       {compliance?.requesterEmployee?.email &&( <Typography variant="body1" gutterBottom>
          <strong>ኢሜይል:</strong> {compliance?.requesterEmployee?.email}
        </Typography>
        )}
        <Typography variant="body1" gutterBottom>
          <strong>ስልክ:</strong> {compliance?.requesterEmployee?.phoneNumber}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>የቅሬታው ጭብጥ:</strong> {compliance?.compliantDescription}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>ቅሬታው የተጠየቀበት ቀን:</strong> {new Date(compliance?.createdAt).toLocaleDateString()}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>ከተማ:</strong> አዲስ አበባ
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>ክ/ከተማ:</strong> ልደታ
        </Typography>
      </Box>
      <FormikProvider value={formik}>
        <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <Stack spacing={2}>
          
            <TextField
              fullWidth
              label="ቅሬታው በሚገባ ስለመጣራቱ"
              {...getFieldProps('complianceInvestigated')}
              error={Boolean(touched.complianceInvestigated && errors.complianceInvestigated)}
              helperText={touched.complianceInvestigated && errors.complianceInvestigated}
              multiline
              minRows={4}
            />
            <TextField
              fullWidth
              label="በማጣራቱ ሂደት የተደረሰባቸው ግኝቶች"
              {...getFieldProps('investigationFindings')}
              error={Boolean(touched.investigationFindings && errors.investigationFindings)}
              helperText={touched.investigationFindings && errors.investigationFindings}
              multiline
              minRows={4}
            />

<FormControl fullWidth>
              <InputLabel>የማጠቃለያ መልስ ይምረጡ</InputLabel>
              <Select
                label="የማጠቃለያ መልስ ይምረጡ"
                {...getFieldProps('summaryAnswer')}
                error={Boolean(touched.summaryAnswer && errors.summaryAnswer)}
              >
                {summaryAnswers.map((answer, index) => (
                  <MenuItem key={index} value={answer}>
                    {answer}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText error={Boolean(touched.summaryAnswer && errors.summaryAnswer)}>
                {touched.summaryAnswer && errors.summaryAnswer}
              </FormHelperText>
            </FormControl>
            {values.summaryAnswer === "ቅሬታው ትክክለኛ ነው" && (
              <TextField
                fullWidth
                label="የእርምት እርምጃ"
                {...getFieldProps('correctiveAction')}
                error={Boolean(touched.correctiveAction && errors.correctiveAction)}
                helperText={touched.correctiveAction && errors.correctiveAction}
                multiline
                minRows={4}
              />
            )}
            {values.summaryAnswer === "ቅሬታው ትክክለኛ አይደለም" && (
              <TextField
                fullWidth
                label="የምክንያት ማብራሪያ"
                {...getFieldProps('noneValidExplanation')}
                error={Boolean(touched.noneValidExplanation && errors.noneValidExplanation)}
                helperText={touched.noneValidExplanation && errors.noneValidExplanation}
                multiline
                minRows={4}
              />
            )}
            <Button
           fullWidth
           size="large"
           type="submit"
           variant="contained"
           disabled={isSubmitting}
            >
              አስገባ
            </Button>
          </Stack>
        </Form>
      </FormikProvider>
    </div>
  );
};

export default ComplianceResponseForm;
