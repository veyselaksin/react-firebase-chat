import { Box, Image, Text } from "@mantine/core";
import { useState } from "react";

const ChatList = () => {
  const [addChat, setAddChat] = useState(false);
  const chatList = [
    {
      icon: "./avatar.png",
      name: "John Doe",
      message: "Hey, how are you?",
    },
    {
      icon: "./avatar.png",
      name: "Jane Doe",
      message: "I'm fine, thank you",
    },
  ];

  return (
    <Box className="mt-10">
      <Box className="flex gap-2 justify-between">
        <Box className="flex bg-[#111928]/[.5] p-2 items-center gap-2 rounded-lg w-full">
          <Image src={"./search.png"} className="h-[16px] w-[16px]"></Image>
          <input
            className="bg-transparent border-none outline-none text-white w-full"
            placeholder="Search"
          />
        </Box>
        <Box className="bg-[#111928]/[.5] rounded-lg items-center p-2">
          <Image
            src={addChat ? "./minus.png" : "./plus.png"}
            className="h-[16px] w-[16px]"
            onClick={() => setAddChat(!addChat)}
          ></Image>
        </Box>
      </Box>
      <Box className="mt-10">
        <Box className="flex flex-col">
          {chatList.map((chat, index) => (
            <Box
              key={index}
              className="border-solid border-0 border-b border-[#dddddd35]"
            >
              <Box className="flex gap-4 py-4">
                <Image
                  src={chat.icon}
                  className="h-[50px] w-[50px] rounded-full"
                />
                <Box className="flex flex-col gap-3">
                  <Text className="text-[16px] m-0">{chat.name}</Text>
                  <Text className="text-[14px] m-0">{chat.message}</Text>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ChatList;
