import "./App.css";
import {
  Button,
  Stack,
  ThemeProvider,
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Rating,
  MenuItem,
  Select,
  InputLabel,
  Slider,
  Switch,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Badge,
  Tooltip,
  Typography,
  Alert,
  AlertTitle,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  CircularProgress,
  Snackbar,
  Breadcrumbs,
  Link,
  Drawer,
  Pagination,
  Divider,
} from "@mui/material";
import { globalTheme } from "./ui/theme/global";
import { useState } from "react";

const Title = ({ children }: { children: React.ReactNode }) => (
  <Typography variant="h4" gutterBottom>
    {children}
  </Typography>
);

function App() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <ThemeProvider theme={globalTheme}>
      <Box p={4}>
        <Stack spacing={4}>
          <Title>Button</Title>
          <Stack direction="row" spacing={2}>
            <Button variant="text">Save</Button>
            <Button variant="contained">Contact Us</Button>
            <Button variant="outlined">Next</Button>
            <Button variant="text" disabled>
              Save
            </Button>
            <Button variant="contained" disabled>
              Contact Us
            </Button>
            <Button variant="outlined" disabled>
              Next
            </Button>
          </Stack>
          <Divider />

          <Title>Checkbox</Title>
          <Stack direction="row" spacing={2}>
            <Checkbox defaultChecked />
            <Checkbox />
            <Checkbox disabled />
          </Stack>
          <Divider />

          <Title>Radio</Title>
          <Stack direction="row" spacing={2}>
            <FormControl>
              <FormLabel>Gender</FormLabel>
              <RadioGroup defaultValue="female" name="radio-buttons-group">
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
              </RadioGroup>
            </FormControl>
          </Stack>
          <Divider />

          <Title>Rating</Title>
          <Stack direction="row" spacing={2}>
            <Rating name="half-rating" defaultValue={2.5} precision={0.5} color="#000" />
          </Stack>
          <Divider />

          <Title>Select</Title>
          <Stack direction="row" spacing={2} alignItems="start">
            <Select defaultValue={10}>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            <FormControl>
              <FormLabel id="demo-simple-select-label">Age</FormLabel>
              <Select defaultValue={10}>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Stack>
          <Divider />

          <Title>Slider</Title>
          <Stack direction="row" spacing={2}>
            <Slider
              aria-label="Temperature"
              defaultValue={30}
              valueLabelDisplay="auto"
              step={10}
              marks
              min={10}
              max={110}
              sx={{ width: 300 }}
            />
          </Stack>
          <Divider />

          <Title>Switch</Title>
          <Stack direction="row" spacing={2}>
            <Switch defaultChecked />
            <Switch />
            <Switch disabled defaultChecked />
            <Switch disabled />
          </Stack>
          <Divider />

          <Title>Input</Title>
          <Stack direction="row" spacing={2} alignItems="start">
            <TextField
              label="Label"
              helperText="This is helper text: With floating label"
              variant="outlined"
              InputLabelProps={{
                disableAnimation: false,
              }}
              inputProps={{}}
            />

            <TextField
              helperText="This is helper text: Without label"
              variant="outlined"
              InputLabelProps={{
                disableAnimation: false,
              }}
              inputProps={{}}
            />

            <TextField
              label="Label"
              helperText="This is helper text: With placeholder"
              variant="outlined"
              placeholder="Placeholder"
              InputLabelProps={{
                disableAnimation: false,
              }}
              inputProps={{}}
            />

            <FormControl>
              <FormLabel>FromField</FormLabel>
              <TextField
                helperText="This is helper text: Display label with FormControl"
                variant="outlined"
                InputLabelProps={{
                  disableAnimation: false,
                }}
                inputProps={{}}
              />
            </FormControl>
          </Stack>
          <Divider />

          <Title>Toggle Button</Title>
          <Stack direction="row" spacing={2}>
            <ToggleButtonGroup
              value={"web"}
              color="primary"
              exclusive
              aria-label="Platform"
            >
              <ToggleButton value="web">Web</ToggleButton>
              <ToggleButton value="android">Android</ToggleButton>
              <ToggleButton value="ios">iOS</ToggleButton>
            </ToggleButtonGroup>
          </Stack>
          <Divider />

          <Title>Badge</Title>
          <Stack direction="row" spacing={2}>
            <Badge badgeContent={4} color="primary">
              Message
            </Badge>
          </Stack>
          <Divider />

          <Title>Tooltip</Title>
          <Stack direction="row" spacing={2}>
            <Tooltip title="Add" placement="top-start">
              <Button>top-start</Button>
            </Tooltip>
            <Tooltip title="Add" placement="top">
              <Button>hover me</Button>
            </Tooltip>
            <Tooltip title="Add" placement="top-end">
              <Button>top-end</Button>
            </Tooltip>
          </Stack>
          <Divider />

          <Title>Typography</Title>
          <Stack spacing={0}>
            <Typography variant="h1" gutterBottom>
              h1. Heading
            </Typography>
            <Typography variant="h2" gutterBottom>
              h2. Heading
            </Typography>
            <Typography variant="h3" gutterBottom>
              h3. Heading
            </Typography>
            <Typography variant="h4" gutterBottom>
              h4. Heading
            </Typography>
            <Typography variant="h5" gutterBottom>
              h5. Heading
            </Typography>
            <Typography variant="h6" gutterBottom>
              h6. Heading
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Quos blanditiis tenetur
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Quos blanditiis tenetur
            </Typography>
            <Typography variant="body1" gutterBottom>
              body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
              consectetur, neque doloribus, cupiditate numquam dignissimos
              laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
            <Typography variant="body2" gutterBottom>
              body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
              consectetur, neque doloribus, cupiditate numquam dignissimos
              laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
            <Typography variant="button" display="block" gutterBottom>
              button text
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              caption text
            </Typography>
            <Typography variant="overline" display="block" gutterBottom>
              overline text
            </Typography>
          </Stack>
          <Divider />

          <Title>Alert</Title>
          <Stack spacing={2}>
            <Alert severity="error">
              <AlertTitle>Error</AlertTitle>
              This is an error alert — <strong>check it out!</strong>
            </Alert>
            <Alert severity="warning">
              <AlertTitle>Warning</AlertTitle>
              This is a warning alert — <strong>check it out!</strong>
            </Alert>
            <Alert severity="info">
              <AlertTitle>Info</AlertTitle>
              This is an info alert — <strong>check it out!</strong>
            </Alert>
            <Alert severity="success">
              <AlertTitle>Success</AlertTitle>
              This is a success alert — <strong>check it out!</strong>
            </Alert>
          </Stack>
          <Divider />

          <Title>Progress</Title>
          <Stack direction="row" spacing={2}>
            <CircularProgress />
            <CircularProgress color="secondary" />
            <CircularProgress color="success" />
            <CircularProgress color="inherit" />
          </Stack>
          <Divider />

          <Title>Breadcrumb</Title>
          <Stack direction="row" spacing={2}>
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" color="inherit" href="/">
                MUI
              </Link>
              <Link underline="hover" color="inherit" href="/">
                Core
              </Link>
              <Typography color="text.primary">Breadcrumbs</Typography>
            </Breadcrumbs>
          </Stack>
          <Divider />

          <Title>Pagination</Title>
          <Stack direction="row" spacing={2}>
            <Pagination count={10} />
          </Stack>
          <Divider />

          <Title>Dialog</Title>
          <Stack direction="row" spacing={2}>
            <Button onClick={() => setDialogOpen(true)}>
              Open form dialog
            </Button>
            <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
              <DialogTitle>Subscribe</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  To subscribe to this website, please enter your email address
                  here. We will send updates occasionally.
                </DialogContentText>
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Email Address"
                  type="email"
                  fullWidth
                  variant="standard"
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setDialogOpen(false)}>Cancel</Button>
                <Button onClick={() => setDialogOpen(false)}>Subscribe</Button>
              </DialogActions>
            </Dialog>
          </Stack>
          <Divider />

          <Title>Snackbar</Title>
          <Stack direction="row" spacing={2}>
            <Button onClick={() => setSnackbarOpen(true)}>
              Open simple snackbar
            </Button>
            <Snackbar
              open={snackbarOpen}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              autoHideDuration={6000}
              onClose={() => setSnackbarOpen(false)}
              message="Note archived"
              action={<Button>Extra Action</Button>}
            />
          </Stack>
          <Divider />

          <Title>Drawer</Title>
          <Stack direction="row" spacing={2}>
            <Button onClick={() => setDrawerOpen(true)}>Open Drawer</Button>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={() => setDrawerOpen(false)}
            >
              <Box sx={{ width: "50vw", padding: 4 }}>
                <Typography variant="h4" gutterBottom>
                  Drawer Title
                </Typography>
              </Box>
            </Drawer>
          </Stack>
        </Stack>
      </Box>
    </ThemeProvider>
  );
}

export default App;
