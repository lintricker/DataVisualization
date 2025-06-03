import { Box } from "@mui/material";
import { ICardPreview } from "../interfaces/ICardPreview";
import CardPreview from "./CardPreview";

const cards: Array<ICardPreview> = [
  {
    name: 'Первый проект',
    content: 'Привет, это мой первый проект'
  },
  {
    name: 'Второй проект',
    content: 'Привет, это мой второй проект'
  },
  {
    name: 'Третий проект',
    content: 'Привет, это мой третий проект'
  },
  {
    name: 'Четвертый проект',
    content: 'Привет, это мой четвертый проект'
  },
  {
    name: 'Пятый проект',
    content: 'Привет, это мой пятый проект'
  },
]

function MainPage() {
  return (
    <Box sx={{ display: "flex", flexWrap:"wrap", flexGrow: 1, p: 1, justifyContent: 'flex-start' }}>
          {cards.map((item) => <CardPreview name={item.name} content={item.content} />)}
        </Box>
  );
}

export default MainPage;