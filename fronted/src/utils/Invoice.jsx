import React, { Fragment } from "react";
import { Image, Text, View, Page, Document, StyleSheet } from "@react-pdf/renderer";
import logo from "../../public/logo.png";

const Invoice = () => {
  const reciept_data = {
    id: "642be0b4bbe5d71a5341dfb1",
    invoice_no: "20200669",
    address: "739 Porter Avenue, Cade, Missouri, 1134",
    date: "24-09-2019",
    items: [
      {
        id: 1,
        desc: "do ex anim quis velit excepteur non",
        qty: 8,
        price: 179.25,
      },
      {
        id: 2,
        desc: "incididunt cillum fugiat aliqua Lorem sit Lorem",
        qty: 9,
        price: 107.78,
      },
      {
        id: 3,
        desc: "quis Lorem ad laboris proident aliqua laborum",
        qty: 4,
        price: 181.62,
      },
      {
        id: 4,
        desc: "exercitation non do eu ea ullamco cillum",
        qty: 4,
        price: 604.55,
      },
      {
        id: 5,
        desc: "ea nisi non excepteur irure Lorem voluptate",
        qty: 6,
        price: 687.08,
      },
    ],
  };
  const styles = StyleSheet.create({
    page: { fontSize: 15, paddingTop: 20, paddingLeft: 40, paddingRight: 40, lineHeight: 1.5, flexDirection: "column" },

    spaceBetween: {
      flex: 1,
      flexDirection: "row",
      color: "rgb(2 48 71)",
    },

    titleContainer: { flexDirection: "row", marginTop: 24, marginLeft: 10, fontWeight: "extrabold" },

    logo: { width: 90 },

    reportTitle: { fontSize: 18, textAlign: "center", fontWeight: "extrabold" },

    addressTitle: { fontSize: 14, fontStyle: "bold" },

    invoice: { fontWeight: "bold", fontSize: 20 },

    invoiceNumber: { fontSize: 14, fontWeight: "bold" },

    address: { fontWeight: 400, fontSize: 12 },

    theader: {
      marginTop: 20,
      fontSize: 10,
      color: "white",
      fontStyle: "bold",
      paddingTop: 4,
      paddingLeft: 7,
      flex: 1,
      height: 20,
      backgroundColor: "rgb(2 48 71)",
      borderColor: "rgb(2 48 71)",
      borderRightWidth: 1,
      borderBottomWidth: 1,
    },

    theader2: { flex: 2, borderRightWidth: 0, borderBottomWidth: 1 },

    tbody: {
      fontSize: 9,
      paddingTop: 4,
      paddingLeft: 7,
      flex: 1,
      borderColor: "whitesmoke",
      borderRightWidth: 1,
      borderBottomWidth: 1,
    },

    total: { fontSize: 9, paddingTop: 4, paddingLeft: 7, flex: 1.5, borderColor: "rgb(2 48 71)", borderBottomWidth: 2 },

    tbody2: { flex: 2, borderRightWidth: 2 },
    invoiceInfo: {
      display: "flex",
      width: "100%",
      justifyContent: "space-around",
    },
    invoiceInfoContainer: {
      flexDirection: "column",
      marginTop: 24,
      marginLeft: 10,
      width: "100vw",
      fontWeight: "extrabold",
    },
    header: {
      fontSize: 13,
    },
    companyHeaders: {
      fontSize: 11,
    },
  });
  const InvoiceTitle = () => (
    <View style={styles.titleContainer}>
      <View style={styles.spaceBetween}>
        <Image style={styles.logo} src={logo} />
        <View>
          <Text style={styles.reportTitle}>SU Electronics</Text>
          <View>
            <Text style={styles.addressTitle}>Rz F - 49, New Roshan Pura </Text>
            <Text style={styles.addressTitle}>Najafgarh, New Delhi -43</Text>
            <Text style={styles.addressTitle}>+91 - 9891214881 (Satyender Upadhyay)</Text>
          </View>
        </View>
      </View>
    </View>
  );

  const InvoiceInfo = () => (
    <View style={styles.invoiceInfoContainer}>
      <View>
        <View style={styles.invoiceInfo}>
          <Text style={styles.invoiceNumber}>| Invoice # {reciept_data.invoice_no} </Text>
          <Text style={styles.invoiceNumber}>| Date Issued:{reciept_data.date}</Text>
        </View>
      </View>
    </View>
  );
  const UserAddress = () => (
    <View style={styles.titleContainer}>
      <View style={styles.spaceBetween}>
        <View style={{ maxWidth: 200 }}>
          <Text style={styles.header}>CUSTOMER DETAILS:</Text>
          <Text style={styles.addressTitle}>Name:- Abhishek Yadav</Text>
          <Text style={styles.addressTitle}>Bill to </Text>
          <Text style={styles.address}>{reciept_data.address}</Text>
        </View>
      </View>
      <View style={styles.spaceBetween}>
        <View style={{ maxWidth: 200 }}>
          <Text style={styles.companyHeaders}>COMPANY NAME: Care System</Text>
          <Text style={styles.companyHeaders}>Company Address:</Text>
          <Text style={{ fontSize: "10px" }}>
            H.No. 37-118/3/7s-1, 2nd Floor, Tejas Jasti Arcade, Neredmet, RK Puram Rd, Sri Colony, Sainikpuri,
            Secunderabad, Telangana - 500056
          </Text>
          <Text style={{ fontSize: "9px" }}>Phone: +91 - 9724368055</Text>
        </View>
      </View>
    </View>
  );

  const TableHead = () => (
    <View style={{ width: "100%", flexDirection: "row", marginTop: 10 }}>
      <View style={[styles.theader, styles.theader2]}>
        <Text>No</Text>
      </View>
      <View style={[styles.theader, styles.theader2]}>
        <Text>Service Name</Text>
      </View>
      <View style={styles.theader}>
        <Text>Rate</Text>
      </View>
      <View style={styles.theader}>
        <Text>Service Charge </Text>
      </View>
      <View style={styles.theader}>
        <Text>Total Amount</Text>
      </View>
    </View>
  );
  const TableBody = () =>
    reciept_data.items.map((receipt) => (
      <Fragment key={receipt.id}>
        <View style={{ width: "100%", flexDirection: "row" }}>
          <View style={styles.tbody}>
            <Text>{1}</Text>
          </View>
          <View style={styles.tbody}>
            <Text>{receipt.desc}</Text>
          </View>
          <View style={styles.tbody}>
            <Text>{receipt.price} </Text>
          </View>
          <View style={styles.tbody}>
            <Text>{receipt.qty}</Text>
          </View>
          <View style={styles.tbody}>
            <Text>{(receipt.price * receipt.qty).toFixed(2)}</Text>
          </View>
        </View>
      </Fragment>
    ));
  const TableTotal = () => (
    <View style={{ width: "100%", flexDirection: "row" }}>
      <View style={styles.total}>
        <Text></Text>
      </View>
      <View style={styles.total}>
        <Text> </Text>
      </View>
      <View style={styles.tbody}>
        <Text>Total</Text>
      </View>
      <View style={styles.tbody}>
        <Text>{reciept_data.items.reduce((sum, item) => sum + item.price * item.qty, 0)}</Text>
      </View>
    </View>
  );
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <InvoiceTitle />
        <InvoiceInfo />
        <UserAddress />
        {/* <CompanyDetails /> */}
        <TableHead />
        <TableBody />
        <TableTotal />
      </Page>
    </Document>
  );
};
export default Invoice;

