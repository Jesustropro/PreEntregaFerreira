import React from 'react'
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Avatar, Badge, Space } from "antd";
const CartWidget= () => {
  return (
    <Badge count={1}>
      <ShoppingCartOutlined size="large" />
    </Badge>
  );
}
export default CartWidget