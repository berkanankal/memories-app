import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import useStyles from "./styles";
import Input from "./Input";
import { register, login, resetInitialState } from "../../redux/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Auth = () => {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    rePassword: "",
  });
  const [isSignupForm, setIsSignupForm] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const classes = useStyles();
  const navigate = useNavigate();
  const { isLoading, error, isLoggedIn, isSignup, user } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
      toast.success(`Hoşgeldin ${user.name}`, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    if (isSignup) {
      setIsSignupForm(false);
      clearForm();
      setShowPassword(false);
      toast.success("Kayıt işlemi başarılı", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    if (error) {
      toast.error(error, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    dispatch(resetInitialState());
  }, [isLoggedIn, error, navigate, user, isSignup, dispatch]);

  const switchMode = () => {
    clearForm();
    setIsSignupForm(!isSignupForm);
    setShowPassword(false);
  };

  const handleShowPassword = () => setShowPassword(!showPassword);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSignupForm) {
      dispatch(register(form));
    } else {
      const loginForm = { email: form.email, password: form.password };
      dispatch(login(loginForm));
    }
  };

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const clearForm = () => {
    setForm({
      name: "",
      surname: "",
      email: "",
      password: "",
      rePassword: "",
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {isSignupForm ? "Sign up" : "Sign in"}
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <Grid container spacing={2}>
            {isSignupForm && (
              <>
                <Input
                  name="name"
                  value={form.name}
                  label="First Name"
                  handleChange={handleChange}
                  autoFocus
                  half
                />
                <Input
                  name="surname"
                  value={form.surname}
                  label="Last Name"
                  handleChange={handleChange}
                  half
                />
              </>
            )}
            <Input
              name="email"
              value={form.email}
              label="Email Address"
              handleChange={handleChange}
              type="email"
            />
            <Input
              name="password"
              value={form.password}
              label="Password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            {isSignupForm && (
              <Input
                name="rePassword"
                value={form.rePassword}
                label="Repeat Password"
                handleChange={handleChange}
                type="password"
              />
            )}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {isSignupForm ? "Sign Up" : "Sign In"}
          </Button>

          <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {isSignupForm
                  ? "Already have an account? Sign in"
                  : "Don't have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
