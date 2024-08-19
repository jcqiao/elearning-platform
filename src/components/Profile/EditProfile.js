import React, { useState } from "react";
import { Box, TextField, Button, Avatar, Typography } from "@mui/material";
import { useRecoilState } from "recoil";
import { userState } from "../../recoil/atoms";

const EditProfile = ({ setIsEditing }) => {
  const [user, setUser] = useRecoilState(userState);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [avatarUrl, setAvatarUrl] = useState(user.avatarUrl);
  const handleSave = () => {
    setUser({ ...user, name, email, avatarUrl });
    setIsEditing(false);
    alert("Profile updated successfully!");
  };

  return (
    <Box sx={{ padding: 3, maxWidth: 600, margin: "0 auto" }}>
      <Typography variant="h4" gutterBottom>
        Edit Profile
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", marginBottom: 3 }}>
        <Avatar
          alt={name}
          src={avatarUrl}
          sx={{ width: 100, height: 100, marginRight: 3 }}
        />
        <Button variant="contained" component="label">
          Upload Avatar
          <input
            type="file"
            hidden
            accept="image/*"
            onChange={e => {
              const file = e.target.files[0];
              if (file) {
                const reader = new FileReader();
                reader.onloadend = () => {
                  setAvatarUrl(reader.result);
                };
                reader.readAsDataURL(file);
              }
            }}
          />
        </Button>
      </Box>
      <TextField
        label="Name"
        fullWidth
        value={name}
        onChange={e => setName(e.target.value)}
        sx={{ marginBottom: 3 }}
      />
      <TextField
        label="Email"
        fullWidth
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        sx={{ marginBottom: 3 }}
      />
      <Button variant="contained" color="primary" onClick={handleSave}>
        Save
      </Button>
      <Button
        variant="outlined"
        color="secondary"
        onClick={() => setIsEditing(false)}
        sx={{ marginLeft: 2 }}
      >
        Back
      </Button>
    </Box>
  );
};

export default EditProfile;
