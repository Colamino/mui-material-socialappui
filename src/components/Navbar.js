import {
  AppBar,
  Avatar,
  Badge,
  Box,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import MailIcon from "@mui/icons-material/Mail";
import { Notifications } from "@mui/icons-material";

const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "#fff",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
  justifyContent: "center",
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignContent: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

function Navbar({ mode }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky">
      <StyledToolBar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          MUI SOCIAL APP
        </Typography>
        <EmojiEmotionsIcon
          fontSize="large"
          sx={{ display: { xs: "block", sm: "none" } }}
        />
        <Search>
          <InputBase
            sx={{ color: "#424242" }}
            fullWidth
            placeholder="search..."
          />
        </Search>
        <Icons>
          <IconButton>
            <Badge badgeContent={4} color="error">
              <MailIcon sx={{ color: "white" }} />
            </Badge>
          </IconButton>
          <IconButton>
            <Badge badgeContent={2} color="error">
              <Notifications sx={{ color: "white" }} />
            </Badge>
          </IconButton>
          <Avatar
            alt="Remy Sharp"
            src="https://www.pngkey.com/png/detail/258-2581185_shin-chan-with-backpack-image-crayon-shin-chan.png"
            sx={{ width: 40, height: 40, cursor: "pointer" }}
            onClick={handleClick}
          />
        </Icons>
        <UserBox onClick={handleClick}>
          <Avatar
            alt="Remy Sharp"
            src="https://www.pngkey.com/png/detail/258-2581185_shin-chan-with-backpack-image-crayon-shin-chan.png"
            sx={{ width: 30, height: 30, cursor: "pointer" }}
          />
          <Typography
            variant="h6"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            Shin
          </Typography>
        </UserBox>
      </StyledToolBar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}

export default Navbar;
