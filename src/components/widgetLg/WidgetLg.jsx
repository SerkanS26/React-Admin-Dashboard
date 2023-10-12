import React from "react";
import "./widgetLg.css";

const Button = ({ type }) => {
  return <button className={"widgetLgButton " + type}>{type}</button>;
};

const WidgetLg = () => {
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/8090137/pexels-photo-8090137.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">James Mitchell</span>
          </td>
          <td className="widgetLgDate">{new Date().toLocaleDateString()}</td>
          <td className="widgetLgAmount">€ 499.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/15565598/pexels-photo-15565598/free-photo-of-zwart-en-wit-man-zitten-jas.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">David Anderson</span>
          </td>
          <td className="widgetLgDate">{new Date().toLocaleDateString()}</td>
          <td className="widgetLgAmount">€ 99.00</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Michael Williams</span>
          </td>
          <td className="widgetLgDate">{new Date().toLocaleDateString()}</td>
          <td className="widgetLgAmount">€ 189.00</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/8993561/pexels-photo-8993561.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Hannah Williams</span>
          </td>
          <td className="widgetLgDate">{new Date().toLocaleDateString()}</td>
          <td className="widgetLgAmount">€ 122.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default WidgetLg;
