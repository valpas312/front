import { Stack, Skeleton } from "@chakra-ui/react";

const SkeletonDolar = () => {
  return (
    <Stack>
      <Skeleton height="40px"  width="100px"/>
      <Skeleton height="20px" width="90px" />
      <Skeleton height="30px" width="100px" />
      <Skeleton height="20px" width="150px" />
    </Stack>
  );
};

export default SkeletonDolar;
