import { Box, Divider, List, Paper, Stack, Typography } from "@mui/material";
import SpecialBlog from "./SpecialBlog";

const blogPosts = [
    {title:"Первый месяц аренды со скидкой 50%",text:"Зарегистрируйтесь на нашем сайте и получите уникальную возможность арендовать любое помещение с половинной скидкой в первый месяц. Идеальный шанс попробовать новое место!",link:"#"},
    {title:"Реферальная программа: получайте бонусы",text:"Пригласите друзей воспользоваться нашим сервисом, и за каждого нового клиента получите скидку на следующую аренду. Чем больше друзей — тем больше скидок!",link:"#"},
    {title:'Пакет "Все включено": аренда без лишних хлопот',text:"Выберите пакет, который включает в себя коммунальные услуги, интернет и уборку. Просто снимайте помещение и наслаждайтесь комфортом без дополнительных забот!",link:"#"}
];

export default function SpecialBlogBlock(props) {

    return (
        <Paper variant='outlined' sx={{
            paddingTop:'12px'
        }}>
            <Stack direction='column' spacing={2}>
            <Typography variant="h4" paddingLeft={2}>
                Специальные предложения
            </Typography>
            <Divider />
            <List>
                {blogPosts.map(item => <SpecialBlog key={item.title} post={item} />)}
            </List>
            </Stack>
        </Paper>
    );

}