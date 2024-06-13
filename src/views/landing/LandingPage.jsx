import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";

const LandingPage = () => {
  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
      {/* Main Content Section */}
      <main className="flex flex-grow flex-col py-5 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-2xl mx-5">
          <div>
            <h2 className="mt-6 text-3xl font-extrabold text-blue-800">
              ወደ ቅሬታ ማቅረቢያ መግቢያ እንኳን ደህና መጡ
            </h2>
            <p className="mt-2 text-lg text-gray-700">
              በአገልግሎታችን ላይ ያለዎትን ማንኛውም ቅሬታ የሚከተለው ማስፈንጠሪያ በመጫን ወደ ቅሬታ ማቅረቢያ ቅጹ
              ይግቡ
            </p>
          </div>
          <Box display="flex" justifyContent="center" p={2}>
            <Box maxWidth="600px">
              <Typography variant="h4" component="h4" align="center" gutterBottom>
                ስለቅሬታ ምንነትና አቀራረብ ምን ያህል የውቃሉ?
              </Typography>
              <Typography variant="body1" paragraph>
                ቅሬታ ማለት የትኛውንም አይነት አገልግሎት እንዲሰጥ በህግ በተቋቋመ የመንግስት መ/ቤት ላይ ማንኛውም ተገልጋይ የሚያቀርበው በአገልግሎት ያለመርካት መግለጫ ሲሆን ስህተቶች ስለመፈፀማቸው በተለያዩ መንገዶች የሚደርሱና ምላሽ የሚሹ ጥቆማዎችንና አስተያየቶችን ያጠቃልላል፡፡
              </Typography>
              <Typography variant="h6" component="h6">
                ዓላማዎች
              </Typography>
              <List>
                <ListItem>
                  <ListItemText primary="1. በመንግስት ተቋማት ውስጥ መልካም አስተዳደርን ማስፈንና አስተዳደራዊ በደልን መከላከል፣" />
                </ListItem>
                <ListItem>
                  <ListItemText primary=" 2. በአገልግሎት አሰጣጥ ሂደት ላይ በተገልጋዮች ለቀረቡ ቅሬታዎች አፋጣኝ ምላሽ መስጠት፣" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="3. የአገልግሎት አሰጣጥን ለማሻሻልና የተገልጋዮችን እርካታ ለመጠበቅ የሚያግዙ የመረጃ ምንጭ ሆኖ ማገልገልና ለተጠቃሚዎች አለመርካት መንስኤ የሚሆኑ ስህተቶችን ማረም፡፡" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="4. መልካም አስተዳደርን ከማስፈን አኳያ የሚያጋጥሙ ችግሮችና መንስኤዎችን በመለየት እንዲቃለሉ/እንዲወገዱ/ ማድረግ፡፡" />
                </ListItem>
              </List>
              <Typography variant="h6" component="h6">
                መርሆዎች
              </Typography>
              <hr/>
              <List>
                <ListItem>
                  <ListItemText primary="1. ቅሬታ የማቅረብና የመደመጥ እድል መስጠት" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="2. የቅሬታ አቀራረብን ቀላል ማድረግ፣" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="3. ለቀረበው ቅሬታ ፈጣን ምላሽ መስጠት" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="4. የቅሬታ አቀራረብ ስርዓቱን ውጤታማ ማድረግ፣ሃቀኛ፣ገለልተኛ፣ሚዛናዋ ሆኖ መገኘት፣" />
                </ListItem>
              </List>
              <Typography variant="h6" component="h6">
                የቅሬታ አቀራረብ ስነ-ስርዓት
              </Typography>
              <hr/>
              <Typography variant="body1" paragraph>
              የልደታ ክፍለ ከተማ ፐብሊክ ሰርቪስና የሰው ሃብት ልማት ጽ/ቤት የቅሬታ ያለው ማንኛውም አካል፡-
              </Typography>
              <List>
                <ListItem>
                  <ListItemText primary="ከታች ያለውን ሊንክ በመጫን መመዝገብ እና   ቅረታውን መሙላት ይችላል።" />
                </ListItem>
              </List>
            </Box>
          </Box>
          <div className="flex justify-between mt-6">
            <div className="text-md text-gray-800">
              <p>
                አለተመዘገቡም?{" "}
                <Link
                  to="/auth/sign-up"
                  className="font-medium text-md text-blue-600 hover:text-blue-500"
                >
                  አካውንት ይፍጠሩ
                </Link>
              </p>
              <p>
                አካውንት አለዎት?{" "}
                <Link
                  to="/auth/sign-in"
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  ይግቡ
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
