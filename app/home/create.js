import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Pressable,
} from "react-native"
import React from "react"
import { Ionicons, AntDesign } from "@expo/vector-icons"
import { FontAwesome } from "@expo/vector-icons"

const create = () => {
  const colors = [
    "#FF5733", // Red
    "#FFD700", // Gold
    "#5D76A9",
    "#1877F2", // Medium Purple
    "#32CD32", // Lime Green
    "#CCCCFF", // Tomato
    "#4169E1", // Royal Blue
  ]
  const days = ["M", "T", "W", "T", "F", "S", "S"]
  return (
    <View style={{ padding: 10 }}>
      <Ionicons name="arrow-back" size={24} color="black" />

      <Text style={{ fontSize: 20, marginTop: 10 }}>
        Create <Text style={{ fontSize: 20, fontWeight: "500" }}>Habit</Text>
      </Text>
      <TextInput
        style={{
          width: "95%",
          marginTop: 15,
          padding: 15,
          borderRadius: 10,
          backgroundColor: "#E1EBEE",
        }}
        placeholder="Title"
      />
      <View style={{ marginVertical: 10 }}>
        <Text style={{ fontSize: 18, fontWeight: "500" }}>Color</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            marginTop: 10,
          }}
        >
          {colors.map((item, index) => (
            <TouchableOpacity key={index} activeOpacity={0.8}>
              <FontAwesome name="square" size={30} color={item} />
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <Text style={{ fontSize: 18, fontWeight: 500 }}>Repeat</Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          marginVertical: 10,
        }}
      >
        <Pressable
          style={{
            backgroundColor: "#AFDBF5",
            padding: 10,
            borderRadius: 6,
            flex: 1,
          }}
        >
          <Text style={{ textAlign: "center" }}>Daily</Text>
        </Pressable>
        <Pressable
          style={{
            backgroundColor: "#AFDBF5",
            padding: 10,
            borderRadius: 6,
            flex: 1,
          }}
        >
          <Text style={{ textAlign: "center" }}>Weekly</Text>
        </Pressable>
      </View>
      <Text style={{ fontSize: 18, fontWeight: "500" }}>On these days</Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          marginTop: 10,
        }}
      >
        {days?.map(
          (item, index) => (
            (key = { index }),
            (
              <Pressable
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 5,
                  backgroundColor: "#E0E0E0",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>{item}</Text>
              </Pressable>
            )
          )
        )}
      </View>
      <View
        style={{
          flexDirection: "row",
          marginTop: 20,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 17, fontWeight: "500" }}>Reminder</Text>
        <Text style={{ fontSize: 17, fontWeight: "500", color: "#2774ae" }}>
          Yes
        </Text>
      </View>
      <Pressable
        style={{
          marginTop: 25,
          backgroundColor: "#00428c",
          padding: 10,
          borderRadius: 8,
        }}
      >
        <Text
          style={{ textAlign: "center", color: "white", fontWeight: "bold" }}
        >
          Save
        </Text>
      </Pressable>
    </View>
  )
}

export default create

const styles = StyleSheet.create({})
