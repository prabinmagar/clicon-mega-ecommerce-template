import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Link } from "react-router-dom";
import "./OrderHistory.scss";

const ORDER_HISTORY_DATA = [
  {
    id: "96949761",
    status: "in progress",
    date: "Dec 30, 2019 05:18",
    total: 80,
    noOfProducts: 5,
  },
  {
    id: "71667167",
    status: "completed",
    date: "Dec 30, 2019 05:18",
    total: 70,
    noOfProducts: 4,
  },
  {
    id: "95214362",
    status: "canceled",
    date: "Dec 7, 2019 23:26",
    total: 2300,
    noOfProducts: 2,
  },
  {
    id: "71678367",
    status: "completed",
    date: "Dec 30, 2019 05:18",
    total: 900,
    noOfProducts: 12,
  },
  {
    id: "70007167",
    status: "completed",
    date: "Dec 30, 2019 05:18",
    total: 120,
    noOfProducts: 5,
  },
  {
    id: "71220167",
    status: "in progress",
    date: "Dec 30, 2019 05:18",
    total: 320,
    noOfProducts: 73,
  },
  {
    id: "45867167",
    status: "canceled",
    date: "Dec 30, 2019 05:18",
    total: 989,
    noOfProducts: 6,
  },
  {
    id: "71668767",
    status: "completed",
    date: "Dec 30, 2019 05:18",
    total: 360,
    noOfProducts: 4,
  },
  {
    id: "71664367",
    status: "completed",
    date: "Dec 30, 2019 05:18",
    total: 220,
    noOfProducts: 5,
  },
  {
    id: "09667167",
    status: "completed",
    date: "Dec 30, 2019 05:18",
    total: 1200,
    noOfProducts: 19,
  },
  {
    id: "71639167",
    status: "canceled",
    date: "Dec 30, 2019 05:18",
    total: 1600,
    noOfProducts: 7,
  },
  {
    id: "71867167",
    status: "in progress",
    date: "Dec 30, 2019 05:18",
    total: 80,
    noOfProducts: 1,
  },
];

const OrderHistory = () => {
  return (
    <div className="comp-order-table">
      <div className="segment-order-table scrollbar">
        <table>
          <thead>
            <tr>
              <th>order id</th>
              <th>status</th>
              <th>date</th>
              <th>total</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {ORDER_HISTORY_DATA?.map((orderItem) => {
              return (
                <tr key={orderItem.id}>
                  <td className="order-data-id">#{orderItem.id}</td>
                  <td className={`order-data-status ${orderItem.status.split(" ").join("-")}`}>
                    {orderItem.status}
                  </td>
                  <td>{orderItem.date}</td>
                  <td>
                    ${orderItem.total} ({orderItem.noOfProducts} Products)
                  </td>
                  <td>
                    <Link
                      to="/dashboard/order_history/details"
                      className="link link-secondary"
                    >
                      <span className="link-text">View Details</span>
                      <span className="link-icon">
                        <ArrowRight size={20} />
                      </span>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderHistory;
