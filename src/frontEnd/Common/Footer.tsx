import facebook from "../images/facebook.png";
import insta from "../images/insta.png";
import naver from "../images/naver.png";
import kakao from "../images/kakao.png";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export default function Footer() {
    return (
        <Box sx={{ position: "fixed", bottom: 0, width: "100%" }}>
            <Grid item xs={12} textAlign="center">
            <img src={kakao} alt="kakao" width="40" height="40" />
            <img src={facebook} alt="facebook" width="40" height="40" />
            <img src={insta} alt="insta" width="40" height="40" />
            <img src={naver} alt="naver" width="40" height="40" />
            </Grid>
        </Box>
    );
}