import { HeaderForecast } from "./HeaderForecast/HeaderForecast";
import { StyledForecust } from "./StyledForecast";
import { MainForecast } from "./MainForecast/MainForecast";
import { FooterForecast } from "./FooterForecast/FooterForecast";

export const Forecast = () => {

   return (
      <StyledForecust>
         
         <HeaderForecast width={"1366px"}/>

         <MainForecast width={"1366px"}/>

         <FooterForecast width={"1366px"}/>
         
      </StyledForecust>
   )
}