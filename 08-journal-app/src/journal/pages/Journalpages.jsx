import { JournalLayout } from "../layout/JournalLayout";
import { NoteView } from "../view";
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
      {/* <NothingSelectView /> */}
      <NoteView />
    </JournalLayout>
  );
};
