import facebook from "../images/facebook.png";
import insta from "../images/insta.png";
import naver from "../images/naver.png";
import kakao from "../images/kakao.png";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import styles from './footer.module.css'

export default function Footer() {
    return (
        <Box sx={{ position: "fixed", bottom: 0, width: "100%", backgroundColor: 'white'}}>
            <Grid item xs={12} textAlign="center">
            <img className={styles.snsBtn} src={kakao} alt="kakao" width="30vw" height="30vh" />
            <img className={styles.snsBtn} src={facebook} alt="facebook" width="30vw" height="30vh" />
            <img className={styles.snsBtn} src={insta} alt="insta" width="30vw" height="30vh" />
            <img className={styles.snsBtn} src={naver} alt="naver" width="30vw" height="30vh" />
            </Grid>
        </Box>
    );
}