import { IconButton } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectView } from "../view";
import { AddOutlined } from "@mui/icons-material";
// import { MailOutline } from "@mui/icons-material";
export const Journalpages = () => {
  return (
    <JournalLayout>
      {/* <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
        necessitatibus non doloribus cumque deleniti ratione consectetur ullam
        consequatur ducimus libero? Obcaecati aut quidem eaque soluta sapiente
        eligendi natus ab aliquid.
      </Typography> */}
      <NothingSelectView />
      {/* <NoteView /> */}
      <IconButton
        size="large"
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ":hover": { backgroundColor: "error.main", opacity: 0.9 },
          position: "fixed",
          right: 50,
          bottom: 60,
        }}
      >
        <AddOutlined />
      </IconButton>
    </JournalLayout>
  );
};
