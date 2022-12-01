import { CheckBox } from "@mui/icons-material";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Button, ButtonBase, CircularProgress, Divider, FormControl, FormHelperText, Grid, Input, InputLabel, LinearProgress, TextField, Typography } from "@mui/material";
import { createContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Counter } from "../../common/Counter/counter";
import Avatar from '@mui/material/Avatar';
import Alert from '@mui/material/Alert';
import axios from 'axios';
import ProductService from "../../service/ProductService";
import { useDispatch, useSelector } from "react-redux";
import { setProductArray, setProductInArray } from "../../redux/actions/action";

export const UserContext = createContext()

function UserListing() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const tableData = useSelector(state => state.feature.productList)

  const [user, setUser] = useState({ "name": "testing" })
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  // const [tableData, setTableData] = useState([])
  const [title, setTitle] = useState('')
  const [decription, setDecription] = useState('')
  const [price, setPrice] = useState('')
  const [loading, setLoading] = useState(false)

  //  fetch(url)
  const columns = [
    { field: 'title', headerName: 'Title', width: 300 },
    { field: 'price', headerName: 'Price', width: 300 },
    { field: 'description', headerName: 'Description', width: 300 },
    {
      field: 'category',
      width: 300,
      headerName: 'Category',
    }
  ];

  useEffect(() => {
    // fetch("https://fakestoreapi.com/products").
    //   then(res => res.json()).then(res => {
    //     console.log(res)
    //     setTableData(res)
    //   })
    axios.get("https://fakestoreapi.com/products").then(res => {
      //  setTableData(res.data);
      dispatch(setProductArray(res.data))
    })
  }, []);

  // const rows = [
  //   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  //   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  //   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  //   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  //   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  //   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  //   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  //   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  //   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  // ];
  const addProduct = async () => {
    var data = {
      "title": title,
      "price": price,
      "description": decription,
      "image": "https://i.pravatar.cc",
      "category": "electronic"
    }
    setLoading(true);
    // fetch("https://fakestoreapi.com/products",
    //   {
    //     method: "POST",
    //     body: JSON.stringify(data)
    //   }).then(res => res.json()).then((res) => {
    //     var newTableData = [...tableData]
    //     data.id = res;
    //     newTableData.unshift(data);
    //     setTableData(newTableData)
    //   })
    const res = await ProductService.postProduct(
      {
        ...data
      })
    var newTableData = [...tableData]
    data.id = res;
    newTableData.unshift(data);
    dispatch(setProductArray(newTableData))
    setLoading(false)
  }
  const onPropChange = (e, property) => {
    let value = e.target.value
    if (property == "price") {
      setPrice(value);
    } else if (property == "title") {
      setTitle(value)
    } else if (property == "description") {
      setDecription(value)
    }
  }
  return (
    <Grid container spacing={2} padding={4}>
      <Grid item xs={12} md={8} lg={8} direction={"column"}>
        <h1>
          Today
        </h1>
      </Grid>
      <Grid item xs={12} md={4} lg={4} direction={"column"}>
        <h1>
          Recent Deposits
        </h1>
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <h1>
          Recent Orders
        </h1>
        {/* <Button onClick={() => {

        }}>Text</Button> */}
        {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <Alert severity="success">This is an error alert — check it out!</Alert>
        <Alert severity="info">This is an error alert — check it out!</Alert>
        <Alert severity="warning">This is an error alert — check it out!</Alert>
        <Alert severity="error">This is an error alert — check it out!</Alert> */}
        <FormControl>
          <InputLabel htmlFor="my-input">Product Title</InputLabel>
          <Input id="my-input" onChange={(e) => {
            onPropChange(e, "title")
          }} value={title} aria-describedby="my-helper-text" />
        </FormControl>
        <div style={{ marginTop: 20 }}></div>
        <FormControl>
          <InputLabel htmlFor="my-input1">Product Decription</InputLabel>
          <Input id="my-input1" onChange={(e) => {
            onPropChange(e, "description")
          }} value={decription} aria-describedby="my-helper-text" />
        </FormControl>
        {
          loading &&
          <LinearProgress></LinearProgress>
        }

        <div style={{ marginTop: 20 }}></div>
        <FormControl>
          <InputLabel htmlFor="my-input2">Price</InputLabel>
          <Input id="my-input2" onChange={(e) => {
            onPropChange(e, "price")
          }} value={price} aria-describedby="my-helper-text" />
        </FormControl>
        <div style={{ marginTop: 20 }}></div>
        <Button color="success" variant="contained" onClick={addProduct}> Add Product </Button>
        <div style={{ height: 350 }}>
          <DataGrid
            rows={tableData}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
          />
        </div>
      </Grid>
    </Grid>

  );
}

export default UserListing;
