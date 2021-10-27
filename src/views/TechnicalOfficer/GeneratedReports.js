import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import {
	exportComponentAsPDF,
	exportComponentAsJPEG,
} from "react-component-export-image";
// export default function generateCharts() {
// 	return (
// 		<div>

// 			<Pie
// 				data={{
// 					labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
// 					datasets: [
// 						{
// 							label: "# of Votes",
// 							data: [12, 19, 3, 5, 2, 3],
// 							backgroundColor: [
// 								"rgba(255, 99, 132, 0.2)",
// 								"rgba(54, 162, 235, 0.2)",
// 								"rgba(255, 206, 86, 0.2)",
// 								"rgba(75, 192, 192, 0.2)",
// 								"rgba(153, 102, 255, 0.2)",
// 								"rgba(255, 159, 64, 0.2)",
// 							],
// 							borderColor: [
// 								"rgba(255, 99, 132, 1)",
// 								"rgba(54, 162, 235, 1)",
// 								"rgba(255, 206, 86, 1)",
// 								"rgba(75, 192, 192, 1)",
// 								"rgba(153, 102, 255, 1)",
// 								"rgba(255, 159, 64, 1)",
// 							],
// 							borderWidth: 1,
// 						},
// 					],
// 				}}
// 				width={50}
// 				height={1000}
// 				radius={5}
// 				options={{
// 					maintainAspectRatio: true,
// 				}}
// 			/>
// 		</div>
// 	);
// }

import { makeStyles } from "@material-ui/core/styles";

import Store from "@material-ui/icons/Store";

import DescriptionIcon from "@material-ui/icons/Description";

import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";

import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import { People } from "@material-ui/icons";
import { useReactToPrint } from "react-to-print";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";
import { useEffect,useState } from "react";

const useStyles = makeStyles(styles);
var today = new Date(),
	date =
		today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

