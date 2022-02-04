import { ContentWrapper } from "../../../components/ContentWrapper/ContentWrapper"
import { FooterLink } from "./FooterLink/FooterLink"
import { StyledFooterForecast } from "./StyledFooterForecast"

export const FooterForecast = ({width}) => {

   return (
      <StyledFooterForecast>
         <ContentWrapper width={width}>
            <h5>Copyright © 2022 <FooterLink href="http://leone510.github.io/cutaway">Leone510</FooterLink>. All Rights Reserved</h5>
         </ContentWrapper>
      </StyledFooterForecast>
   )
}