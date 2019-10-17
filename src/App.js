import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import { Container, Row, Col } from "react-bootstrap";
import InfiniteCalendar from "react-infinite-calendar";
import "react-infinite-calendar/styles.css"; // Make sure to import the default stylesheet

import { fieldCodes } from "./constant/Yongsan";
import YongsanField from "./component/YongsanField/YongsanField";

function App() {
	const [today, setToday] = useState(new Date());

	const formatDate = date => {
		let d = new Date(date),
			month = "" + (d.getMonth() + 1),
			day = "" + d.getDate(),
			year = d.getFullYear();

		if (month.length < 2) month = "0" + month;
		if (day.length < 2) day = "0" + day;

		return [year, month, day].join("-");
	};

	const d = new Date();
	const maxDate = new Date(d.getFullYear(), d.getMonth() + 2, 0);

	return (
		<Container style={{ paddingTop: "30px", paddingBottom: "50px" }}>
			<Row>
				<Col xs={12} lg={12}>
					<InfiniteCalendar
						locale={{
							headerFormat: "M월D일",
							weekdays: ["일", "월", "화", "수", "목", "금", "토"]
						}}
						displayOptions={{
							layout: "landscape"
						}}
						width={600}
						height={350}
						selected={today}
						onSelect={setToday}
						maxDate={maxDate}
					/>
				</Col>
				<Col xs={12} lg={12}>
					{fieldCodes.map((item, index) => (
						<YongsanField key={"field" + item} date={formatDate(today)} fieldCode={item} fieldName={index + 1 + "구장"} />
					))}
				</Col>
			</Row>
		</Container>
	);
}

export default App;
