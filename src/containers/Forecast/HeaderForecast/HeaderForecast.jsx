import { StyledHeaderForecast } from "./StyledHeaderForecast";
import { ContentWrapper } from "../../../components/ContentWrapper/ContentWrapper";
import { Flex } from "../../../components/Flex/Flex";
import { Title } from "../../../components/Title/Title";
import { BackBtn } from "./BackBtn/BackBtn";
import { LogoForecust } from "./LogoForecast/LogoForecust";
import { LogoImg } from "./LogoForecast/LogoImg/LogoImg";
import { StyledImage } from "../../../components/StyledImage/StyledImage";

export const HeaderForecast = ({width}) => {

   return (
      <StyledHeaderForecast>
         <Flex>
            <ContentWrapper width={width}>
               <Flex 
                  width="200px" 
                  justify="space-between"
                  background="radial-gradient(rgba(87,42,159,1) 20%, rgba(106,90,205,1) 75%)"
                  margin="0 0 0 10px"
               >

                  <LogoForecust>

                     <LogoImg className="logoImg">
                        <StyledImage src='https://raw.githubusercontent.com/Leone510/cutaway/gh-pages/img/Weather-icon.png' alt="Weather-icon" />
                     </LogoImg>

                     <Title>
                        <span><b>Weather<br/>forecast</b></span>
                     </Title>

                  </LogoForecust>
                  
               </Flex>

               <Flex justify="flex-end">
                     <span><b>Exit </b></span> <BackBtn/>
               </Flex>

            </ContentWrapper>
         </Flex>
      </StyledHeaderForecast>
   )
}