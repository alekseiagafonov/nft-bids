import React from "react";
import { View, Text, Image } from "react-native";

/*
import {EthPrice} from './'*/
const DetailsBid = ({ bid }) => {
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
      key={bid.id}
    >
      <Image
        source={bid.image}
        resizeMode="contain"
        style={{ width: 48, height: 48 }}
      />

      <View
        style={{
          flex: 1,
          alignItems: "center",
          paddingHorizontal: 1,
        }}
      >
        <Text
          style={{
            color: "red",
          }}
        >
          <Text
            style={{
              color: "black",
              marginTop: 3,
            }}
          >
            {bid.date}
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default DetailsBid;
