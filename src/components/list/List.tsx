import ChatList from "./chatList/ChatList";
import UserInfo from "./userInfo/UserInfo";
import { Box } from "@mantine/core";

interface ListProps {
  className?: string;
}

const List: React.FC<ListProps> = ({ className }) => {
  return (
    <Box className={className}>
      <Box className="m-4">
        <UserInfo />
        <ChatList />
      </Box>
    </Box>
  );
};

export default List;
