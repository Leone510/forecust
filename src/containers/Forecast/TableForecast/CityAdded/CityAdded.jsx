import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { Button } from "../../../../components/Button/Button"
import { Flex } from "../../../../components/Flex/Flex"
import { forecastActions } from "../../../../store/forecast/actionTypes"
import { StyledInnerTable } from "../StyledInnerTable"
import { StyledModalMessage } from "../StyledModalMessage"

export const CityAdded = () => {
   const { cityList, lastAdded } = useSelector(store => store.forecast)
   const dispatch = useDispatch();

   return (
      <StyledInnerTable>
         <Flex flex="1 1 100%">
            <StyledModalMessage><b>{`City "${lastAdded}" added to your city list!`}</b></StyledModalMessage>
         </Flex>

         <Flex flex="0 0 200px">
            <Button 
               onClick={() => dispatch(forecastActions.setTableShow("addCity"))}
               color="#00693E"
            >
               <b>Ok</b>
            </Button>
         </Flex>
      </StyledInnerTable>
   )
}