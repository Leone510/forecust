import { ImExit } from "react-icons/im";
import { StyledButton } from "../../../../components/Button/StyledButton";

export const BackBtn = () => {

   return (
      <StyledButton 
         width={"40px"}
         height={"40px"}
         margin={"5px"}
         color={"#B03F35"}
      >

         <ImExit size="3em" color="MidnightBlue"/>

      </StyledButton>
   )
}