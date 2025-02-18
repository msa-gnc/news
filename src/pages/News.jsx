
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../features/newsSlice";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import loadingGif from "../assets/loading.gif";
import { useEffect } from "react";

const News = () => {
  const dispatch = useDispatch();
  const { loading, news } = useSelector((state) => state.newsSlice);

  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <>
      {loading ? (
        <img src={loadingGif} alt="" />
      ) : (
        <Box
          xs={{ d: "flex" }}
          display="flex"
          alignItems="center"
          justifyContent="space-evenly"
          flexWrap="wrap"
        >
          {news.map((item) => (
            <Card sx={{ maxWidth: 345 , height:470, m:4 }}>
              <CardMedia

                sx={{ height: 170,  }}
                image={item.urlToImage}
                title="green iguana"
              />
              <CardContent sx={{ height:220 }}>
                <Typography gutterBottom variant="h5" component="div">
              {item.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {item.content}
                </Typography>
              </CardContent>

              <CardActions sx={{justifyContent:"center" }} >
                <Button variant="contained" href={item.url}  target="_blank" size="small">Detail</Button>
              </CardActions>
              
            </Card>
          ))}
        </Box>
      )}
    </>
  );
};

export default News;
