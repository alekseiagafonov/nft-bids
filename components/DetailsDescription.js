import React, { useState } from "react";
import { View, Text } from "react-native";

const DetailsDescription = ({ data }) => {
  const [text, setText] = useState(data.description.slice(0, 100));
  const [readMore, setReadMore] = useState(false);

  return (
    <>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      />

      <View
        style={{
          marginVertical: 1,
        }}
      >
        <Text
          style={{
            fontSize: 12,
            fontWeight: "bold",
            color: "red",
          }}
        >
          Description
        </Text>
        <View
          style={{
            marginTop: 3,
          }}
        >
          <Text
            style={{
              color: "red",
            }}
          >
            {text}
            {!readMore && "..."}
            <Text
              style={{
                color: "red",
              }}
              onPress={() => {
                if (!readMore) {
                  setText(data.description);
                  setReadMore(true);
                } else {
                  setText(data.description.slice(0, 100));
                  setReadMore(false);
                }
              }}
            >
              {readMore ? " Show Less" : " Read More"}
            </Text>
          </Text>
        </View>
      </View>
    </>
  );
};

export default DetailsDescription;
