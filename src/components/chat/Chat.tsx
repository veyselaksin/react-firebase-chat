import React, { useEffect, useRef } from "react";
import { Box, Button, Image, Text, ScrollArea } from "@mantine/core";
import EmojiPicker from "emoji-picker-react";

interface ChatProps {
  className?: string;
}

const Chat: React.FC<ChatProps> = ({ className }) => {
  const [showEmojiPicker, setShowEmojiPicker] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const emojiPickerRef = useRef<HTMLDivElement>(null);

  const onEmojiClick = (emojiObject: any) => {
    console.log(emojiObject.emoji);
    setMessage((prevMessage) => prevMessage + emojiObject.emoji);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      emojiPickerRef.current &&
      !emojiPickerRef.current.contains(event.target as Node)
    ) {
      setShowEmojiPicker(false);
    }
  };

  const messages = [
    {
      id: 1,
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nihil magni, vero qui minima tempore amet similique ipsam, hic laborum praesentium nulla repellat doloribus minus nesciunt exercitationem at dolorem voluptatibus?",
      sender: "me",
      avatar: "./avatar.png",
    },
    {
      id: 2,
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nihil magni, vero qui minima tempore amet similique ipsam, hic laborum praesentium nulla repellat doloribus minus nesciunt exercitationem at dolorem voluptatibus?",
      sender: "Jane Doe",
      avatar: "./avatar.png",
      image: "./sample_image.jpg",
    },
    {
      id: 3,
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nihil magni, vero qui minima tempore amet similique ipsam, hic laborum praesentium nulla repellat doloribus minus nesciunt exercitationem at dolorem voluptatibus?",
      sender: "me",
      avatar: "./avatar.png",
    },
    {
      id: 4,
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nihil magni, vero qui minima tempore amet similique ipsam, hic laborum praesentium nulla repellat doloribus minus nesciunt exercitationem at dolorem voluptatibus?",
      sender: "Jane Doe",
      avatar: "./avatar.png",
    },
    {
      id: 5,
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nihil magni, vero qui minima tempore amet similique ipsam, hic laborum praesentium nulla repellat doloribus minus nesciunt exercitationem at dolorem voluptatibus?",
      sender: "Jane Doe",
      avatar: "./avatar.png",
    },
    {
      id: 6,
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nihil magni, vero qui minima tempore amet similique ipsam, hic laborum praesentium nulla repellat doloribus minus nesciunt exercitationem at dolorem voluptatibus?",
      sender: "me",
      avatar: "./avatar.png",
      image: "./sample_image.jpg",
    },
  ];

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Box
      className={className}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <Box className="border-solid border-0 border-b border-[#dddddd35]">
        <Box className="flex gap-4 py-4 mx-4">
          <Box className="flex gap-4 w-full">
            <Image
              src={"./avatar.png"}
              className="h-[50px] w-[50px] rounded-full"
            />
            <Box className="flex flex-col gap-2 justify-center">
              <Text className="text-[16px] m-0">John Doe</Text>
              <Text className="text-[12px] m-0">
                No system is secure, but we can try our best
              </Text>
            </Box>
          </Box>
          <Box className="flex gap-2 justify-center items-center">
            <Image src={"./phone.png"} className="h-[16px] w-[16px]" />
            <Image src={"./video.png"} className="h-[16px] w-[16px]" />
            <Image src={"./info.png"} className="h-[16px] w-[16px]" />
          </Box>
        </Box>
      </Box>
      <ScrollArea className="overflow-y-scroll mt-4">
        <Box className="flex flex-col gap-4">
          {messages.map((message, index) => (
            <Box className="flex gap-2" key={index}>
              {message.sender !== "me" ? (
                <Image
                  src={message.avatar}
                  className="h-[30px] w-[30px] rounded-full"
                />
              ) : (
                <Box className="flex-1"></Box>
              )}
              <Text
                className={`text-[12px] m-0 p-2 rounded-lg text-white leading-5 ${
                  message.sender === "me" ? "bg-blue-500" : "bg-[#111928]/[.5]"
                }`}
              >
                {message.image && (
                  <Image
                    src={message.image}
                    className="w-full h-auto rounded-lg"
                  />
                )}
                {message.message}
              </Text>
            </Box>
          ))}
        </Box>
      </ScrollArea>
      <Box className="border-solid border-0 border-t border-[#dddddd35]">
        <Box className="flex gap-3 m-4 items-center justify-center">
          <Image src="./img.png" className="h-[16px] w-[16px]" />
          <Image src="./camera.png" className="h-[16px] w-[16px]" />
          <Image src="./mic.png" className="h-[16px] w-[16px]" />
          <Box className="flex bg-[#111928]/[.5] rounded-lg w-full">
            <input
              className="bg-transparent border-none my-4 px-2 outline-none text-white w-full"
              placeholder="Type a message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Box className="flex items-center relative">
              <Image
                src="./emoji.png"
                className="h-[16px] w-[16px] cursor-pointer"
                onClick={() => setShowEmojiPicker((prev) => !prev)}
              />
              {showEmojiPicker && (
                <Box
                  className="absolute bottom-[40px] right-0"
                  ref={emojiPickerRef}
                >
                  <EmojiPicker onEmojiClick={onEmojiClick} />
                </Box>
              )}
              <Button
                variant="filled"
                className="m-2 bg-blue-500 border-none rounded-md text-white p-2 cursor-pointer"
              >
                Send
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Chat;
