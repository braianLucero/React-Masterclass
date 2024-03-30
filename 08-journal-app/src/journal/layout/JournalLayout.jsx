import { Box } from "@mui/system";
import { Navbar } from "../components";
export const JournalLayout = ({ children }) => {
  const drawerWidth = 240;
  return (
    <Box sx={{ display: "flex" }}>
      <Navbar drawerWidth={drawerWidth} />
      {/* Sidebar  drawerWidth */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/* Toolbar*/}
        {children}
      </Box>
    </Box>
  );
};
