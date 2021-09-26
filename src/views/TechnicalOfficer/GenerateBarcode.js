import React, { useState, useEffect, useParams, Component } from "react";
import {
	Avatar,
	Button,
	CssBaseline,
	TextField,
	Link,
	Paper,
	Grid,
	Typography,
	Select,
	MenuItem,
	InputLabel,
	FormControl,
} from "@material-ui/core";
import { LockOutlined } from "@material-ui/icons";
import useStyles from "../Authentication/style";
//added newly
import PropTypes from "prop-types";
import useToken from "../../useToken";
import loginImage from "../../assets/img/loginImg.jpg";
import { WindowSharp } from "@mui/icons-material";
import { exportComponentAsJPEG } from "react-component-export-image";

import Barcode from "../../components/Barcode/Barcode";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

export default function generateBarcode() {
	const componentRef = React.useRef();
	const [showResults, setShowResults] = React.useState(false);
  const [ID,setID]=useState();
	const onClicked = (event) => {
		event.preventDefault();
		setShowResults(true);
	};
	const classes = useStyles();
	const [userType, setUserType] = React.useState("");
	const handleChange = (event) => {
		setUserType(event.target.value);
		console.log(userType);
	};
	const ComponentToPrint = React.forwardRef((props, ref) => (
		// <Barcode ref={ref} value={props.value} />
		<div ref={ref}>
			<Barcode ref={ref} value={props.value} />
		</div>
	));

	return (
		<Grid container component="main">
			<CssBaseline />
			{/* <Grid item xs={false} sm={4} md={7} className={classes.image} /> */}
			<Grid item xs={12} sm={8} md={7} component={Paper} elevation={6} square>
				<div className={classes.paper}>
					<Card>
						<CardHeader color="primary">
							<h4 className={classes.cardTitleWhite}>Generate Barcode </h4>
						</CardHeader>
						<CardBody>
							<form className={classes.form} noValidate>
								<FormControl variant="outlined" className={classes.formControl}>
                  <TextField
              type="text"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              onChange={e=>setID(e.target.value)}
              label="Equipment ID"
              name="id"
              autoComplete="ID"
              autoFocus
              required 
              // values={values.email}
            />
								</FormControl>

								<Button
									//   onSubmit={handleSubmit}
									onClick={onClicked}
									type="submit"
									fullWidth
									variant="contained"
									color="primary"
									className={classes.submit}
								>
									Generate
								</Button>
							</form>
						</CardBody>
					{/* </Card> */}
				{/* </div> */}
      {/* <Card> */}
        <CardBody>
				{showResults ? (
					<div>
						<ComponentToPrint ref={componentRef} value={ID} />
						<Button color="primary" variant="contained" onClick={() => exportComponentAsJPEG(componentRef)}>
							Export As JPEG
						</Button>
					</div>
				) : null}
        </CardBody>
      </Card>
      </div>
				{/* <div>
      <input type="submit" value="Search" onClick={onClick} />
      { showResults ? <Results /> : null }
    </div>
        <ComponentToPrint ref={componentRef} value = 'something' /> */}
				{/* <button onClick={() => exportComponentAsJPEG(componentRef)}>
         Export As JPEG
        </button> */}
			</Grid>
		</Grid>
	);
}