// v1.0

// import React from "react";
// import { Page, Text, View, Document, StyleSheet, Image } from "@react-pdf/renderer";
// import logo from "../../public/logo.png";

// const Invoice = () => {
//   const reciept_data = {
//     invoice_no: "SU003",
//     date: "09/07/2024",
//     address:
//       "H.No. 37-118/3/7s-1, 2nd Floor, Tejas Jasti Arcade, Neredmet, RK Puram Rd, Sri Colony, Sainikpuri, Secunderabad, Telangana - 500056",
//     company_name: "Care System",
//     phone: "+91 - 9724368055",
//     items: [
//       {
//         id: 1,
//         desc: "Samsung - UA40M5000ARLXL Display Repair",
//         part: "Display Repair",
//         rate: 4250,
//         service_charge: 1000,
//       },
//       {
//         id: 2,
//         desc: "Samsung - UA40M5000ARLXL Display Repair",
//         part: "Display Repair",
//         rate: 4250,
//         service_charge: 1000,
//       },
//     ],
//     total: 10500,
//     advance: 0,
//   };

//   const styles = StyleSheet.create({
//     page: {
//       padding: 40,
//       fontSize: 12,
//       lineHeight: 1.5,
//       color: "rgb(2 48 71)",
//     },
//     section: {
//       marginBottom: 20,
//     },
//     logo: {
//       width: 100,
//       marginBottom: 10,
//     },
//     header: {
//       fontSize: 16,
//       fontWeight: "bold",
//     },
//     address: {
//       fontSize: 10,
//       marginBottom: 5,
//     },
//     table: {
//       display: "table",
//       width: "auto",
//       marginTop: 20,
//     },
//     tableRow: {
//       flexDirection: "row",
//     },
//     tableColHeader: {
//       width: "16.6%",
//       backgroundColor: "#023047",
//       color: "white",
//       textAlign: "center",
//       padding: 5,
//       borderRight: "1px solid white",
//     },
//     tableCol: {
//       width: "16.6%",
//       borderRight: "1px solid #ddd",
//       padding: 5,
//       fontSize: "9px",
//       textAlign: "center",
//       alignItems: "center",
//     },
//     footer: {
//       fontSize: 10,
//       textAlign: "center",
//       marginTop: 20,
//     },
//     totalAmount: {
//       fontSize: 14,
//       fontWeight: "bold",
//       marginTop: 10,
//     },
//   });

