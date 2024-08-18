import { Heading, Stat, StatLabel, StatNumber, StatHelpText, Stack } from "@chakra-ui/react"

// eslint-disable-next-line react/prop-types
const Dolar = ({...dolares}) => {
    const dolaresArray = Object.values(dolares)
  return (<Stack divider={<hr/>} spacing={7}>
    {
        dolaresArray.map((dolar)=>(
            <>
          <Heading as="h2" size="md" mb={4}>
            {dolar?.nombre || "Dólar"}
          </Heading>
          <Stat>
            <StatLabel>Compra</StatLabel>
            <StatNumber>${dolar?.compra || "N/A"}</StatNumber>
            <StatHelpText>Precio de compra del dólar</StatHelpText>
          </Stat>
          <Stat mt={4}>
            <StatLabel>Venta</StatLabel>
            <StatNumber>${dolar?.venta || "N/A"}</StatNumber>
            <StatHelpText>Precio de venta del dólar</StatHelpText>
          </Stat>
        </>
        ))
    }
  </Stack>)
}

export default Dolar