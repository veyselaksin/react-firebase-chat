import { Box } from "@mantine/core";
import { createTheme, MantineProvider } from "@mantine/core";

const theme = createTheme({
  /** Put your mantine theme override here */
});

function App() {
  return (
    <MantineProvider theme={theme}>
      <div className="bg-[url('/bg.jpg')] flex items-center justify-center h-screen m-0 text-white">
        <Box className="w-[90vw] h-[90vh] bg-[rgba(17,25,40,0.8)] backdrop-blur-[10px] saturate-[180%] rounded-lg border border-[rgba(255,255,255,0.125)]">
          {/* Put your content here */}
        </Box>
      </div>
    </MantineProvider>
  );
}

export default App;