//   const InvoiceHeader = () => (
//     <View style={styles.section}>
//       <Image style={styles.logo} src={logo} />
//       <Text style={styles.header}>SU Electronics</Text>
//       <Text style={styles.address}>Rz F - 49, New Roshan Pura, Najafgarh, New Delhi - 43</Text>
//       <Text style={styles.address}>+91 - 9891214881 (Satyender Upadhyay)</Text>
//     </View>
//   );

//   const CustomerDetails = () => (
//     <View style={styles.section}>
//       <Text style={styles.header}>CUSTOMER DETAILS:</Text>
//       <Text>Company Name: {reciept_data.company_name}</Text>
//       <Text>Company Address: {reciept_data.address}</Text>
//       <Text>Phone: {reciept_data.phone}</Text>
//     </View>
//   );

//   const InvoiceInfo = () => (
//     <View style={styles.section}>
//       <Text>Invoice #: {reciept_data.invoice_no}</Text>
//       <Text>Date Issued: {reciept_data.date}</Text>
//     </View>
//   );

//   const InvoiceTable = () => (
//     <View style={styles.table}>
//       <View style={styles.tableRow}>
//         <Text style={styles.tableColHeader}>No</Text>
//         <Text style={styles.tableColHeader}>Service Name</Text>
//         <Text style={styles.tableColHeader}>Part</Text>
//         <Text style={styles.tableColHeader}>Rate</Text>
//         <Text style={styles.tableColHeader}>Service Charge</Text>
//         <Text style={styles.tableColHeader}>Total Amount</Text>
//       </View>
//       {reciept_data.items.map((item, index) => (
//         <View style={styles.tableRow} key={item.id}>
//           <Text style={styles.tableCol}>{index + 1}</Text>
//           <Text style={styles.tableCol}>{item.desc}</Text>
//           <Text style={styles.tableCol}>{item.part}</Text>
//           <Text style={styles.tableCol}>{item.rate}</Text>
//           <Text style={styles.tableCol}>{item.service_charge}</Text>
//           <Text style={styles.tableCol}>{item.rate + item.service_charge}</Text>
//         </View>
//       ))}
//     </View>
//   );

//   const InvoiceFooter = () => (
//     <View style={styles.footer}>
//       <Text>Total: {reciept_data.total}</Text>
//       <Text>Advance: {reciept_data.advance}</Text>
//       <Text style={styles.totalAmount}>TO BE PAID: {reciept_data.total - reciept_data.advance}</Text>
//       <Text>A one-month warranty is provided for parts that have been repaired or replaced.</Text>
//     </View>
//   );

//   return (
//     <Document>
//       <Page size="A4" style={styles.page}>
//         <InvoiceHeader />
//         <InvoiceInfo />
//         <CustomerDetails />
//         <InvoiceTable />
//         <InvoiceFooter />
//       </Page>
//     </Document>
//   );
// };

// export default Invoice;

// v1.2

// import React from "react";
// import { Page, Text, View, Document, StyleSheet, Image } from "@react-pdf/renderer";
// import logo from "../../public/logo.png";

// const Invoice = () => {
//   const reciept_data = {
//     invoice_no: "SU003",
//     date: "09/07/2024",
//     address:
//       "H.No. 37-118/3/7s-1, 2nd Floor, Tejas Jasti Arcade, Neredmet, RK Puram Rd, Sri Colony, Sainikpuri, Secunderabad, Telangana - 500056",
//     company_name: "Care System",
//     phone: "+91 - 9724368055",
//     items: [
//       {
//         id: 1,
//         desc: "Samsung - UA40M5000ARLXL Display Repair",
//         part: "Display Repair",
//         rate: 4250,
//         service_charge: 1000,
//       },
//       {
//         id: 2,
//         desc: "Samsung - UA40M5000ARLXL Display Repair",
//         part: "Display Repair",
//         rate: 4250,
//         service_charge: 1000,
//       },
//     ],
//     total: 10500,
//     advance: 0,
//   };

