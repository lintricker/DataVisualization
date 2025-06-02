import { Box, alpha, Stack} from "@mui/material";
import Header from "./Header";
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
    <Box>
          {cards.map((item) => <CardPreview name={item.name} content={item.content} />)}
        </Box>
  );
}

export default MainPage;