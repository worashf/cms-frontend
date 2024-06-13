import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGetSingleCompliantQuery } from 'store/services';
import {
  Container, Typography, Box, Paper, List, ListItem, ListItemText, Divider, CircularProgress
} from '@mui/material';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

const CompliantDetails = () => {
  const { compliantId } = useParams();
  const { data, error, isLoading, isSuccess } = useGetSingleCompliantQuery({ compliantId });

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
        <Typography variant="h6" color="error">
          Error fetching compliant data: {error.message}
        </Typography>
      </Container>
    );
  }

  if (!isSuccess || !data?.data) {
    return (
      <Container maxWidth="md">
        <Typography variant="h6" color="error">
          No compliant data found.
        </Typography>
      </Container>
    );
  }

  const compliant = data.data;

  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
        <Box sx={{  padding: '10px', marginBottom: '20px' }}>
          <Typography variant="h4" gutterBottom>
            {compliant.compliantTitle}
          </Typography>
          <hr/>
        </Box>
        <Box sx={{ padding: '10px', marginBottom: '20px' }}>
          <Typography variant="body1" gutterBottom>
            <strong>የቅሬታው ጭብጥ: </strong> {compliant.compliantDescription}
          </Typography>
          <Typography variant="body1" gutterBottom >
            <strong>የቅሬታ አይነት:</strong> {compliant.compliantCategory}
          </Typography>
        
          <Typography variant="body1" gutterBottom>
            <strong>እንዲፈጸምዎት የሚፈልጉት:</strong> {compliant.wantToBeDone}
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>ሁኔታ:</strong> {compliant.status}
          </Typography>
        </Box>
        <Box sx={{ backgroundColor: '#f9f9f9', padding: '10px', marginBottom: '20px' }}>
        <Typography variant="body1" gutterBottom>
            <strong>ሙሉ ስም:</strong> {compliant.requesterEmployee.firstName} {compliant.requesterEmployee.middleName} {compliant.requesterEmployee.lastName}
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>ቅሬታውን የፈጸመው ተቋም:</strong> {compliant.compliantSourceInstitution.institutionName}
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>ቅሬታው የተፈጸመበት ቀን:</strong> {new Date(compliant.compliantEventDate).toLocaleDateString()}
          </Typography>
        </Box>
        <Box sx={{  padding: '10px', marginBottom: '20px' }}>
          <Typography variant="h6" gutterBottom>
            ተጨማሪ ማስረጃዎች
          </Typography>
          <List>
            {compliant?.compliantAttachment?.map((attachment, index) => (
              <div key={index}>
                <ListItem>
                  <Box sx={{ border: '1px solid #ddd', padding: 1, borderRadius: '4px', marginBottom: 2 }}>
                    {attachment.fileType.startsWith('image/') ? (
                      <img
                        src={`${attachment.fileUrl}`}
                        alt={attachment.fileName}
                        style={{ maxWidth: '100%', height: 'auto', border: '1px solid #ddd', borderRadius: '4px' }}
                      />
                    ) : attachment.fileType === 'application/pdf' ? (
                      <div style={{ height: '500px', border: '1px solid #ddd', borderRadius: '4px' }}>
                        <Viewer
                          fileUrl={`${attachment.fileUrl}`}
                        />
                      </div>
                    ) : (
                      <ListItemText
                        primary={`${attachment.fileUrl}`}
                        secondary={`Type: ${attachment.fileType}`}
                      />
                    )}
                  </Box>
                </ListItem>
                <Divider />
              </div>
            ))}
          </List>
        </Box>
      </Paper>
    </Container>
  );
};

export default CompliantDetails;
