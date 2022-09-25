import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../models/redux";
import { getSortedMessages } from "../../services/messages";
import "./messages-page.css";

const MessagesPage = () => {
  const unsortedmessages = useSelector((state: RootState) => state.messages);

  const messages = getSortedMessages(unsortedmessages);

  return (
    <div className="messages-container">
      <h1 className="messages-page-heading">Recent Messages</h1>

      <div className="messages-table-container">
        <table className="messages-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>OTP sent </th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((el) => {
              return (
                <tr key={el.time.toString()}>
                  <td>{el.to}</td>
                  <td>{el.otp}</td>
                  <td>{el.time.toString()}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <h4 className="messages-page-sub-heading">
        *Messages are sorted from recent to last order{" "}
      </h4>
    </div>
  );
};

export default MessagesPage;
