import { Box, Image, Title } from "@mantine/core";

const UserInfo = () => {
  return (
    <Box className="flex justify-between">
      <Box className="flex gap-4 items-center justify-center">
        <Image
          src={"./avatar.png"}
          alt=""
          className="h-[50px] w-[50px] rounded-full"
        ></Image>
        <Title order={3}>John Doe</Title>
      </Box>
      <Box className="flex gap-4 items-center justify-center">
        <Image src={"./more.png"} className="h-[16px] w-[16px]"></Image>
        <Image src={"./video.png"} className="h-[16px] w-[16px]"></Image>
        <Image src={"./edit.png"} className="h-[16px] w-[16px]"></Image>
      </Box>
    </Box>
  );
};

export default UserInfo;
