"use client";
import useCountdown from "@/hooks/UseCountdown";
import { styled } from "@mui/material";
import styles from './Hero.module.scss';
import { EVENT_START_DATE } from "@/app/constants";

const Card = styled("div")(({ theme }) => ({
  height: "94px",
  width: "110px",
  [theme.breakpoints.down('sm')]: {
    width:'62px',
    height: "70px",
    fontSize: "16px",
  },
  borderRadius: "12px",
  fontSize: "40px",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "6px",

}))


const Container = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "26px",
  color: "#3D3D3D",
  [theme.breakpoints.down('md')]: {
    gap: "13px",
  },
}))


const Row = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  fontSize: "18px",
  fontWeight: "900",
});

const DaysCount = () => {
  const targetDate = new Date(EVENT_START_DATE.replace(/-/g, "/"));

  const [days, hours, minutes, seconds] = useCountdown(targetDate);
  return (
    <Container>
      <Row>
        <Container>
          <Card sx={{ border: "0.8px solid #725FAA" }}>
          <p className={styles.timerText}> {days > 0 ? days:0} </p>
          <p className={styles.timerUnit}>  {"يــوم"} </p>
          </Card>
        </Container>
      </Row>
      <img src="./icons/dots.svg" height={20} width={6} />
      <Row>
        <Container>
          <Card sx={{ border: "0.8px solid #5793AD" }}>
          <p className={styles.timerText}> {hours > 0 ? hours:0 } </p>
          <p className={styles.timerUnit}> {"سـاعـة"} </p> 
          </Card>
        </Container>
      </Row>
      <img src="./icons/dots.svg" height={20} width={6} />
      <Row>
        <Container>
          <Card sx={{ border: "0.8px solid #B89848" }}>
          <p className={`${styles.timerText}`}> {minutes > 0 ? minutes:0} </p>
           <p className={styles.timerUnit}>{"دقـيـقـة"} </p> 
          </Card>
        </Container>
      </Row>
      <img src="./icons/dots.svg" height={20} width={6} />
      <Row>
        <Container>
          <Card sx={{border:"0.8px solid #C55F67"}}>
            <p className={styles.timerText}>{seconds > 0 ? seconds : 0}</p>
            <p className={styles.timerUnit}>{"ثــانـيـة"}</p>
            
          </Card>
        </Container>
      </Row>
    </Container>
  );
};

export default DaysCount;
