import React, { useState, useEffect } from "react";
import axios from "axios";
import qs from "qs";

import "./YongsanField.css";

import { Spinner, Alert } from "react-bootstrap";

function YongsanField({ date, fieldCode, fieldName }) {
	const [loading, setLoading] = useState(false);
	const [feildList, setFieldList] = useState([]);

	useEffect(() => {
		setLoading(true);

		axios
			.get("https://8qc5nk28gi.execute-api.ap-northeast-2.amazonaws.com/prod/yongsan", {
				params: {
					curdate: date,
					curstadcode: fieldCode
				}
			})
			.then(response => {
				console.log(response);

				setFieldList(response.data.records);
				setLoading(false);
			})
			.catch(error => {});
	}, [date]);

	return (
		<div className="field_block">
			<h1 className="text-secondary">{fieldName}</h1>
			{loading ? (
				<div className="spinner_wrapper">
					<Spinner animation="border" variant="secondary" size={"sm"} />
				</div>
			) : (
				<div>
					{feildList.map((item, index) => {
						if (item[4] == "")
							return (
								<Alert className="state_wrapper" key={"state" + fieldCode + index} variant={"success"}>
									<strong>{item[3]}</strong>
								</Alert>
							);
					})}
				</div>
			)}
		</div>
	);
}

export default YongsanField;
