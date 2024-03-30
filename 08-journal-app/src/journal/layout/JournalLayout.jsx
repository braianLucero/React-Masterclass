import { Box } from "@mui/system";
export const JournalLayout = ({ children }) => {
  const drawerWidth = 240;
  return (
    <Box sx={{ display: "flex" }}>
      {/* Navbar  drawerWidth*/}
      {/* Sidebar  drawerWidth */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/* Toolbar*/}
        {children}
      </Box>
    </Box>
  );
};
