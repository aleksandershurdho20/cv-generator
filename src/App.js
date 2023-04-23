import { createTheme, ThemeProvider } from '@mui/material/styles';
import 'animate.css';
import './App.scss';
import Seo from "./Components/SEO/Seo";
import Routes from "./Routes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const theme = createTheme({
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'outlined' },
          style: {
            borderColor:"#e74645",
            color:"#e74645",
            '&:hover': {
              borderColor:"#e74645",
            },
          },
        },
        {
          props: { variant: 'contained' },
          style: {
            background:"#e74645",
            '&:hover': {
              background:"#e74645",
            },
          },
        },
        {
          props: { variant: 'bordered' },
          style: {
            background:"transparent",
            color:"#e74645",
            border:"1px solid #e74645",
            borderRadius:"160px",
            fontWeight:500,
            '&:hover': {
              background:"#e74645",
              color:"#FFF"
            },
          },
        },
    
      ],
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes />
        <Seo title="CV.AL | Kryefaqja" />
        <ToastContainer />

      </ThemeProvider>
      {/* {console.log = function () { }} */}
    </>

  );
}

export default App;
