import { useState } from "react";
import { gql, useMutation } from '@apollo/client';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import InputLabel from '@mui/material/InputLabel';
import Chip from "@mui/material/Chip";
import { ADD_PHONE } from "@/graphql/mutations/phone";

export default function Home() {
  const [phone, setPhone] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [addPhone, { data, loading, error }] = useMutation(ADD_PHONE);

  const validate = (phoneNumber: string) => {
    const phoneNumberRegex = /^(?:\+1)?[2-9]\d{2}[2-9](?!11)\d{6}$/;

    const isPhoneNumberValid = phoneNumberRegex.test(phoneNumber);
    
    if (!isPhoneNumberValid) {
      setErrorMsg('Phone number is invalid')
    } else {
      setErrorMsg("");
    }
    return isPhoneNumberValid;
    
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if(validate(phone)){
      addPhone({ variables: { phone } });
    }

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
        {errorMsg ? <Chip label={errorMsg} color="error" variant="outlined"/>: null}
        {!loading && data?.addphone?.data ? <Chip label="successfully submitted" color="success" variant="outlined"/>: null}
      </Box>
    </Container>
  );
}
