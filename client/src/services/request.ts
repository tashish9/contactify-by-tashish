import { CONSTANTS } from "../config/constants";
import { FetchRequestData } from "../models/fetch-request-data";

const { REACT_APP_API_URI } = CONSTANTS;

export const sendRequest = async (data: FetchRequestData): Promise<any> => {
  const RequestMetaData: RequestInit = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("authToken"), // not yet in this application though
    },
    method: data.method ? data.method : "GET",
    body: data.body ? JSON.stringify(data.body) : null,
  };

  try {
    const response = await fetch(
      `${REACT_APP_API_URI}${data.endpoint}`,
      RequestMetaData
    );
    if (!response.ok) {
      throw new Error("Some error occurred");
    }
    const receivedData = await response.json();
    return receivedData;
  } catch (error: any) {
    console.error(error.message, "Error occured during request");
    throw new Error(error.message);
  }
};