//   const styles = StyleSheet.create({
//     page: {
//       padding: 40,
//       fontSize: 12,
//       lineHeight: 1.5,
//       color: "rgb(2 48 71)",
//     },
//     section: {
//       marginBottom: 20,
//     },
//     logo: {
//       width: 100,
//       marginBottom: 10,
//     },
//     header: {
//       fontSize: 16,
//       fontWeight: "bold",
//     },
//     address: {
//       fontSize: 10,
//       marginBottom: 5,
//     },
//     table: {
//       display: "table",
//       width: "auto",
//       marginTop: 20,
//       borderStyle: "solid",
//       borderWidth: 1,
//       borderColor: "#ddd",
//     },
//     tableRow: {
//       flexDirection: "row",
//       borderBottom: "1px solid #ddd",
//     },
//     tableColHeader: {
//       width: "16.6%",
//       backgroundColor: "#023047",
//       color: "white",
//       textAlign: "center",
//       padding: 5,
//       borderRight: "1px solid white",
//     },
//     tableCol: {
//       width: "16.6%",
//       padding: 5,
//       fontSize: "9px",
//       textAlign: "center",
//       alignItems: "center",
//       borderRight: "1px solid #ddd",
//     },
//     footer: {
//       fontSize: 10,
//       marginTop: 10,
//       flexDirection: "row",
//       justifyContent: "space-between",
//     },
//     totalAmount: {
//       fontSize: 10,
//       fontWeight: "bold",
//       textAlign: "left",
//       padding: 5,
//       borderTop: "1px solid #ddd",
//       borderBottom: "1px solid #ddd",
//       width: "33.2%",
//     },
//   });

//   const InvoiceHeader = () => (
//     <View style={styles.section}>
//       <Image style={styles.logo} src={logo} />
//       <Text style={styles.header}>SU Electronics</Text>
//       <Text style={styles.address}>Rz F - 49, New Roshan Pura, Najafgarh, New Delhi - 43</Text>
//       <Text style={styles.address}>+91 - 9891214881 (Satyender Upadhyay)</Text>
//     </View>
//   );

//   const CustomerDetails = () => (
//     <View style={styles.section}>
//       <Text style={styles.header}>CUSTOMER DETAILS:</Text>
//       <Text>Company Name: {reciept_data.company_name}</Text>
//       <Text>Company Address: {reciept_data.address}</Text>
//       <Text>Phone: {reciept_data.phone}</Text>
//     </View>
//   );

//   const InvoiceInfo = () => (
//     <View style={styles.section}>
//       <Text>Invoice #: {reciept_data.invoice_no}</Text>
//       <Text>Date Issued: {reciept_data.date}</Text>
//     </View>
//   );

//   const InvoiceTable = () => (
//     <View style={styles.table}>
//       <View style={styles.tableRow}>
//         <Text style={styles.tableColHeader}>No</Text>
//         <Text style={styles.tableColHeader}>Service Name</Text>
//         <Text style={styles.tableColHeader}>Part</Text>
//         <Text style={styles.tableColHeader}>Rate</Text>
//         <Text style={styles.tableColHeader}>Service Charge</Text>
//         <Text style={styles.tableColHeader}>Total Amount</Text>
//       </View>
//       {reciept_data.items.map((item, index) => (
//         <View style={styles.tableRow} key={item.id}>
//           <Text style={styles.tableCol}>{index + 1}</Text>
//           <Text style={styles.tableCol}>{item.desc}</Text>
//           <Text style={styles.tableCol}>{item.part}</Text>
//           <Text style={styles.tableCol}>{item.rate}</Text>
//           <Text style={styles.tableCol}>{item.service_charge}</Text>
//           <Text style={styles.tableCol}>{item.rate + item.service_charge}</Text>
//         </View>
//       ))}
//     </View>
//   );

//   const InvoiceFooter = () => (
//     <View style={{ flexDirection: "row", justifyContent: "flex-end", marginTop: 10 }}>
//       <View style={{ width: "50%", borderBottom: "1px solid #ddd", paddingBottom: 5 }}>
//         <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
//           <Text style={{ width: "50%", textAlign: "left" }}>Total:</Text>
//           <Text style={{ width: "50%", textAlign: "right" }}>{reciept_data.total}</Text>
//         </View>
//         <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
//           <Text style={{ width: "50%", textAlign: "left" }}>Advance:</Text>
//           <Text style={{ width: "50%", textAlign: "right" }}>{reciept_data.advance}</Text>
//         </View>
//         <View style={{ flexDirection: "row", justifyContent: "space-between", fontWeight: "bold" }}>
//           <Text style={{ width: "50%", textAlign: "left", fontWeight: "bold" }}>TO BE PAID:</Text>
//           <Text style={{ width: "50%", textAlign: "right", fontWeight: "bold" }}>
//             {reciept_data.total - reciept_data.advance}
//           </Text>
//         </View>
//       </View>
//     </View>
//   );

//   return (
//     <Document>
//       <Page size="A4" style={styles.page}>
//         <InvoiceHeader />
//         <InvoiceInfo />
//         <CustomerDetails />
//         <InvoiceTable />
//         <InvoiceFooter />
//       </Page>
//     </Document>
//   );
// };

// export default Invoice;