function Dashboard() {
	const classes = useStyles();

	//   const ComponentToPrint = React.forwardRef((props, ref) => (
	//     // <Barcode ref={ref} value={props.value} />
	//    <div ref={ref}>
	//       <Barcode ref={ref} value={props.value} />
	//    </div>
	//   ));
	const [userStats,setUserStats]=useState();
	const [requestStats,setRequestStats]=useState();
	const [equipStats,setEquipStats]=useState({});

	useEffect(()=>{
		fetch(process.env.REACT_APP_API+'/techOff/getUserStats',{credentials:'include'})
		 .then(response => response.json())
		.then(data=>{
			console.log(data)
		  setUserStats(data.msg);
		})
		.catch(e=>console.log(e));

		fetch(process.env.REACT_APP_API+'/techOff/getRequestStats',{credentials:'include'})
		 .then(response => response.json())
		.then(data=>{
		  setRequestStats(data.msg);
		})
		.catch(e=>console.log(e));

		fetch(process.env.REACT_APP_API+'/techOff/getDashboardDataM',{credentials:'include'})
		 .then(response => response.json())
		.then(data=>{
		  setEquipStats(data.msg);
		})
		.catch(e=>console.log(e));
	  },[]);

	  console.log(equipStats);
	  console.log(userStats);
	  console.log(requestStats);
	return (
		<div>
			<GridContainer>
				<GridItem xs={12} sm={12} md={6}>
					<Card>
						<CardHeader color="warning">
							<h4 className={classes.cardTitleWhite}>Equipment Details</h4>
							<p className={classes.cardCategoryWhite}>Details as of {date}</p>
						</CardHeader>
						<CardBody>
							<Bar
								data={{
									labels: [
										"Available",
										"Requested",
										"temporary Borrowed",
										"borrowed",
										"not-usable",
										"removed",
									],
									datasets: [
										{
											label: "# of Equipments",
											data: [equipStats.available==null ? 0 : equipStats.available, equipStats.requested==null ? 0 : equipStats.requested, equipStats.temporaryBorrowed==null ? 0 :equipStats.temporaryBorrowed,equipStats.normalBorrowed==null ? 0 :equipStats.normalBorrowed,equipStats.notUsable==null ? 0 : equipStats.notUsable,equipStats.removed==null ? 0 : equipStats.removed],
											backgroundColor: [
												"rgba(255, 99, 132, 0.2)",
												"rgba(54, 162, 235, 0.2)",
												"rgba(255, 206, 86, 0.2)",
												"rgba(75, 192, 192, 0.2)",
												"rgba(153, 102, 255, 0.2)",
												"rgba(255, 159, 64, 0.2)",
											],
											borderColor: [
												"rgba(255, 99, 132, 1)",
												"rgba(54, 162, 235, 1)",
												"rgba(255, 206, 86, 1)",
												"rgba(75, 192, 192, 1)",
												"rgba(153, 102, 255, 1)",
												"rgba(255, 159, 64, 1)",
											],
											borderWidth: 1,
										},
									],
								}}
								width={100}
								height={100}
								options={{
									maintainAspectRatio: true,
									scales: {
										y: {
											beginAtZero: true,
										},
									},
								}}
							/>
						</CardBody>
					</Card>
				</GridItem>
				<GridItem xs={12} sm={12} md={6}>
					<Card>
						<CardHeader color="warning">
							<h4 className={classes.cardTitleWhite}>Equipment Details</h4>
							<p className={classes.cardCategoryWhite}>Details as of {date}</p>
						</CardHeader>
						<CardBody>
							<Pie
								data={{
									labels: [
										"Available",
										"Requested",
										"temporary Borrowed",
										"borrowed",
										"not-usable",
										"removed",
									],
									datasets: [
										{
											label: "# of Votes",
											data: [equipStats.available==null ? 0 : equipStats.available, equipStats.requested==null ? 0 : equipStats.requested, equipStats.temporaryBorrowed==null ? 0 :equipStats.temporaryBorrowed,equipStats.normalBorrowed==null ? 0 :equipStats.normalBorrowed,equipStats.notUsable==null ? 0 : equipStats.notUsable,equipStats.removed==null ? 0 : equipStats.removed],
											backgroundColor: [
												"rgba(255, 99, 132, 0.2)",
												"rgba(54, 162, 235, 0.2)",
												"rgba(255, 206, 86, 0.2)",
												"rgba(75, 192, 192, 0.2)",
												"rgba(153, 102, 255, 0.2)",
												"rgba(255, 159, 64, 0.2)",
											],
											borderColor: [
												"rgba(255, 99, 132, 1)",
												"rgba(54, 162, 235, 1)",
												"rgba(255, 206, 86, 1)",
												"rgba(75, 192, 192, 1)",
												"rgba(153, 102, 255, 1)",
												"rgba(255, 159, 64, 1)",
											],
											borderWidth: 1,
										},
									],
								}}
								width={100}
								height={60}
								options={{
									maintainAspectRatio: true,
									scales: {
										y: {
											beginAtZero: true,
										},
									},
								}}
							/>
						</CardBody>
					</Card>
				</GridItem>
				<Card>
					<CardBody>
						<Stack sx={{ width: "100%" }} spacing={2}>
							<Alert style={{ background: "rgba(255, 99, 132, 0.2)" }}>
								<AlertTitle> Avaialble Equipments 10</AlertTitle>
							</Alert>
							<Alert style={{ background: "rgba(54, 162, 235, 0.2)" }}>
								<AlertTitle> Requested Equipments 10</AlertTitle>
							</Alert>
							<Alert style={{ background: "rgba(255, 206, 86, 0.2)" }}>
								<AlertTitle> Temporarily Borrowed Equipments 10</AlertTitle>
							</Alert>
							<Alert style={{ background: "rgba(75, 192, 192, 0.2)" }}>
								<AlertTitle> Borrowed Equipments 10</AlertTitle>
							</Alert>
							<Alert style={{ background: "rgba(153, 102, 255, 0.2)" }}>
								<AlertTitle> Not usable Equipments 10</AlertTitle>
							</Alert>
							<Alert style={{ background: "rgba(255, 159, 64, 0.2)" }}>
								<AlertTitle> Removed Equipments 10</AlertTitle>
							</Alert>
						</Stack>
					</CardBody>
				</Card>
			</GridContainer>
			<GridContainer>
				<GridItem xs={12} sm={12} md={6}>
					<Card>
						<CardHeader color="warning">
							<h4 className={classes.cardTitleWhite}>Student Requests</h4>
							<p className={classes.cardCategoryWhite}>Requests as of {date}</p>
						</CardHeader>
						<CardBody>
							<Bar
								data={{
									labels: ["Pending", "Approved", "Rejected"],
									datasets: [
										{
											label: "# of Requests",
											data: [15, 27, 6],
											backgroundColor: [
												"rgba(54, 162, 235, 0.2)",
												"rgba(255, 206, 86, 0.2)",
												"rgba(75, 192, 192, 0.2)",
											],
											borderColor: [
												"rgba(54, 162, 235, 1)",
												"rgba(255, 206, 86, 1)",
												"rgba(75, 192, 192, 1)",
											],
											borderWidth: 1,
										},
									],
								}}
								width={100}
								height={100}
								options={{
									maintainAspectRatio: true,
									scales: {
										y: {
											beginAtZero: true,
										},
									},
								}}
							/>
						</CardBody>
					</Card>
				</GridItem>
				<GridItem xs={12} sm={12} md={6}>
					<Card>
						<CardHeader color="warning">
							<h4 className={classes.cardTitleWhite}>Student Requests</h4>
							<p className={classes.cardCategoryWhite}>Requests as of {date}</p>
						</CardHeader>
						<CardBody>
							<Pie
								data={{
									labels: ["Pending", "Approved", "Rejected"],
									datasets: [
										{
											label: "# of Votes",
											data: [15, 27, 6],
											backgroundColor: [
												"rgba(54, 162, 235, 0.2)",
												"rgba(255, 206, 86, 0.2)",
												"rgba(75, 192, 192, 0.2)",
											],
											borderColor: [
												"rgba(54, 162, 235, 1)",
												"rgba(255, 206, 86, 1)",
												"rgba(75, 192, 192, 1)",
											],
											borderWidth: 1,
										},
									],
								}}
								width={100}
								height={60}
								options={{
									maintainAspectRatio: true,
									scales: {
										y: {
											beginAtZero: true,
										},
									},
								}}
							/>
						</CardBody>
					</Card>
				</GridItem>
				<Card>
					<CardBody>
						<Stack sx={{ width: "100%" }} spacing={2}>
							<Alert style={{ background: "rgba(54, 162, 235, 0.2)" }}>
								<AlertTitle> Pending student requests 15</AlertTitle>
							</Alert>
							<Alert style={{ background: "rgba(255, 206, 86, 0.2)" }}>
								<AlertTitle> Approved Student requests 27</AlertTitle>
							</Alert>
							<Alert style={{ background: "rgba(75, 192, 192, 0.2)" }}>
								<AlertTitle> Rejected student requests 6</AlertTitle>
							</Alert>
						</Stack>
					</CardBody>
				</Card>
			</GridContainer>
			<GridContainer>
				<GridItem xs={12} sm={12} md={6}>
					<Card>
						<CardHeader color="warning">
							<h4 className={classes.cardTitleWhite}>User Stats</h4>
							<p className={classes.cardCategoryWhite}>
								User stats as of {date}
							</p>
						</CardHeader>
						<CardBody>
							<Bar
								data={{
									labels: ["Lecturers", "Tech Officers", "Students"],
									datasets: [
										{
											label: "# of Counts",
											data: [12, 6, 70],
											backgroundColor: [
												"rgba(255, 99, 132, 0.2)",
												"rgba(54, 162, 235, 0.2)",
												"rgba(255, 206, 86, 0.2)",
											],
											borderColor: [
												"rgba(255, 99, 132, 1)",
												"rgba(54, 162, 235, 1)",
												"rgba(255, 206, 86, 1)",
											],
											borderWidth: 1,
										},
									],
								}}
								width={100}
								height={100}
								options={{
									maintainAspectRatio: true,
									scales: {
										y: {
											beginAtZero: true,
										},
									},
								}}
							/>
						</CardBody>
					</Card>
				</GridItem>
				<GridItem xs={12} sm={12} md={6}>
					<Card>
						<CardHeader color="warning">
							<h4 className={classes.cardTitleWhite}>User stats</h4>
							<p className={classes.cardCategoryWhite}>
								user stats as of {date}
							</p>
						</CardHeader>
						<CardBody>
							<Pie
								data={{
									labels: ["Lecturers", "Tech Officers", "Students"],
									datasets: [
										{
											label: "# of Votes",
											data: [12, 6, 70],
											backgroundColor: [
												"rgba(255, 99, 132, 0.2)",
												"rgba(54, 162, 235, 0.2)",
												"rgba(255, 206, 86, 0.2)",
											],
											borderColor: [
												"rgba(255, 99, 132, 1)",
												"rgba(54, 162, 235, 1)",
												"rgba(255, 206, 86, 1)",
											],
											borderWidth: 1,
										},
									],
								}}
								width={100}
								height={60}
								options={{
									maintainAspectRatio: true,
									scales: {
										y: {
											beginAtZero: true,
										},
									},
								}}
							/>
						</CardBody>
					</Card>
				</GridItem>
				<Card>
					<CardBody>
						<Stack sx={{ width: "100%" }} spacing={2}>
							<Alert style={{ background: "rgba(255, 99, 132, 0.2)" }}>
								<AlertTitle> Lecturers 12</AlertTitle>
							</Alert>
							<Alert style={{ background: "rgba(54, 162, 235, 0.2)" }}>
								<AlertTitle> Technical Officers 6</AlertTitle>
							</Alert>
							<Alert style={{ background: "rgba(255, 206, 86, 0.2)" }}>
								<AlertTitle> Students 70</AlertTitle>
							</Alert>
						</Stack>
					</CardBody>
				</Card>
			</GridContainer>
			<GridContainer>
				<GridItem xs={12} sm={12} md={12}>
					<Card>
						<CardHeader color="warning">
							<h4 className={classes.cardTitleWhite}>User Stats</h4>
							<p className={classes.cardCategoryWhite}>
								New employees on 15th September, 2016
							</p>
						</CardHeader>
						<CardBody>
							<Table
								tableHeaderColor="warning"
								tableHead={["ID", "Name", "Email", "Country"]}
								// fetch()
								tableData={[
									["1", "Dakota Rice", "abc@gmail.com", "Niger"],
									["2", "Minerva Hooper", "abc@gmail.com", "Curaçao"],
									["3", "Sage Rodriguez", "abc@gmail.com", "Netherlands"],
									["4", "Philip Chaney", "abc@gmail.com", "Korea, South"],
								]}
							/>
						</CardBody>
					</Card>
				</GridItem>
			</GridContainer>
		</div>
	);
}

export default function exporting() {
	const componentRef = React.useRef();
	const ComponentToPrint = React.forwardRef((props, ref) => (
		<div ref={ref}>
			<Dashboard />
		</div>
	));
	const handlePrint = useReactToPrint({
		content: () => componentRef.current,
	});
	return (
		<div>
			<ComponentToPrint ref={componentRef} />
			<button onClick={handlePrint}>Export As PDF</button>
		</div>
	);
}
