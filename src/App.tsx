import { createTheme, MantineProvider, Box } from "@mantine/core";
import List from "./components/list/List";
import Chat from "./components/chat/Chat";
import Detail from "./components/detail/Detail";

const theme = createTheme({
  /** Put your mantine theme override here */
});

function App() {
  return (
    <MantineProvider theme={theme}>
      <div className="bg-[url('/bg.jpg')] flex items-center justify-center h-screen m-0 text-white">
        <Box className="w-[90vw] h-[90vh] bg-[rgba(17,25,40,0.8)] backdrop-blur-[10px] saturate-[180%] rounded-lg border border-[rgba(255,255,255,0.125)]">
          <Box className="flex h-full justify-between">
            <List className="flex-1 border-solid border-0 border-r border-[rgba(255,255,255,0.125)]" />
            <Chat className="flex-1 justify-between" />
            <Detail className="flex-1" />
          </Box>
        </Box>
      </div>
    </MantineProvider>
  );
}

export default App;
