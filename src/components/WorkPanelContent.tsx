import * as React from 'react';
import Stack from '@mui/material/Stack';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import { FolderCopyRounded, SnippetFolder } from '@mui/icons-material';
import WorkPanelCharts from './WorkPanelCharts';
import Box from '@mui/material/Box';

const mainListItems = [
  { text: 'Главная', icon: <HomeRoundedIcon /> },
  { text: 'Черновики', icon: <SnippetFolder /> },
  { text: 'Мои папки', icon: <FolderCopyRounded /> }
];

const secondaryListItems = [
  { text: 'Настройки', icon: <SettingsRoundedIcon /> },
  { text: 'О программе', icon: <InfoRoundedIcon /> }
];
const charts = [
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
  }
]

export default function MenuContent() {
  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: 'space-between' }}>
      <Box sx={{ display: "grid", flexWrap:"wrap", flexGrow: 1, p: 1, justifyContent: 'flex-start'}}>
          {charts.map((item) => <WorkPanelCharts name={item.name} content={item.content} />)}
        </Box>
    </Stack>
  );
}