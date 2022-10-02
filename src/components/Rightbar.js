import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

function Rightbar() {
  return (
    <Box
      flex={2}
      p={2}
      sx={{
        display: { xs: "none", md: "block" },
      }}
    >
      <Box position="fixed" width={500}>
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup
          max={7}
          total={28}
          className="avatarfisrtchild"
          sx={{ justifyContent: "start" }}
        >
          <Avatar
            alt="Remy Sharp"
            src="http://pm1.narvii.com/6771/f4bb4d449836b5193441f71cb163abe69e535e17v2_00.jpg"
            sx={{ height: 50, width: 50 }}
          />
          <Avatar
            alt="Travis Howard"
            src="https://img-9gag-fun.9cache.com/photo/a0PBnpv_460s.jpg"
            sx={{ height: 50, width: 50 }}
          />
          <Avatar
            alt="Cindy Baker"
            src="https://drawiteazy.files.wordpress.com/2016/10/2016-10-12-11-39-37-jpg1.jpeg"
            sx={{ height: 50, width: 50 }}
          />
          <Avatar
            alt="Agnes Walker"
            src="https://images-na.ssl-images-amazon.com/images/I/41X9cHMBxqL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg"
            sx={{ height: 50, width: 50 }}
          />
          <Avatar
            alt="Trevor Henderson"
            src=""
            sx={{ height: 50, width: 50 }}
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://api.duniagames.co.id/api/content/upload/file/6499692791645092572.png"
            sx={{ height: 50, width: 50 }}
          />
          <Avatar
            alt="Trevor Henderson"
            src=""
            sx={{ height: 50, width: 50 }}
          />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={4} rowHeight={100} gap={10} pb={2}>
          <ImageListItem>
            <img
              src="https://mui.com/static/images/image-list/breakfast.jpg"
              alt="Breakfast"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d"
              alt="Burger"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1522770179533-24471fcdba45"
              alt="Camera"
            />
          </ImageListItem>
        </ImageList>

        <Typography variant="h6" fontWeight={100}>
          Latest Conversations
        </Typography>

        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Travis Howard"
                src="http://pm1.narvii.com/6771/f4bb4d449836b5193441f71cb163abe69e535e17v2_00.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default Rightbar;
