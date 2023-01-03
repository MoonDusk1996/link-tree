import React, { useEffect } from "react";
export default function User() {
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (pos) {
        console.log(pos.coords.latitude);
      });
    }

    fetch("./api/userdata").then((res) =>
      res.json().then((data) => {
        console.log(data);
      })
    );
  });
}
