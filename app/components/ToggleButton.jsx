"use client"; // Ensures the component is client-side only
import { useTheme } from "next-themes";
import { Switch } from "@nextui-org/react";
import { FaSun } from "react-icons/fa";
import { GiEvilMoon } from "react-icons/gi";

export default function ToggleButton() {
  const { theme, setTheme } = useTheme();

  // Determine if the current theme is "dark"
  const isDark = theme === "dark";

  return (
    <Switch
      size="lg"
      color="danger"
      isSelected={isDark} // Bind the current theme
      onChange={(e) => setTheme(e.target.checked ? "dark" : "light")} // Update theme on toggle
      thumbIcon={
        isDark ? (
          <GiEvilMoon/>
        ) : (
          <FaSun/>
        )
      }
    />
  );
}
