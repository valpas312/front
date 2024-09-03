import { Box, Heading, Link, Text } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const DrawerHeadingBox = ({ ...data }) => {
  const { heading, text } = { ...data };

  return (
    <Box>
      <Heading size="sm" textTransform="uppercase" lineHeight="normal">
        {heading}
      </Heading>
      {/* <Text pt="2" fontSize="md">
        {text}
      </Text> */}
      {
        heading === "Github" || heading === "Linkedin" ? (
          <Link href={text} isExternal>
            {text} <ExternalLinkIcon mx="2px" />
            </Link>
        ) : (
            <Text pt="2" fontSize="md">
                {text}
            </Text>
            )
      }
    </Box>
  );
};

export default DrawerHeadingBox;
