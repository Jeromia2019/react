import { useForm, Controller } from 'react-hook-form';
import { IconButton, Button, TextField, FormControl, InputLabel, InputAdornment, FilledInput, OutlinedInput  } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';

const LoginPage = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
  };

  const [values, setValues] = useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <h1>Login</h1>
      <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined" onSubmit={handleSubmit(onSubmit)}>
        <InputLabel  htmlFor='Login'></InputLabel >
        <Controller
          name='Login'
          control={control}
          render={({ field }) => <TextField label="Login" variant="outlined"{...field} />}
        />
                  <InputLabel htmlFor="outlined-adornment-password"></InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        <Button variant="outlined" type='submit'>Envoyer</Button>
      </FormControl>
    </>
  );
};

export default LoginPage;
