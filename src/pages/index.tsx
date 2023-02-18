import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import InputLabel from '@mui/material/InputLabel';

export default function Home() {
  const [phone, setPhone] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();

  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Profile Information
        </Typography>
        <form onSubmit={handleSubmit}>
        <InputLabel shrink>
          Phone
        </InputLabel>
          <TextField
            id="phone"
            placeholder="Phone"
            value={phone}
            type="tel"
            onChange={(event) => setPhone(event.target.value)}
          />
          <br />
          <Button type="submit">
            Submit
          </Button>
        </form>
      </Box>
    </Container>
  );
}
