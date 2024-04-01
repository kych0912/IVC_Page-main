import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
      primary: {
        main: "#D6D6D6",
        // light: main값을 통해 계산됨
  	    // dark: main값을 통해 계산됨
        // contrastText: main값을 통해 계산됨
      },
      gray:{
        main:'#D6D6D6',
      },
    },
});


export default theme;