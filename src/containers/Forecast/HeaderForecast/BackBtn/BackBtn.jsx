import { ImExit } from "react-icons/im";
import { StyledButton } from "../../../../components/Button/StyledButton";

export const BackBtn = () => {

   const goToCutaway = () => {
      window.location.href = "https://leone510.github.io/cutaway/"
   }

   return (
      <StyledButton 
         width={"40px"}
         height={"40px"}
         margin={"5px"}
         color={"#B03F35"}
         onClick={goToCutaway}
      >

         <ImExit size="3em" color="MidnightBlue"/>

      </StyledButton>
   )
}