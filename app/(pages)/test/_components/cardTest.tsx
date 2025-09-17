import { Card, CardFooter, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/shared/card";
import React from "react";

const CardTest = ({ item }: { item: any }) => {
  console.log(item);

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {item.title}, {item.userId}
        </CardTitle>
        <CardDescription>Card Description</CardDescription>
        {/* <CardAction>Card Action</CardAction> */}
      </CardHeader>
      <CardContent>{item.body}</CardContent>
    </Card>
  );
};

export default CardTest;
