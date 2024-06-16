import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetSingleCompliantResponseQuery } from 'store/services';
import { Container, Typography, Box, Paper, CircularProgress } from '@mui/material';

const ComplianceResponseDetails = () => {
  const { compliantId } = useParams();
  const { data, error, isLoading, isSuccess } = useGetSingleCompliantResponseQuery({ compliantId });

  if (isLoading) {
    return (
      <Container maxWidth="md">
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
          <CircularProgress />
        </Box>
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxWidth="md">
        <Typography variant="h6" color="error" sx={{ textAlign: 'center', marginTop: 4 }}>
          Error fetching compliance response data: {error.message}
        </Typography>
      </Container>
    );
  }

  if (!isSuccess || !data?.data) {
    return (
      <Container maxWidth="md">
        <Typography variant="h6" color="error" sx={{ textAlign: 'center', marginTop: 4 }}>
          No compliance response data found.
        </Typography>
      </Container>
    );
  }

  const response = data.data;

  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ padding: 3, marginTop: 4 }}>
        <Box sx={{ padding: '20px 10px', marginBottom: '30px', borderBottom: '2px solid #ddd' }}>
          <Typography variant="h4" gutterBottom align="center" sx={{ fontWeight: 'bold', color: '#3f51b5' }}>
             የቅሬታ መልስ
          </Typography>
          <hr/>
        </Box>
        <Box sx={{ backgroundColor: '#e3f2fd', padding: '20px', borderRadius: '4px' }}>
          <Typography variant="body1" gutterBottom sx={{ marginBottom: '10px' }}>
            <strong>ቅሬታውን ያጣራውና መልስ የሰጠው የበላይ ሃላፊ:</strong> {response.complianceInvestigater.firstName} {response.complianceInvestigater.middleName} {response.complianceInvestigater.lastName}
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ marginBottom: '10px' }}>
            <strong>መልስ የተሰጠበት ቀን:</strong> {new Date(response.createdAt).toLocaleDateString()}
          </Typography>
          {response.updatedAt && (
            <Typography variant="body1" gutterBottom>
              <strong>Updated At:</strong> {new Date(response.updatedAt).toLocaleDateString()}
            </Typography>
          )}
        </Box>
        <Box sx={{ backgroundColor: '#ffeb3b', padding: '20px', borderRadius: '4px', marginBottom: '20px' }}>
          <Typography variant="body1" gutterBottom sx={{ marginBottom: '10px', fontWeight: 'bold', color: '#f57c00' }}>
            <strong>የማጠቃለያ መልስ:</strong> {response.summaryAnswer}
          </Typography>
        </Box>
        <Box sx={{ padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '4px', marginBottom: '20px' }}>
          <Typography variant="body1" gutterBottom sx={{ marginBottom: '10px' }}>
            <strong>ቅሬታው በሚገባ ስለመጣራቱ:</strong> {response.complianceInvestigated}
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ marginBottom: '10px' }}>
            <strong>በማጣራቱ ሂደት የተደረሰባቸው ግኝቶች:</strong> {response.investigationFindings}
          </Typography>
         
         {response.correctiveAction && ( <Typography variant="body1" gutterBottom sx={{ marginBottom: '10px' }}>
            <strong>የተወሰደ የማስተካከያ እርምጃ:</strong> {response.correctiveAction}
          </Typography>
        )}
           {response.noneValidExplanation&& (  <Typography variant="body1" gutterBottom sx={{ marginBottom: '10px' }}>
            <strong>አግባብነት የሌለው ቅሬታ የሆነበት ምክንያት:</strong> {response.noneValidExplanation}
          </Typography>
           )}
        </Box>
       
      </Paper>
    </Container>
  );
};

export default ComplianceResponseDetails;
